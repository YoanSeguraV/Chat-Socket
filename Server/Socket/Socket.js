
export default (io)=>{
    let users=[];
    io.on("connection",(socket)=>{
        console.log("usuario conectado "+socket.id)

        socket.on('message', (data) => {
            console.log(data);
            socket.emit("messageResponse",data)
          });
          socket.on('newUser', (data) => {
            //Adds the new user to the list of users
            users.push(data);
            // console.log(users);
            //Sends the list of users to the client
            socket.emit('newUserResponse', users);
          });

          socket.on("disconnect",()=>{
            console.log(" A user desconectado")
            users = users.filter((user) => user.socketID !== socket.id);
            socket.emit('newUserResponse', users);
            socket.disconnect();
          })

    })
}