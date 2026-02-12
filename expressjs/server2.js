const express = require("express");
const app = express();
const fs = require("fs").promises;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true}));

// const readStudentsFromFile = async () => {
//   const data = await fs.readFile("./students.json", "utf-8");
//   return JSON.parse(data || "[]");
// };

// const writeStudentsToFile = async (records) => {
//   await fs.writeFile("./students.json", JSON.stringify(records, null, 2));
// };

app.get("/", (req,res)=>{
    res.render("form");
});

app.post("/students/register",(req,res)=>{
    console.log(req.body)
    return res.send("Registered")
})

const PORT= 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port:${PORT}`);
});