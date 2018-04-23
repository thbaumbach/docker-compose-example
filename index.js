var redis = require('redis'),
    express = require('express'),
    client = redis.createClient({
        host: process.env.REDIS_HOST || '127.0.0.1',
        port: process.env.REDIS_PORT || 6379
    }),
    port = process.env.HTTP_PORT || 8080,
    app = express();

app.get('/', function(req, res) {
    client.setnx('visitors', '0', function(err) {
        client.incr('visitors', function(err, reply) {
            res.send('Hello, #' + reply + '!');
        });
    });
});

app.listen(port, function() {
    console.log('app listening on port ' + port);
});
