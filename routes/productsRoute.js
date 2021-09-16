const express = require("express");
const router = express.Router();
const Product = require('../models/productModel')

const app = express()
app.use(express.json());

router.get('/all', (req, res) => {

    Product.find({}, (err, docs)=>{
        if(!err){
            return res.send(docs);
        }
        else{
            return res.status(400).json({message: 'Something is not right 🤬'})
        }
    })
});


router.post('/getproductbyid', (req, res)=>{
    Product.find({_id : req.body.productId}, (err, docs)=>{

        if(!err){
            res.send(docs[0])
        }
        else{
            return res.status(400).json({message: 'Something went wrong'})
        }
    })
});

module.exports = router