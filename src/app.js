const express = require("express")
const app = express()

const port = process.env.PORT || 3000

const path = require("path")
const publicDirectory = path.join(__dirname , "../public")
app.use (express.static (publicDirectory))

app.set('view engine', 'hbs');

const viewsDirectory = path.join (__dirname , '../temp1/views')
app.set('views', viewsDirectory);

var hbs = require('hbs');
const partialsPath = path.join(__dirname , "../temp1/partials")
hbs.registerPartials(partialsPath)


app.get ('/' , (req,res) => {
    res.render('index' , {
        title : "Home",
        desc : "This is Home page"
    })
})

app.get ('/service' , (req,res) => {
    res.render('service' , {
        title : "Service",
        name: "Mohamed",
        city:"Cairo",
        age: 30,
       
    })
})


app.get ('/team' , (req,res) => {
    res.render('team' , {
        title : "TEAM",
        name: "Esraa",
        city:"mansoura",
        age: 25,
      
    })
})


app.get ('/profile' , (req,res) => {
    res.render('profile' , {
        title : "Prfile",
        name: "Esraa",
        city:"mansoura",
        age: 25,
      
    })
})

app.get ('/contact' , (req,res) => {
    res.render('contact' , {
        title : "Contact",
        name: "Esraa",
        city:"mansoura",
        age: 25,
      
    })
})




app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    })