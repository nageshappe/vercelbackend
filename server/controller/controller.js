var studentdb=require('../model/studentmodel');
var jobdb=require('../model/jobmodel');


//create and save new student
exports.create=(req,res)=>{
    //validating the request
    if(!req.body){                             //if body is empty then req.body returns false
        res.status(400).send({message:"Content can't be empty"})
        return;
    }

    //new student
    const student=new studentdb({
        rollnumber:req.body.rollnumber,
        username:req.body.username,
        password:req.body.password,
        branch:req.body.branch,
        stream:req.body.stream,
        cgpa:req.body.cgpa
    })

    //save the above student data in the database
    student
        .save(student)
        .then(data=>{
            res.send(data)
        })
        .catch(err=>{
            res.status(500).send({
                message:err.message || "Error Occured while create operation"
            });
        });
}


//create and save new job
exports.createj=(req,res)=>{
    //validating the request
    if(!req.body){
        //if body is empty then req.body returns false
        res.status(400).send({message:"Content can't be empty"})
        return;
    }

    
    const job=new jobdb({
        jobid:req.body.jobid,
        jobrole:req.body.jobrole,
        company:req.body.company,
        description:req.body.description,
        salary:req.body.salary,
        enddate:req.body.enddate,
        appliedStudents:req.body.appliedStudents
    })
    job
        .save(job)
        .then(data=>{
            res.send(data)
        })
        .catch(err=>{
            res.status(500).send({
                message:err.message || "Error Occured while create operation"
            });
        });
  //  res.end()
  }

// exports.createjob=(req, res) => {
//       const { jobid,jobrole,company,description,salary,enddate } = req.body;
    
//       // Create a new student instance
//       const newjob= new jobs({
//         jobid:jobid,
//         jobrole:jobrole,
//         company:company,
//         description:description,
//         salary:salary,
//         enddate:enddate
//       });
    
//       // Save the student to the database
//       newjob.save()
//     .then(() => {
//       res.status(201).json({ message: 'Student created successfully' });
//     })
//     .catch((error) => {
//       res.status(500).json({ error: 'Error creating student' });
//       });
//     };




//retrieve and return single/multiple students
exports.displayst=(req,res)=>{
    studentdb.find()
        .then(user=>{
            res.send(user)
        })
        .catch(err=>{
            res.status(500).send({message:err.message || "Error occured while find operation"})
        })
}

//retrieve multiple jobs
exports.displayj=(req,res)=>{
    jobdb.find()
        .then(user=>{
            res.send(user)
        })
        .catch(err=>{
            res.status(500).send({message:err.message || "Error occured while find operation"})
        })
}

//update a student using rollnumber
exports.updatest=(req, res) => {
    const rollnumber = req.params.rollnumber;
    
    // Retrieve updated student details from the request body
    const updatedDetails = req.body;
  
    // Update the student details in the database
    studentdb.findOneAndUpdate({ rollnumber: rollnumber }, updatedDetails, { new: true })
      .then(updatedStudent => {
        if (!updatedStudent) {
          return res.status(404).json({ error: 'Student not found' });
        }
        return res.json(updatedStudent);
      })
      .catch(error => {
        return res.status(500).json({ error: 'An error occurred while updating the student' });
      });
  };

//update a job using jobid
  exports.updatejob=(req, res) => {
    const jobid = req.params.jobid;
    
    // Retrieve updated student details from the request body
    const updatedDetails = req.body;
  
    // Update the student details in the database
    jobdb.findOneAndUpdate({ jobid: jobid }, updatedDetails, { new: true })
      .then(updatedStudent => {
        if (!updatedStudent) {
          return res.status(404).json({ error: 'Job not found' });
        }
        return res.json(updatedStudent);
      })
      .catch(error => {
        return res.status(500).json({ error: 'An error occurred while updating the student' });
      });
  };
//delete a student using roll number
exports.deletest=(req, res) => {
    const rollnumber = req.params.rollnumber;
  
    studentdb.findOneAndDelete({ rollnumber: rollnumber })
      .then(() => {
        res.send('Student deleted successfully');
      })
      .catch((error) => {
        res.status(500).send('Error deleting student');
      });
  };

//delete a job using jobid
exports.deletejob=(req, res) => {
    const jobid = req.params.jobid;
  
    jobdb.findOneAndDelete({ jobid: jobid })
      .then(() => {
        res.send('Student deleted successfully');
      })
      .catch((error) => {
        res.status(500).send('Error deleting student');
      });
  };