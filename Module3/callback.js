const fs =require("fs")


//node callback.js 5

// //Asynchronous call
// const[,,noOfFiles]=process.argv

// const quote="No beauty is not there"

// for(let i=1;i < noOfFiles;i++)
//     {
//         fs.writeFile(`./backup/text-${i}.html`, quote,()=>{
//             console.log(`Completed", '${i}`)
//         })//template literals
//     }

//synchronous call
const[,,noOfFiles]=process.argv

const quote="No beauty is not there"

for(let i=1;i < noOfFiles;i++)
    {
        fs.writeFileSync(`./backup/synctext-${i}.html`, quote)
            console.log(`Completed", '${i}`)
        //template literals
    }