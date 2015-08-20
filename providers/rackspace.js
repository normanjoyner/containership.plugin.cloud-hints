var child_process = require("child_process");

module.exports = {

    is_true: function(fn){

        child_process.exec("xenstore-read vm-data/provider_data/provider", function(err, response){
            if(err || response.toLowerCase() != "rackspace\n")
                return fn();

            return fn({
                provider: "rackspace"
            });
        });

    }

}
