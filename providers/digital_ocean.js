var async = require("async");
var request = require("request");

module.exports = {

    is_true: function(fn){
        async.parallel({
            droplet_id: function(fn){
                var options = {
                    url: "http://169.254.169.254/metadata/v1/id",
                    method: "GET",
                    timeout: 5000
                }

                request(options, function(err, response){
                    if(err || response.statusCode != 200)
                        return fn();
                    else
                        return fn(null, response.body);
                });
            },

            region: function(fn){
                var options = {
                    url: "http://169.254.169.254/metadata/v1/region",
                    method: "GET",
                    timeout: 5000
                }

                request(options, function(err, response){
                    if(err || response.statusCode != 200)
                        return fn();
                    else
                        return fn(null, response.body);
                });
            }
        }, function(err, metadata){
            metadata.provider = "digitalocean";
            return fn(metadata);
        });
    }

}
