// const express = require("express");
// const app = express();
// const bodyParser = require("body-parser");
// const cors = require("cors");
// app.use(cors());
// app.use(express.json());

// let users = [
//   { id: 1, name: "Sai", email: "sai@example.com" },
//   { id: 2, name: "Charan", email: "charan@example.com" }
// ];


// app.get("/users", (req, res) => {
//   res.json(users);
// });

// app.get("/users/:id", (req, res) => {
//   const user = users.find(u => u.id === parseInt(req.params.id));
//   if (!user) return res.status(404).json({ message: "User not found" });
//   res.json(user);
// });

// app.post("/users", (req, res) => {
//   const { name, email } = req.body;
//   const newUser = { id: users.length + 1, name, email };
//   users.push(newUser);
//   res.status(201).json(newUser);
// });


// app.put("/users/:id", (req, res) => {
//   const user = users.find(u => u.id === parseInt(req.params.id));
//   if (!user) return res.status(404).json({ message: "User not found" });

//   const { name, email } = req.body;
//   user.name = name || user.name;
//   user.email = email || user.email;

//   res.json(user);
// });


// app.delete("/users/:id", (req, res) => {
//   users = users.filter(u => u.id !== parseInt(req.params.id));
//   res.json({ message: "User deleted successfully" });
// });

// app.listen(3000, () => {
//   console.log(`Server running on 3000`);
// });


const express = require('express');
const app = express();
const data = require('D:/fsddwlab1/fsdlab/lab7/emp.json');

app.use(express.json());


app.get('/', (req, res) => {
    return res.status(200).send('This is root');
});



app.listen(3000, (req, err) => {
    if (err) {
        console.error('Error starting server', err);
    } else {
        console.log('Server connected at port http://localhost:3000');
    }
});


app.post('/emp/:id', (req, res) => {
    console.log(req.body)
    const { name, dept } = req.body;

    if (!name || !dept) {
        return res.status(400).send('Missing name or department');
    }

    const newemp = {
        id: data.length + 1,
        name,
        dept
    };
    data.push(newemp);
    res.status(200).json(newemp);
});

app.put('/emp/:id', middlewear,(req, res) => {
    const emp1 = data.find(u => u.id === parseInt(req.params.id));
    console.log(emp1)
    if (!emp1) return res.status(404).send('User not found');
    const { name, dept } = req.body;
    emp1.name = name || emp1.name;
    emp1.dept = dept || emp1.dept;

    res.status(200).json(emp1);
});

app.delete('/emp/del/:id', (req, res) => {
    const empIndex = data.findIndex(u => u.id === parseInt(req.params.id));

    if (empIndex === -1) {
        return res.status(404).send('Employee not found');
    }

    const deletedEmp = data.splice(empIndex, 1);

    res.status(200).json({ message: 'Employee deleted', deletedEmployee: deletedEmp });
});

function middlewear(req,res,next){
    next()
}










