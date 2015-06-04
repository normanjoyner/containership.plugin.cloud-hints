var _ = require("lodash");
var request = require("request");

module.exports = {

    is_true: function(fn){

        var options = {
            url: "https://metadata.packet.net",
            method: "GET",
            timeout: 5000
        }

        request(options, function(err, response){
            if(err|| response.statusCode != 200)
                return fn();
            else{
                return fn({
                    provider: "packet"
                });
            }
        });

    }

}
