# Templ Tools

[GitHub](https://github.com/meteor-templ/tools) [Atmosphere.js](atmospherejs.com/templ/tools)

Tools to work with templates.

## Install

```
meteor add templ:tools
```

## Documentation

### Templ.onCreated

For example, to create a zone to ignore the momentum.

```html
{{#momentum plugin='fade'}}
    {{#Templ.onCreated}}
    {{/Templ.onCreated}}
{{/momentum}}
```

## Versions