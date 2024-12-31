const express = require('express')
const app = express()
app.use(express.json())

app.use('/admin',(req,res,next)=>{
    const token = 'xyz';
    const IsAdminAuthenticated = token === 'xyz';
    if(!IsAdminAuthenticated){
        res.status(401).send('unauthorized access')
    }
    else{
        next()
    }
})


app.get('/admin/login',(req,res)=>{
    res.send('admin login sucessfully')
})
app.post('/admin/signup',(req,res)=>{
    res.send('admin signup sucessfully')
})


app.post('/user/login',(req,res)=>{
    const tokenn = 'xyz'
    const IsUserAuthenticated = tokenn === 'xyz';
    if(!IsUserAuthenticated){
        res.status(401).send('unauthorized access')
    }
    res.send('user login sucessfully')
})


app.listen(7777,()=>{
    console.log('server running on port 7777')
})