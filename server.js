'use strict';

const express = require('express');
const pg = require('pg');
require('dotenv').config();
const methodOverride = require('method-override')
// const client
const superagent = require('superagent');
const app = express();
const PORT = process.env.PORT;
// --------------------------------------
// --------------------------------------
// --------------------------------------
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static('./public'));
app.set('view engine', 'ejs');
// --------------------------------------
// --------------------------------------
// --------------------------------------
app.get('/', test);
app.get('/home', albumHome);
app.post('/fav', addFav);
app.get('herokuapp.com/api/:digimon', showDet);
app.post('',);
app.delete('/herokuapp.com/api/:digimon', deleteFav);
// --------------------------------------
// --------------------------------------
// --------------------------------------
function albumHome(req, res) {
    let digiz = [];

    let url = 'https://digimon-api.herokuapp.com/api/digimon';
    superagent.get(url).then(data => {

        data.body.forEach(element => {
            digiz.push(new Digimon(element));
        });
    })
    res.render('/home', { tomCrooz: digiz });
    console.log(digiz);
};
// --------------------------------------
// --------------------------------------
// --------------------------------------
function addFav(req, res) {
    let query = `INSERT INTO digimon(name,level) VALUES ($1,$2);`;
    let values = [qurey.params.data];
    client.query(qurey, vlaues).then(() => {
        res.redirect('/favorite');
    })
}
// --------------------------------------
// --------------------------------------
// --------------------------------------
function showDet(req, res) {
    let query = `UPDATE digtab ${params.rows[0]} WHERE $1,$2;`
    client.qurey(query).then(data => {
        res.redirect('/favorite');
    });
}
// --------------------------------------
// --------------------------------------
// --------------------------------------
function deleteFav(req, res) {
    let query = `DELETE FROM digtab WHERE $1`
    client.query(qurey).then(() => {
        res.redirect('/favorite');
    })
};
// --------------------------------------
// --------------------------------------
// --------------------------------------
function Digimon(monsta) {
    this.name = monsta.name
    this.image = monsta.image
    this.level = monsta.level
};
// --------------------------------------
// --------------------------------------
// --------------------------------------
function test(req, res) {
    let url = 'https://digimon-api.herokuapp.com/api/digimon';
    superagent.get(url).then(data => {

    });
    res.send('hi');
};
// --------------------------------------
// --------------------------------------
// --------------------------------------
app.listen(PORT, () => {
    console.log(`We are here bois port ${PORT}`);
});