import { writeFile } from "fs";
import pkg from 'inquirer';

const { prompt } = fs;


const questions = [
    {
        type: "input",
        message: "What is your project title?",
        name: "Title"
    },
    {
        type: "input",
        message: "Describe your project",
        name: "Description"
    },
    {
        type: "input",
        message: "What are the steps required to install your project?",
        name: "Installation"
    },
    {
        type: "input",
        message: "What instructions are used for this project.",
        name: "Usage"
    },
    {
        type: "list",
        message: "Licenses that are used?",
        name: "License",
        choices: [

            "None"
        ]
    },
    {
        type: "input",
        message: "Who are the Contributors?",
        name: "Contributors"
    },
    {
        type: "input",
        message: "How will you test your project?",
        name: "Test"
    },
    
    {
        type: "input",
        message: "If you have any questions ",
        name: "Questions"
    },
    {
        type: "input",
        message: "What is your Github username",
        name: "Username"
    },

];


function writeToFile(fileName, data) {
    writeFile(fileName, data, err => {
        if (err) {
          then (err;
        }
      });
    }



function init() {
    prompt(questions).then(answers => {
        
        const response = generateMarkdown(answers);
        console.log(answers);
       
        writeToFile("README.md", response);
      
    })
    

}



init();