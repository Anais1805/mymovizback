var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');


router.get('/movies', (req, res)=> {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.OWM_API_KEY}`)
    .then(resp => resp.json())
    .then(data => {
        res.json({movies : data.results})
    })
})

module.exports = router;
