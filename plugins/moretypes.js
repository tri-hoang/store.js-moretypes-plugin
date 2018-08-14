var namespace = "more_types";

module.exports = moreTypes;

function moreTypes() {
    var extras = this.createStore(this.storage, null, this._namespacePrefix+namespace);
    var cvars = {};
    var types = {
        Map: {
            encode: function (val) { return Array.from(val.entries()); },
            decode: function (val) { return new Map(val); }
        }
    };
    
    return {
        set: moretypes_set,
        get: moretypes_get,
        set_types: moretypes_set_types,
        set_vars: moretypes_set_cvars
    };
    
    function moretypes_set(super_fn, key, val) {
        var type = val.constructor.name;
        
        if (key in cvars && 'encode' in cvars[key]) {
            val = cvars[key].encode(val)
        }
        else if (type in types && 'encode' in types[type]) {
            val = types[type].encode(val);
            extras.set(key, type);
        }
        
        return super_fn(key, val);
    }
    
    function moretypes_get(super_fn, key) {
        var val = super_fn(key);
        var type = extras.get(key);
        
        if (key in cvars && 'decode' in cvars[key]) {
            val = cvars[key].decode(val)
        }
        else if (type !== undefined && type in types && 'decode' in types[type]) {
            val = types[type].decode(val);
        }
        
        return val;
    }
    
    function moretypes_set_types(super_fn, user_types) {
        for (var key in user_types) {
            types[key] = user_types[key];
        }
        
        return;
    }
    
    function moretypes_set_cvars(super_fn, user_cvars) {
        for (var key in user_cvars) {
            cvars[key] = user_cvars[key];
        }
        
        return;
    }
}