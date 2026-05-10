const express = require("express");
const app = express();
app.use(express.json());

let users = [];
let userId = 1;

//route get
app.get('/users',(req,res)=>{
    res.send(users);
})

//route post
app.post('/user/signup',(req,res)=>{
    let {name, email, password} = req.body;

    const newUser = {
        id:userId,
        name,
        email, 
        password
    }
    users.push(newUser);
    res.send({
        message: "User signed up successfully",
        user: newUser
    })
})

//route put
app.put('/users/:id',(req,res)=>{
    let {id} = req.params;
    let{name, email, password} = req.body;

    const user = users.find((u)=> u.id === parseInt(id));
    if(!user){
        return res.status(404).json({
            message:"User ID not found"
        })
    }

    user.name = name ;
    user.email = email;
    user.password = password;

    res.send({
        message:`user with ID ${id}`,
        user
    })
})


app.listen(8080,()=>{
    console.log("server is connected")
})