const express = require("express");
const { Server } = require("socket.io");
const fetch = require("node-fetch");
const { BINANCE_ENDPOINT } = require("./config");

/* Creating an http server using express server. */
const app = express();
const httpServer = require("http").createServer(app);


/* Setting up the Socket server and define CORS accessible port 3000. */
const io = new Server(httpServer, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
    },
});

/* listen on the connection event for incoming sockets */
io.on("connection", (socket) => {
    console.log(`Connected ${socket.id}`);

    /* Fetching the data from the Binance API and then emitting the data to the client every 5 seconds. */
    setInterval(() => {
        fetch(BINANCE_ENDPOINT)
            .then((res) => res.json())
            .then((res) => {
                socket.emit("update_data", res)
            })
            .catch((error) => console.log(error));
    }, 5000);

    socket.on("disconnect", () => {
        console.log("Disconnected", socket.id);
    });
});

const port = 5000;
/* Listening on the port 5000. */
httpServer.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
});
