const router=require('express').Router()
const fs =require('fs')
const data=require('../public/data.json')

router.route(`/getinfo`).get((req,res)=>{
    res.json(data).status(200)
})
module.exports=router