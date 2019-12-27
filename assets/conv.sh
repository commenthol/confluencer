#!/bin/bash

# set -x

test -f out && rm out

_convert () {
  local file=$1
  local b64=$(base64 -w 0 $file)
  local css=$(basename $file .svg)
  echo -e "\n.wysiwyg-macro[data-macro-name=$css] {" >> out
  echo "  background-image: url(data:image/svg+xml;base64,$b64);" >> out
  echo "}" >> out
}

for file in $(ls -1 *.svg); do
  _convert $file
done
