const express = require('express')

const adminAuth = (req,res,next)=>{
    const token = 'xyz';
    const IsAdminAuthenticated = token === 'xyz';
    if(!IsAdminAuthenticated){
        res.status(401).send('unauthorized access')
    }
    else{
        next()
    }
}

const userAuth = (req,res,next)=>{
    const token = 'xyz1';
    const IsUserAuthenticated = token === 'xyz';
    if(!IsUserAuthenticated){
        res.status(401).send('unauthorized access')
    }
    else{
        next()
    }
}

module.exports = {adminAuth,userAuth}