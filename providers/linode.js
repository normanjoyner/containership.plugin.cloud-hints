var _ = require("lodash");
var async = require("async");
var request = require("request");

module.exports = {

    is_true: function(fn){
        if(os.release().indexOf("linode") != -1){
            return fn({
                provider: "linode"
            });
        }
        else
            return fn();
    }

}
