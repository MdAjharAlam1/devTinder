const express = require('express')
const app = express()
app.use(express.json())
const {adminAuth,userAuth} = require('./middleware/auth')

app.use('/admin',adminAuth)


app.get('/admin/login',(req,res)=>{
    res.send('admin login sucessfully')
})
app.post('/admin/signup',(req,res)=>{
    res.send('admin signup sucessfully')
})


app.post('/user/login', userAuth, (req,res)=>{
    
    res.send('user login sucessfully')
})


app.listen(7777,()=>{
    console.log('server running on port 7777')
})