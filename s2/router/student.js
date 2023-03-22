import express from "express";
const router = express.Router();
const students = [
  {
    id: 1,
    name: "Alice",
  },
  {
    id: 2,
    name: "Bob",
  },
];
router.get("/:id", (req, res) => {
  // if(Object.keys(req.query).length>0){
  //     const {name}=req.query
  //     res.send(students.find((student)=>student.name===name))
  // }else{
  //     res.send(students)
  // }
  res.send(students.find((student) => student.id === Number(req.params.id)));
});
router.get("/edit", (req, res) => {
  
});
export default router;
