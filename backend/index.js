require("dotenv").config();
const express = require("express");
const app = express();
const replyRoutes = require("./routes/replyRoutes");
const saveReplyRoutes = require("./routes/saveReplyRoutes");
const cors = require("cors");
const connectDB = require("./services/db");
const getRepliesRoutes = require("./routes/getRepliesRoutes");
app.use(cors());
app.use(express.json());



app.use(express.json());

app.use("/api", replyRoutes);
app.use("/api", saveReplyRoutes);
app.use("/api", getRepliesRoutes);
const PORT = 5000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});