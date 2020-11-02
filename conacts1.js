const fs = require("fs")
const yargs = require('yargs')
const chalk =require('chalk')

const addcontacts =(fullname, phone ,email)=>{   

 const contacts =loadcontacts()

 contacts.push({fullname,phone,email})

contacts.log(chalk.green("Contacts Saved"))

}
const loadcontacts = ()=>{

    try{
    const databuffer =fs.readFileSync("contacts.json")
    const contacts = JSON.parse (databuffer.toString());
    return JSON.parse(contacts)
}
catch(eer)
{
console.log(eer)
return [];
}
}

module.exports={
    addcontacts
}