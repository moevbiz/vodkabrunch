require('dotenv').config()

const express = require('express')
const axios = require('axios')
const app = express()
const port = 3000

const sheetID = process.env.GOOGLE_SHEET_ID;
const googleSheetUrl = `https://spreadsheets.google.com/feeds/list/${sheetID}/1/public/values?alt=json`;

// const checkResult = res => res.ok ? res.json() : Promise.resolve({});

app.get('/api/recipes', (req, res, next) => {
    axios.get(googleSheetUrl)
    .then(data => {
        // console.log(data.data.feed.entry);
        let entries = data.data.feed.entry;
        let buttonLink = `https://docs.google.com/spreadsheets/d/${sheetID}/edit#gid=0`;
        let r = entries.map(entry => ({
            title: entry.gsx$title.$t,
            type: entry.gsx$type.$t,
            ingredients: entry.gsx$ingredients.$t,
            difficulty: entry.gsx$difficulty.$t,
            preptime: entry.gsx$preptime.$t,
            contributor: entry.gsx$suggestedby.$t,
            text: entry.gsx$text.$t,
            made_by: entry.gsx$madeby.$t,
            goes_well_with: entry.gsx$goeswellwith.$t,
            notes: entry.gsx$notes.$t,
            id: entry.id.$t.split('/').pop(),
        }))
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
        return res.json({recipes: r, buttonLink: buttonLink});
    })
    .catch(err => next(err));
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})