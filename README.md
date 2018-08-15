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

```js
var store = require("store")
var moreTypes = require("store.js-moretypes")
store.addPlugin(moreTypes)
```

Usage
-----------
Basic usage example
```js
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
<br><br>
`add_types({})` requires a definition as follows:

`key`: name got from value.constructor.name

`value`: consists of optional `replacer` and `reviver`

&nbsp;&nbsp; `replacer`: f(any data) => JSON.stringify() compatible data

&nbsp;&nbsp; `reviver`: f(Object from JSON.parse()) => any data

Custom datatype usage example
```js
// A custom datatype
var Person = function(p_names) {
    this.first = p_names.first;
    this.last = p_names.last;
}

// Add handlers for the datatype
store.add_types({
    Person: {
        replacer: (obj) => ({first: obj.first, last: obj.last}),
        reviver: (val) => new Person(val)
    }
})

var person = new Person({first: "Tri", last: "Hoang"})
store.set('tri', person)'

console.log(person);
console.log(store.get('tri'));
// Output:
// Person { first: 'Tri', last: 'Hoang' }
// Person { first: 'Tri', last: 'Hoang' }
```
