const express = require('express')
const app = express()
const port = 3000

//* Navbar Creation
let navLinks = [`Home`, `About`, `Main`, `Test`]
let navBarLinks = []
for (let i = 0; i < navLinks.length; i++) {
    navBarLinks.push(`<li><a href='/${navLinks[i]}'>${navLinks[i]}</a></li>`);
}

//* Body
let title = 'OverlookedJS'
let navbar = `<div class='navbar'>
<ul class='navbar-list'>${navBarLinks}</ul>
</div>`

//* Meta
let header = `Welcome to ${title}`

//* CSS
let navbarBackgroundColor = '#333333'
let css = `
.navbar {
    height: 80px;
    color: white;
    text-decoration: none;
    background-color: ${navbarBackgroundColor}
}

ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }

li {
    float: left;
  }

li a {
    display: block;
    color: white;
    text-align: center;
    padding: 16px;
    text-decoration: none;
  }
`

app.get('/', (req, res) => {
    res.send(`<html>
    <head>
    <title>${title}</title>
    <style>${css}</style>
    </head>
    <body>
    ${navbar}
    <h1>${header}</h1>
    </body>
    </html>`)
})



app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
})