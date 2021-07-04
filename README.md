# confluencer

> convert markdown to copy &amp; paste ready confluence rich text

This is a post-markdown, post-html processor to render macro definitions as confluence rich-text.

This project is used in [md-fileserver](https://npmjs.org/package/md-fileserver), which is capable to render confluence html in the browser.<br> 
**Hint:** Start the server with `mdstart -c <file.md>` 

## table of contents

<!-- !toc (minlevel=2 omit="table of contents") -->

* [install](#install)
* [usage](#usage)
* [supported markdown extensions](#supported-markdown-extensions)
  * [footnotes](#footnotes)
  * [colored text](#colored-text)
  * [{toc}](#toc)
  * [{status}](#status)
  * [{note}, {warning}, {info}, {tip}](#note-warning-info-tip)
  * [{code}](#code)
  * [{anchor}](#anchor)
  * [{plantuml}](#plantuml)
* [license](#license)

<!-- toc! -->

## install

    npm i -g confluencer

## usage

**for copy n paste**

1. Run from terminal

        markdown-it test/fixtures/test.md | confluencer > out.html

2. Open file in browser and copy & paste content to Confluence Page

**for display**

If you'd like to see a preview of the html page

1. Run from terminal

        markdown-it test/fixtures/test.md | confluencer --html > out.html

## supported markdown extensions

### footnotes

    This is a [^footnote].

    [^footnote]: the footnote text    

### colored text

    <font color="red">text in red</font>

### {toc}

Write `!toc` in your markdown text.

Options:

    !toc
    !toc(minlevel=2)
    !toc(minlevel=2 maxlevel=5)

### {status}

This shall render a `!status(STATUS)` macro with grey background with "STATUS" as containing text.

Other colors

    !status(color=Red RED)
    !status(color=Yellow YELLOW)
    !status(color=Blue Blue)
    !status(color=Green GREEN)

### {note}, {warning}, {info}, {tip}

> Note the TWO backticks ``

    ``!note(This is the note title)

    - Note 1
    - And here is some text

    ``

Warning boxes

    ``!warning(This is the info title)

    ``

Info boxes

    ``!info()

    info-box without title

    ``

If admonitions are attributed with [markdown-it-admon](https://npmjs.org/package/markdown-it-admon) plugin they are transformed as well if matching the markdown or markup:

```md
!!! note
    This is a note.
```

```html
<div class="admonition note">
<p class="admonition-title">Note</p>
<p>This is a note.</p>
</div>
```

### {code}

Write your code as usually using three or more backticks

    ```js
    // Write your code as usual...
    (function () {
      console.log('This gets converted...')
    })()
    ```

### {anchor}

Write your cross-references in markdown...

```html
[Goto anchor](#anchor)
...
<a name="anchor"></a>
```

### {plantuml}

If using together with plantuml make sure to install plantuml together with `graphviz` and `java`.

On macos consider

    brew install plantuml

on linux you may use [plantuml-install](https://npmjs.com/package/plantuml-install).

    npm i -g plantuml-install

or use the `PLANTUML_JAR` environment variable to point to your `plantuml.jar` file.


Write [PlantUML][] code within a code block.

    ```!plantuml
    @startuml

    Alice -> Bob : Hello Bob
    Alice <-- Bob : Hi Alice

    @enduml
    ```

Default format is "svg". For "png" use:  

    ```!plantuml(format=png)
    ```

See [./test/fixtures/test.md](./test/fixtures/test.md) for an example.

For other (not yet supported) macros see [Macros][].


## license

MIT licensed

[Macros]: https://confluence.atlassian.com/doc/macros-139387.html
[PlantUML]: https://plantuml.com

----
