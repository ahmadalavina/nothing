const fs = require("fs")
const yargs = require('yargs')
const chalk =require('chalk')
const {addcontacts} =require('./conacts1')



//  var ahmad ="ahmad"
// console.log(process.argv)

yargs.command({
    command: "create",
    describe: "[create new contact]",

    builder: {
        fullname: {
            alias: "f",
            describe: "Person full name ",
            demandOption: true,
            type: "string"
        },
        phone: {
            alias: "p",
            describe: "Person full number ",
            demandOption: true,
            type: "number"
        }
    },

    handler({ fullname, phone, email }) {
        // console.log(fullname, phone, email)

        addcontacts(fullname,phone,email)
    },
})
yargs.parse()
// var argoment = yargs.argv
// console.log(yargs.argv)

// var MyJSON =JSON.stringify(argoment)

// fs.writeFileSync('txt.txt' ,MyJSON,(err)=>{
//     if(err) throw err
//     console.log("your file is created")
// })
