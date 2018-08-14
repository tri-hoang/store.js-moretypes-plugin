Store.js moreTypes Plugin
========

moreTypes is a support plugin for the [Store.js](https://github.com/marcuswestin/store.js) library. 

It enables Store.js to handle `Map` and `Set` data with built-in definitions. 

User can also define their own handlers for any other unsupported data type.

Usage
-----------
```js
// Copy moretypes.js to your app folder
var store = require('store');
var moreTypes = require('./moretypes.js');
store.addPlugin(moreTypes);
```
