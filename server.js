var express=require('express')
const app=express()

const cors=require('cors')

var post_data=require('./routes/postData')
var getinfo=require('./routes/getinfo')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.use(post_data)
app.use(getinfo)

app.route('/').get((req,res)=>{
    res.json({meassge:"HELLO WORLD"})
})


const port=process.env.PORT || 5000
app.listen(port,function (err) {
    if(err) console.log('Error server ssetup')
    console.log(`start server http://localhost:${port}`)
})



