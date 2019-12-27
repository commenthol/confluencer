
## footnotes

This is a [^footnote].

To correctly render a footnote on a defined page you'll need to add

```html
<base href="https://my.confluence.com/path/to/page">
```

## {status}

This shall render a !status(STATUS) macro.

In !status(color=Red RED) !status(color=Yellow YELLOW) !status(color=Blue Blue) !status(color=Green GREEN)...

## {note}

> Note the TWO backticks ``

``!note(This is the note title)

- Note 1
- And here is some text

``

## {info}

> Note the TWO backticks ``

No Title

``!info()

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

``!warning(This is the warning title)

- Warning
- And here is some text

``

With title

``!warning(This is the warning title)

- Warning
- And here is some text

``

## {code}

> Note the THREE backticks ``

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

```!plantuml(format=svg)
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
