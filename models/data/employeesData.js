import 'dotenv/config.js';  
import "../../config/database.js"
import Employee from "../Employee.js";

let employees = [
    { name: "Alice Johnson", position: "Manager", salary: 75000 },
    { name: "Bob Smith", position: "Developer", salary: 65000 },
    { name: "Charlie Brown", position: "Designer", salary: 55000 },
    { name: "Diana Prince", position: "HR", salary: 50000 },
    { name: "Ethan Hunt", position: "Developer", salary: 67000 },
    { name: "Fiona Gallagher", position: "Accountant", salary: 58000 },
    { name: "George Clooney", position: "Sales", salary: 60000 },
    { name: "Hannah Montana", position: "Marketing", salary: 62000 },
    { name: "Ian McKellen", position: "CEO", salary: 120000 },
    { name: "Jack Sparrow", position: "Developer", salary: 70000 },
    { name: "Karen Gillan", position: "Designer", salary: 56000 },
    { name: "Liam Neeson", position: "Security", salary: 45000 },
    { name: "Mia Wallace", position: "Support", salary: 48000 },
    { name: "Noah Centineo", position: "Intern", salary: 30000 },
    { name: "Olivia Wilde", position: "PR", salary: 53000 },
]

Employee.insertMany(employees)