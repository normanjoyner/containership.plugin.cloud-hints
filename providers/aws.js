var request = require("request");

module.exports = {

    is_true: function(fn){
        var options = {
            url: "http://169.254.169.254/latest/meta-data/placement/availability-zone",
            method: "GET",
            timeout: 5000
        }

        request(options, function(err, response){
            if(err || response.statusCode != 200)
                return fn();
            else{
                var region = response.body.slice(0, -1);
                var availability_zone = response.body.slice(-1);
                return fn({
                    provider: "aws",
                    region: region,
                    availability_zone: availability_zone
                });
            }
        });
    }

}
