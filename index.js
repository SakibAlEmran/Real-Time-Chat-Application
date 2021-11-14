//external dependencies
const express = require("express");
const http = require("http");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const path = require("path");
const cookieParser = require("cookie-parser");
const moment = require("moment");

//internal dependencies
const loginRouter = require("./router/loginRouter");
const usersRouter = require("./router/usersRouter");
const inboxRouter = require("./router/inboxRouter");
const {
  notFoundHandler,
  errorHandler,
} = require("./middlewares/common/errorHandler");

//app initialization
const app = express();
const server = http.createServer(app);
//config dotenv to access env file
dotenv.config();

//socket creation
const io = require("socket.io")(server);
global.io = io;

//setmoment as application locals
app.locals.moment = moment;

//database connection
mongoose
  .connect(process.env.MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("database connection successfull"))
  .catch((err) => console.log(err));

// request parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//set view engine
app.set("view engine", "ejs");

//set static folder
app.use(express.static(path.join(__dirname, "public")));

//parse cookies
app.use(cookieParser(process.env.COOKIE_SECRET));

//routing setup
app.use("/", loginRouter);
app.use("/users", usersRouter);
app.use("/inbox", inboxRouter);

//404 not found handler
app.use(notFoundHandler);

//common error handler
app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log(`app is listening to port: ${process.env.PORT}`);
});
