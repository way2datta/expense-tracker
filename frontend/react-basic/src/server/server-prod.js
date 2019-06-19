import path from 'path'
import express from 'express'

const app = express();
const landingPage = path.join(__dirname, "index.html");

app.use(express.static(__dirname));

app.get("*", (req, res) => {
  res.sendFile(landingPage);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App listening to ${PORT}....`);
  console.log("Press Ctrl+C to quit.");
});
