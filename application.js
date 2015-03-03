var ContainershipPlugin = require("containership.plugin");
var cloud_hints = require([__dirname, "cloud-hints"].join("/"));

module.exports = new ContainershipPlugin({
    type: "core",

    initialize: function(core){
        cloud_hints.get_hints(core);
    },

    reload: function(){}
});
