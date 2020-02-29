# confluencer

> convert markdown to copy &amp; paste ready confluence rich text

This is a post-markdown, post-html processor to render macro definitions as confluence rich-text.

## table of contents

<!-- !toc (minlevel=2 omit="table of contents") -->

* [install](#install)
* [usage](#usage)
* [supported markdown extensions](#supported-markdown-extensions)
* [{status}](#status)
  * [{note}, {warning}, {info}](#note-warning-info)
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

## {status}

This shall render a `!status(STATUS)` macro with grey background with "STATUS" as containing text.

Other colors

    !status(color=Red RED)
    !status(color=Yellow YELLOW)
    !status(color=Blue Blue)
    !status(color=Green GREEN)

### {note}, {warning}, {info}

> Note the THREE ticks `'` (not backticks)

    '''!note(This is the note title)

    - Note 1
    - And here is some text

    '''

Warning boxes

    '''!warning(This is the info title)

    '''

Info boxes

    '''!info()

    info-box without title

    '''

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

    ```!plantuml()
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
