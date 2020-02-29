# confluencer(1) -- convert markdown to copy & paste ready confluence rich text

## SYNOPSIS

    confluencer [options] filename

## OPTIONS

* `-h`, `--help`:
  Display this help and exit.

* `--version`:
  Output version information and exit.

* `-i`, `--input` `<filename>`:
  input from filename

* `-o`, `--output` `filename`:
  output to filename

* `--html`:
  output HTML for preview (not confluence HTML)

## EXAMPLE

Run from terminal

    markdown-it your-markdown-file.md | confluencer > out.html

Getting a HTML preview

    markdown-it your-markdown-file.md | confluencer --html > out.html