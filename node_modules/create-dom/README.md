# create-dom

[![NPM version][npm-version-image]][npm-url]
[![Gitter][gitter-image]][gitter-url]
[![Dependency Status][dependency-status-image]][dependency-status-url]

Lightweight create DOM element helper.

## Install

There are several ways to get a copy of create-dom. Pick whichever one you like:

- Use it via UNPKG: https://unpkg.com/create-dom/index.js. This is a simple way to embed it on a webpage without having to do any other setup.
- Install via NPM: `npm install --save create-dom`
- Install via YARN: `yarn add create-dom`

## Require

```js
const dom = require('create-dom');
```

## Documentation

- [CHANGELOG](./CHANGELOG.md)

## Examples

Add title with link to body

```js
document.body.appendChild(
  dom('div', {}
    dom('h1', {}
      dom('a', { href: 'https://github.com/ghoullier/create-dom' }, 'Fork me on GitHub!')
    )
  )
)
```

[gitter-image]: https://badges.gitter.im/Join%20Chat.svg
[gitter-url]: https://gitter.im/ghoullier/create-dom

[dependency-status-image]: http://img.shields.io/gemnasium/ghoullier/create-dom.svg?style=flat
[dependency-status-url]: https://gemnasium.com/ghoullier/create-dom

[npm-version-image]: http://img.shields.io/npm/v/create-dom.svg?style=flat-square
[npm-url]: https://npmjs.org/package/create-dom
