#! /usr/bin/env node

import inquirer from "inquirer";
import Choices from "inquirer/lib/objects/choices.js";

let todo =[];
let condition = true


while (condition) 
{
    let todo_list=await inquirer.prompt(
        [
            {
                name:"Todo",
                type:"input",
                message:"what do you want to add in todos"
    
            },
            {
                name:"add_more",
                type:"confirm",
                message:"do you want to add more todos",
                default:"false"
            }
        ]
    )
todo.push(todo_list.Todo);
condition = todo_list.add_more
console.log(todo);
}




