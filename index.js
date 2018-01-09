var express = require('express');
var faker = require('faker');
var app = express();

app.post('/test', function (req, res) {
    console.log('wwwwwwjjjj')
    let users = []
    for (let i = 0; i < 10; i++) {
        users.push({
            name: faker.name.findName(),
            email: faker.internet.email(),
            avatar: faker.image.avatar()
        })
    }
    res.json({ users:[] });
});


app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});