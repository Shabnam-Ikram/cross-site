const express = require('express');
const app = express();
const port = 3000;

// Serve the HTML form
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Vulnerable search endpoint
app.get('/search', (req, res) => {
    const query = req.query.query;
    res.send(`<h2>Search Results for: ${query}</h2>`);
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});



// const express = require('express');
// const _ = require('lodash');
// const app = express();
// const port = 3000;

// // Serve the HTML form
// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/index.html');
// });

// // Fixed search endpoint with sanitization
// app.get('/search', (req, res) => {
//     const query = req.query.query;
//     const safeQuery = _.escape(query);
//     res.send(`<h2>Search Results for: ${safeQuery}</h2>`);
// });

// app.listen(port, () => {
//     console.log(`App listening at http://localhost:${port}`);
// });
