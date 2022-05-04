const mongoose=require('mongoose')
const internScema=new mongoose.Schema({
    name: {
    type:String,
    required:true,
    trim:true
    },
 email: {
     type:String,
     required:true,
     unique:true
    },
  mobile: {
      type:String,
      required:true,
      unique:true
  },
   collegeId: {
       type:mongoose.Schema.Types.ObjectId,
        ref :'College'
    },
     isDeleted: {
         type:Boolean, 
         default: false
        }
    
    })
 