var request = require("request");

module.exports = {

    is_true: function(fn){
        var options = {
            url: "http://169.254.169.254/metadata/v1/region",
            method: "GET",
            timeout: 5000
        }

        request(options, function(err, response){
            if(err || response.statusCode != 200)
                return fn();
            else{
                return fn({
                    provider: "digitalocean",
                    region: response.body
                });
            }
        });
    }

}
