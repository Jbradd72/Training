const express = require('express');
var app = express();

app.get('/api/parsetime', (req, res)=>{
    var q = req.query.iso;
    var time = new Date(q);
    var objRes = {};
    objRes.hour = time.getHours();
    objRes.minute = time.getMinutes();
    objRes.second = time.getSeconds();

    res.write(JSON.stringify(objRes));
    res.end();
});

app.get('/api/unixtime', (req, res)=>{
    var q = req.query.iso;
    var unixtime = Date.parse(q);
    objRes = {};
    objRes.unixtime = unixtime;
    res.write(JSON.stringify(objRes));
    res.end();
});

app.listen(Number(process.argv[2]));