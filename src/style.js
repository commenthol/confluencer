const cnflStyle = `
<style>
img.emoticon {
  vertical-align: text-bottom;
  width: 16px;
  height: 16px
}

.wysiwyg-macro {
  background-color: #f0f0f0;
  background-position: 0 0;
  background-repeat: no-repeat;
  border: 1px solid #ddd
}

.wysiwyg-macro {
  padding: 24px 2px 2px 2px;
  width: 100%
}

.wysiwyg-macro-body {
  background-color: #fff;
  border: 1px solid #ddd;
  margin: 0;
  padding: 10px
}

.wysiwyg-macro-body>p:first-child {
  margin-top: 0
}

.wysiwyg-macro-body>p:last-child {
  margin-bottom: 0
}

.wysiwyg-macro-body>pre {
  -moz-tab-size: 4;
  -ms-tab-size: 4;
  -webkit-tab-size: 4;
  tab-size: 4;
  margin: 0;
  white-space: pre-wrap
}

td .wysiwyg-macro-body {
  min-width: 200px
}

.confluence-embedded-image {
  cursor: default;
  max-width: calc(100% - 4px);
  margin-left: 2px;
  margin-right: 2px;
  vertical-align: text-bottom
}

.confluence-embedded-image[width],
.confluence-embedded-image[height] {
  max-width: none
}

table.wysiwyg-macro {
  border-collapse: separate
}

.wysiwyg-unknown-macro {
  vertical-align: text-bottom
}

p+table.wysiwyg-macro,
table.wysiwyg-macro+p {
  margin-top: 10px
}

.editor-inline-macro {
  background-color: #f0f0f0;
  border: 1px solid #ddd;
  margin: 0 2px;
  min-height: 24px;
  vertical-align: text-bottom
}

.confluenceTh>.editor-inline-macro,
.confluenceTh>.wysiwyg-unknown-macro,
.confluenceTd>.editor-inline-macro,
.confluenceTd>.wysiwyg-unknown-macro {
  vertical-align: inherit
}

table.confluenceTable {
  margin-bottom: 0
}

img.confluence-embedded-image,
img.editor-inline-macro,
table.wysiwyg-macro {
  cursor: move
}
</style>
`

const htmlStyle = `
<style>
:root {
  --radius: 0.25em;
}

cnfl-status {
  background: #999999;
  color: white;
  padding: var(--radius);
  border-radius: var(--radius);
  font-weight: bold;
}
cnfl-status[color=Red] { background: #ff0000; }
cnfl-status[color=Yellow] { background: #ffcc00; color: black; }
cnfl-status[color=Green] { background: #33ff33; color: black;}
cnfl-status[color=Blue] { background: #00ccff }

cnfl-note {
  display: block;
  background: #fcfcfc;
  border: 1px solid#ccc;
  border-radius: 5px;
  color:#333;
  margin: 10px 0 1em 0;
  min-height: 20px;
  padding: 10px;
  position: relative;
}
cnfl-note[macro=note] {
  background: #fffdf6;
  border-color: #ffeaae;  
}
cnfl-note[macro=note]:before { font-weight: bold; content: "\\26a0"; }
cnfl-note[macro=note][title]:before { font-weight: bold; content: "\\26a0" " " attr(title); }

cnfl-note[macro=warning] {
background:#fff8f7;
border-color:#d04437;
}
cnfl-note[macro=warning]:before { font-weight: bold; content: "\\26d4"; }
cnfl-note[macro=warning][title]:before { font-weight: bold; content: "\\26d4" " " attr(title); }

cnfl-note[macro=info] {}
cnfl-note[macro=info]:before { font-weight: bold; content: "\\1F6C8"; }
cnfl-note[macro=info][title]:before { font-weight: bold; content: "\\1F6C8" " " attr(title); }

</style>
`

function style (isHtml) {
  return isHtml
    ? htmlStyle
    : cnflStyle
}

module.exports = {
  style
}