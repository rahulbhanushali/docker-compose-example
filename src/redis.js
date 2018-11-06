var Redis = require('ioredis');

var redis = new Redis({
    host: 'redis'
});

redis.set('foo', 'bar');

module.exports = redis