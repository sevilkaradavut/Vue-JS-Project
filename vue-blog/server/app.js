var express = require("express");
var app = express();
var http = require("http").createServer(app);
var bodyParser = require("body-parser");
var cors = require("cors");
var port = 3000;
var mysql = require("mysql");
var db = mysql.createConnection({
    host: "localhost",
    database: "vue-blog",
    user: "root",
    password: "",
});
db.connect((err) => {
    if (err) {
        console.log("db error!");
    } else {
        console.log("db success");
    }
});
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send("API!");
});

app.get('/posts', (req, res) => {
    var sql = 'select * from posts order by date desc';
    db.query(sql, (err, posts) => {
        res.send(posts);
    });
});
app.post('/post-detail', (req, res) => {
    var slug = req.body.slug;
    var sql = 'select * from posts where slug=?';
    db.query(sql, [slug], (err, post) => {
        if (err) {
            res.json({
                code: 'error'
            });
        } else if (post.length > 0) {
            res.send(post);
        } else {
            res.json({
                code: 'not_found_post'
            });
        }

    });
});
http.listen(port, () => {
    console.log('Server is running on ${port} PORT');
});