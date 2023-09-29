const router=require('express').Router()
const d=require('../public/data.json')
const path=require('path')
const fs=require('fs')
const id=require('uuid')

router.route('/post_data').post((req,res)=>{
   const filename=path.join(__dirname,'../public/data.json')
    const {name,price,message}=req.body
    // if(name.length<3 || price<1 || message.length<20){
    //     return res.json({body:req.body})
    // }else{
        d.push({
            id:id.v4(),
            name:name,
            price:price,
            message:message
        })
        if(fs.existsSync(filename)){
            try {
                fs.writeFileSync(filename,JSON.stringify(d,null,2),'utf-8')
                return res.json({message:"post saved"}).status(200)    
            } catch (error) {
                return res.json(error).status(404)
            }
            
        }else{
            return res.json({body:req.body})
        }
    // }
    
    
})

module.exports=router