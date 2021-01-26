const express = require('express')
const app = express()
const birds = require('./db/birds.js')

//all birds
app.get('/birds', (req, res)=>{
    res.json({
        status: 200,
        birds
    })
})

//bird by id
app.get('/birds/id/:id', (req, res)=>{
    const oneBird = birds[req.params.id]
    if (oneBird){
        res.json({
            status: 200,
            birds: oneBird
        })
    } else {
        res.json({
            status: 404,
            msg: `cannot find any birds at this index: ${req.params.id}`
        })
    }
})

//bird by type
app.get('/birds/type/:type', (req, res)=>{
    const birdType = birds[req.params.type]
    if (birdType){
        res.json({
            status: 200,
            birds: birdType
        })
    } else {
        res.json({
            status: 404,
            msg: `cannot find any birds of this type: ${req.params.type}`
        })
    }
})

//query by city
app.get(`/birds?city=nyc`, (req, res)=>{
    const city = birds.filter((city)=> birds.city === req.query.city)
    if (city){
        res.json({
            status: 200,
            birds: bird[0][req.query.city]
        })
    } else {
        res.json({
            status: 404,
            msg: `cannot find any birds in this city: ${req.query.city}`
        })
    }
    
})


//query by type
app.get(`/birds?type=pigeon`, (req, res)=>{
    const type = birds.filter((type)=> birds.type === req.query.type)
    if (type){
        res.json({
            status: 200,
            birds: type[0][req.query.city]
        })
    } else {
        res.json({
            status: 404,
            msg: `cannot find any birds of this type: ${req.query.type}`
        })
    }
    
})

const PORT = 3000

app.listen(PORT,()=>{
    console.log(`Express server listening on port ${PORT}`)
})
