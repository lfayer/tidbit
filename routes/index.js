var Bookmark = require('../lib/Bookmark');

module.exports = function(app) {
/*
 * GET home page.
 */
    app.get('/', function(req, res){
        res.render('index', {
                });
    });
/* 
 * GET submit a bookmark 
 */
    app.get('/bookit', function(req, res){
        res.render('bookit', {
                    p_location: req.query.l,
                    p_title: req.query.t
                });
    });
/*
 * POST new bookmark.
 */
    app.post('/store', function(req, res){
        var t = req.body.t;
        var l = req.body.l;
        var tags = req.body.tags;

        Bookmark.store(l, t, tags, function(err) {
            if (err) {
                console.log("storage error:"+err);
                return err;
            } else {
            }
        });


    });
};
