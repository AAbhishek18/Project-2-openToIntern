const internModel=require('../models/internModel')
 
function validateEmail(usermail){
    var emailPattern=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(usermail)
}
//=============================
const createIntern =async function(req,res){
    try{
        let intern=req.body;
        if(Object.keys(intern)!=0){
            if(!intern.name) return res.status(400).send({status:false,mgs:'Name is required'})
           if(!intern.email) return res.status(400).send({status:false,msg:'Email is reuired'})
            if(!validateEmail(intern.email)) return res.status(400).send({status:false,msg:'Plz enter valid emailId (eg:zyx123@gmail.com)'})
           
            if(intern.mobile!==10) return res.status(400).send({status:false,msg:"Mobile number must be 10 digits only"})

             let internCreated=await internModel.create(intern)
             res.status(201).send({status:true,msg:'Intern succsessfully created',data:internCreated })
        }
    }

    catch(err){
        res.status(404).send({status:false,msg:err.message})
    }
}

module.exports.createIntern=createIntern