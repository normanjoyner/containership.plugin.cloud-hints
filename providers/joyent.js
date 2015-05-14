var fs = require("fs");

module.exports = {

    is_true: function(fn){
        fs.stat("/lib/smartdc", function(err){
            if(err)
                return fn();
            else{
                return fn({
                    provider: "joyent"
                });
            }
        });
    }

}
