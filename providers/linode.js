var os = require("os");

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
