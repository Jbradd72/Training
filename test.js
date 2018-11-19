const http = require('http');
const fs = require('fs');

async function test(){
    console.log(0);
var a = await httpGet();
console.log(2);
var b = await fileReading();
console.log(4);
}

 function httpGet(){
  http.get("http://www.google.com", function(res){
      console.log(1)
        b = ""
        res.on("data", (chunk) => {})
        res.on("end", () => {/* console.log("----------------AMAZONDONE-------") */;return b});
    })
}

 function fileReading(){
     
     fs.readFile("C:\\Users\\Jbradd\\Documents\\Training\\countries.csv", (err,data) => {console.log(3)})//console.log(data.toString())});

}

test();


/* http.get("http://www.google.com", (res)=>{
    var b = "";
    res.on("data", (chunk)=>b+=chunk);
    res.on("end", ()=>{console.log(b.length); console.log(b.toString())
    });
}).on("error", console.error); */