const fs= require("fs")

fs.open("./cool.txt",(err, file) =>{

   if(err)
    console.log(err)
    console.log("FIle Opened successfully")

})

fs.stat("./cool.txt",(err, stats) =>{

    
     console.log(stats.isFile())
     console.log(stats.isDirectory())
     console.log(stats.isCharacterDevice())
 
 })

 fs.readFile("./cool.txt","utf-8",(err, data) =>{

    if(err)
        {
            console.log("Error", err)//wrong file name is error
        }

        console.log("the content of the file is =>",data)
 })

 const quote= "\nLive more, worry less";

 fs.appendFile("./cool.txt",quote,(err) =>{
    console.log("operation completed")
//write will overwrite append will add
 })

 fs.unlink("./cool.text",(err) =>{
      if(err){
        console.log(err);      }//delete
        console.log("Deleted successfully");
 })


 const movie ={
    name: "Avengers",
    type: "Hollywood"
   }
   
   
   const movieData=JSON.stringify(movie)
   console.log(movieData)
   
   fs.writeFile("movies.json",movieData, (err, movieData) =>{
       console.log("Writefile successfully done")
   })

   

