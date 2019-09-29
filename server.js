const express = require('express')
const next = require('next')
const fetch = require("isomorphic-unfetch");

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({ dev })
const nextHandle = nextApp.getRequestHandler()

nextApp.prepare()
    .then(() => {
        const server = express();

        server.get("/", (req, res) => {
            return nextApp.render(req, res, '/index', {})
        });

        server.get("*", async (req, res) => {
            const result = await fetch('http://dev.bookmaker-ratings.ru/wp-json/rb/v1.0/country-code/?req=' + req.url);
            const data = await result.json();

            if (data.success) {
                return nextApp.render(req, res, data.path , data.query)
            } else {
                return nextHandle(req, res)
            }
        });

        server.listen(port, (err) => {
            if (err) {
                throw err;
            }
            console.log(`> Ready on http://localhost:${port}`)
        });
    });