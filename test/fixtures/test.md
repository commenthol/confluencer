## footnotes

This is a [^footnote].

## colored text

<font color="red">text in red</font>

<font color="#0000ff">text in blue</font>

## {toc}

!toc

**pre-processed with markedpp**

<!-- !toc (minlevel=2) -->

* [footnotes](#footnotes)
* [{anchor}](#anchor)
* [{status}](#cross-ref)
* [{note}](#note)
* [{info}](#info)
* [{warning}](#warning)
* [{code}](#code)
* [{plantuml}](#plantuml)

<!-- toc! -->

## {anchor}

Write your [cross-references](#cross-ref) as with markdown...

```html
[Goto anchor](#anchor)
...
<a name="anchor"></a>
```

<a name="cross-ref"></a>

## {status}

This shall render a !status(STATUS) macro.

In !status(color=Red RED) !status(color=Yellow YELLOW) !status(color=Blue Blue) !status(color=Green GREEN)...

## {note}

> Note the TWO backticks ``

No title

``!note

- Note 1
- And here is some text

``

With title

``!note(This is the note title)

- Note 1
- And here is some text

``

## {info}

> Note the TWO backticks ``

No Title

``!info

- Info
- And here is some text

``

With Title

``!info(This is the info title)

- Info
- And here is some text

``

## {warning}

> Note the TWO backticks ``

No title

``!warning

- Warning
- And here is some text

``

With title

``!warning(This is the warning title)

- Warning
- And here is some text

``

## {code}

> Note the THREE backticks ```

```js
// Write your code as usual...
(function () {
  console.log('This gets converted...')
})()
```

Just text

```
This is just a text clock

- one
- two
- three
```

## {plantuml}

```!plantuml
@startuml

' Write your plantuml code as usual...

actor Foo1
boundary Foo2
control Foo3
entity Foo4
database Foo5

Foo1 --> Foo2 : To boundary
Foo1 --> Foo3 : To control
Foo1 --> Foo4 : To entity
Foo1 --> Foo5 : To database

@enduml
```

```!plantuml(format=png)
@startuml

Alice --> Bob : Hello Bob
Alice <.. Bob : Hi Alice

@enduml
```


[^footnote]: the footnote text
