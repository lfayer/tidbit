var db = require('./db');

var Bookmark = {
    store: function(url, title, tags, cb) {
        var query = {
            name: 'store',
            text: 'insert into bookmarks (userid, url, title, tags) values ($1,$2,$3,$4)',
            values: [ 1, url, title, tags ]
        };
        db.query(query, function(err, result) {
            return (err) ? cb(err, undefined) : cb(undefined, result);
        });
    },
}

module.exports = Bookmark;
