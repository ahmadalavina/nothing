const fs = require('fs')
const proc = require('./process')
const Persons = [
    { id: 1, fullname: "ahmad alavi" },
    { id: 2, fullname: "farhad safaee" },
    { id: 3, fullname: "ahmad tahmasebi" },

];
fs.writeFileSync("contact.json",JSON.stringify(Persons))

const data = fs.readFileSync('contact.json')

console.log(data)

