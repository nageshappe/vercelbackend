const axios=require('axios')
const alert=require('alert')
exports.homeRoutes=(req,res)=>
{

    //Making a get request to /api/students
    axios.get('http://localhost:8000/api/students')
        .then(function(response){
            res.render('index',{students:response.data});
        })
        .catch(err=>{
            res.send(err);
        })
}
exports.add_user=(req,res)=>
{
    res.render('add_user')
}
exports.update_user=(req,res)=>{
    axios.get('http://localhost:8000/api/students',{params:{id:req.query.id}})
        .then(function(sdata){
            res.render("update_user",{stud:sdata.data})
        })
        .catch(err=>{
            res.send(err)
        })
}

exports.login_user=(req,res)=>{
    res.render('login_user')
}
exports.verify=(req,res)=>{
    var rollnumber=req.body.rollnumber
    console.log(rollnumber)
    if(rollnumber=="20B81A3379")
    {
       console.log("login successful")
    }
    else{
        
        console.log("invalid login")
    }

}