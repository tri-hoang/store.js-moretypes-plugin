Store.js moreTypes Plugin
========
[![npm version](https://badge.fury.io/js/store.js-moretypes.svg)](https://badge.fury.io/js/store.js-moretypes)

moreTypes is a datatype support plugin for the [Store.js](https://github.com/marcuswestin/store.js) library. 

It enables Store.js to handle `Map` and `Set` data with its built-in definitions. 

User can also define their own handlers for any other unsupported datatypes.

Installation
-----------
```sh
npm i store.js-moretypes
```

Usage
-----------
```js
var store = require("store")
var moreTypes = require("store.js-moretypes")
store.addPlugin(moreTypes)

// Basic usuage example
var map = new Map();
map.set('a', 'ok');
map.set('b', 'ez');
map.set('c', new Set([42, new Map()]));
store.set('moreTypes', map)
console.log(map);
console.log(store.get('moreTypes'))
// Output: 
// Map { 'a' => 'ok', 'b' => 'ez', 'c' => Set { 42, Map {} } }
// Map { 'a' => 'ok', 'b' => 'ez', 'c' => Set { 42, Map {} } }
```
