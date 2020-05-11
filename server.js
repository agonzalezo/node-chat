const 
    express = require("express"),
    app = express(),
    socket = require('socket.io'),
    morgan = require('morgan')
;
//#region config
app.use(morgan('tiny'))   
app.use(express.static(__dirname+'/public'));

//#endregion
const io = socket(app.listen(3000, ()=>{
    console.log("Server started");
}))

//#endregion
io.on('connection', (socket) => {
    console.log('a user connected '+ socket.id);
    
    //#endregion
    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
    
    //#endregion
    socket.on('frontmessage', (data)=>{
        console.log(`Client ${socket.id} say {${data}}`)
        //#endregion        
        socket.broadcast.emit('backendmessage', {id:socket.id,data:data})
    })
  });
