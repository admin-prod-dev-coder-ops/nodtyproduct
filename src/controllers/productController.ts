import { RequestHandler } from "express";


export const createTodo:RequestHandler =  (req , res) => {
    const newProduct = ""
    res.status(201).json({message: 'created a todo',createTodo: newProduct});
  };

  export const getTodos:RequestHandler =  (req , res) => {
    res.status(201).json({products:"Product"});
  };

