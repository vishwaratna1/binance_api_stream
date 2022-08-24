const { BINANCE_ENDPOINT } = require('../config');
const router = require('express').Router();
// const fetch = require('node-fetch')

router
    .get("/", async (req, res) => {
        try{
            let response = await fetch(BINANCE_ENDPOINT)
            response = await response.json()
            return res.send(response)
        } catch(err) {
            console.log(err);
            return res.status(500).send({
                message:"Something went wrong!",
                error: String(err)
            })
        }
    })

module.exports = router