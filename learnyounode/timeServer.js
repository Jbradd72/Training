const net = require('net');

function listener(socket) { 
    
    var currentDate = new Date();
    var dateString = currentDate.getFullYear() + "-" + (currentDate.getMonth() + 1) + "-" + currentDate.getDate() + " " + currentDate.getHours() + ":" + currentDate.getMinutes() +"\n";
    socket.write(dateString);
    socket.end();
}

net.createServer(listener).listen(process.argv[2]);