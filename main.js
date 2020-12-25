const { request } = require('express');
const express = require('express');
const app = express();
const port = 3000;
app.use(express.static('public'));
app.set('views', './views');
app.set('view engine', 'pug');


app.get('/',(req,res)=>{
    res.render('demo');
    console.log('demo is working on port'+port)
})
app.get('/robots.txt',(req,res)=>{
    res.render('robots')
})
// app.get('/',(req,res)=>{
//     const id = req.query.id
//     res.send(id);
// })

app.listen(port,()=>{
    console.log(`Ethis app listening at http://localhost:${port}`);
})