require('dotenv').config();
const express = require('express');
const app = express();
const hbs = require('hbs');
const port = process.env.PORT;

app.set('view engine', 'hbs');

app.use( express.static('public'));

app.get('/', (req, res) =>{
    res.render('home',{
        nombre: 'Marco Areda',
        titulo: 'Aprendiendo esta vg'
    })
});
app.get('/generic', (req, res) =>{
    res.sendFile(__dirname+'/public/generic.html')
});
app.get('/elements', (req, res) =>{
    res.sendFile(__dirname+'/public/elements.html')
});
app.get('*', (req, res) =>{
    res.send('404 | Page no found')
});

app.listen(port, () => {
    console.log(`La app esta corriendo en el puerto: ${port}`)
});


