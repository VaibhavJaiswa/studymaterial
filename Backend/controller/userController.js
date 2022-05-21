const userModal = require('../modal/userModal')



exports.updateRT= async (req,res)=>{
    let filter = {}
    filter.email = req.body.email
    filter.rt = req.body.rt
    filter.book = req.body.book
    filter.status = req.body.status
    console.log(filter)

    let sm = null
    await userModal.findOne({email:filter.email}).then(result=>{
        sm = result.studyMaterial
        console.log("before:",sm)
        let index = sm.findIndex(item=>item.book==filter.book)
        sm[index].remainingTime = filter.rt
        if(filter.status.length){
            sm[index].status = filter.status
        }
        console.log("after:",sm)
        }).catch(err=>{
        res.status(500).json({
            Error:err
        })
    })
    userModal.updateOne({"email":filter.email},{$set:{studyMaterial:sm}})
    .then(result=>{
        res.status(200).json({
            Message:result
        })
    }).catch(err=>{console.log(`Error : ${err}`);res.status(500).json({"Error":err})})
}

exports.getStudyMaterial = (req,res)=>{
    let filter = {}
    filter.email = req.body.email
    userModal.findOne(filter).then(result=>{
        res.status(200).json({
            Message:"User Data",
            data:result
        })
    }).catch(err=>{
        res.status(500).json({
            Error:err
        })
    })
}

exports.authUser = (req,res)=>{
    let filter = {}
    
    filter.email=req.body.email
    console.log(filter.email)
    filter.password=req.body.pass
    console.log(filter.password)

    userModal.findOne(filter).then(result=>{

        res.status(200).json({
            Message:`User Authentication`,
            details:result
        })
        console.log(result)
    }).catch(err=>{
        res.status(500).json({
            Error:err
        })
    })
}

exports.feedUser = async (req,res)=>{

    let user = {};
    if(req.body.name)
        user.name = req.body.name;
    if(req.body.email)
        user.email = req.body.email;
    if(req.body.pass)
        user.password = req.body.pass;
    if(req.body.phone)
        user.phone = req.body.phone;
    if(req.body.studyMaterial)
        user.studyMaterial = req.body.studyMaterial;
    
    userModal.insertMany(user)
    .then(result=>{
        console.log(result)
                res.status(200).json({
                    Message:"User Inserted",
                    data:result,                    
                });
    }).catch(err=>{console.log(`Error : ${err}`);res.status(500).json({"Error":err})})
}