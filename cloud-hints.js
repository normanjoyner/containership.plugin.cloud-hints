var fs = require("fs");
var _ = require("lodash");
var async = require("async");

module.exports = {

    get_hints: function(core){
        var cloud = {};

        var providers = fs.readdirSync([__dirname, "providers"].join("/"));
        async.each(providers, function(provider, fn){
            provider = require([__dirname, "providers", provider].join("/"));
            provider.is_true(function(attributes){
                if(!_.isUndefined(attributes))
                    cloud = attributes;

                return fn();
            });
        }, function(){
            var attributes = core.cluster.legiond.get_attributes();
            core.cluster.legiond.set_attributes({
                tags: _.defaults({
                    cloud: cloud
                }, attributes.tags)
            });
        });
    }

}
