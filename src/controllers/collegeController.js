const jwt=require('jsonwebtoken')
const collegeModel=require('../models/collegeModel')

const createCollege = async function(req,res){
    try{

    let college=req.body
    console.log(college)
    if(Object.keys(college).length!=0){
        let name=college.name
        if(!name) return res.status(400).send({status:false,msg:'Name is required!'})
       if(!college.fullName) return res.status(400).send({msg:'FisrtName is required'}) 
       if(!college.logoLink) return res.status(400).send({status:false,msg:'LogoLink is required!'})
       let collegeCreated =await collegeModel.create(college)
       res.status(201).send({status:true,msg:'College successfully created',data:collegeCreated})
   
    }
    }
    catch(err){
        res.status(404).send({status:false,msg:err.message})

    }

}

module.exports.createCollege=createCollege