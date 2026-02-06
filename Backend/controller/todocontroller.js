let todos=[];
let id=1;
const Todo = require("../models/todo");
//exports.getTodo = (req,res)=>{
    {/*res.send("Get working")*/}
   // res.status(200).json(todos)
//};
exports.getTodo = async(req,res)=>{
    try{
        const todos= await Todo.find();
        res.status(200).json(todos);

    }catch(err){
        res.status(500).send(err);
    }
};

exports.createTodo=async(req,res)=>{
    {/*res.send("Post working")*/}
    try{
        const {task}=req.body;
        if(task===undefined)
            return res.status(401).json({message:"Task not founfd"})
        const todos= await Todo.create({
            task,
            completed:false
        })
        res.status(201).json(todos);
    
    }catch(err){
        res.status(500).send(err);
    }

   {/*} const newTodo = {
        id:id++,
        task,
        Completed:false
    //}
    todos.push(newTodo)
    res.json(newTodo)*/}

};

exports.updateTodo=async (req,res)=>{
    try{
        const todo=await Todo.findById(req.params.id);
        if(!todo) {
            res.json({message:"Todo not found"})
}
    todo.task=req.body.task || todo.task;
    todo.completed = req.body.completed===undefined?todo.completed:req.body.completed
    await todo.save();
    res.status(200).json(todo)
} catch (err){
    res.status(500).send(err);
}

};

exports.deleteTodo=async(req,res)=>{
    try{
        await Todo.findByIdAndDelete(req.params.id);
        res.status(200).json({message:"Task deleted Successfully"})

    }catch(err){
        res.status(500).send(err);
    }
    
};


//api/todo/  ->in the postman
//api/todo/create
//api/todo/update
//api/todo/delete/1