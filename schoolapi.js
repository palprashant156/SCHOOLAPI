const express=require('express');
const cors=require('cors');
const app=express();
const PORT=5100;

app.use(cors());
app.use(express.json())

app.get('/',(req,res)=>{
  res.send('server is running');
});


app.get('/api/users',(req,res)=>{
  res.json([
    {
      id: 1,
      name: "Rahul Sharma",
      age: 14,
      grade: "8th",
      section: "A",
      rollNo: 21,
      subjects: ["Math", "Science", "English", "History"],
      address: { city: "New Delhi", state: "Delhi", pincode: "110001" },
      parent: { fatherName: "Amit Sharma", motherName: "Priya Sharma", contact: "9876543210" }
    },
    {
      id: 2,
      name: "Anjali Verma",
      age: 15,
      grade: "9th",
      section: "B",
      rollNo: 12,
      subjects: ["Math", "Biology", "English", "Geography"],
      address: { city: "Mumbai", state: "Maharashtra", pincode: "400001" },
      parent: { fatherName: "Rakesh Verma", motherName: "Sunita Verma", contact: "9812345678" }
    },
    {
      id: 3,
      name: "Arjun Patel",
      age: 16,
      grade: "10th",
      section: "C",
      rollNo: 5,
      subjects: ["Physics", "Chemistry", "Math", "Computer Science"],
      address: { city: "Ahmedabad", state: "Gujarat", pincode: "380001" },
      parent: { fatherName: "Kiran Patel", motherName: "Meena Patel", contact: "9123456780" }
    },
    {
      id: 4,
      name: "Sneha Reddy",
      age: 13,
      grade: "7th",
      section: "A",
      rollNo: 9,
      subjects: ["Math", "Science", "English", "Social Studies"],
      address: { city: "Hyderabad", state: "Telangana", pincode: "500001" },
      parent: { fatherName: "Suresh Reddy", motherName: "Lakshmi Reddy", contact: "9876501234" }
    },
    {
      id: 5,
      name: "Vikram Singh",
      age: 17,
      grade: "11th",
      section: "D",
      rollNo: 3,
      subjects: ["Math", "Physics", "Chemistry", "Economics"],
      address: { city: "Jaipur", state: "Rajasthan", pincode: "302001" },
      parent: { fatherName: "Rajesh Singh", motherName: "Neeta Singh", contact: "9811112233" }
    },
    {
      id: 6,
      name: "Pooja Nair",
      age: 15,
      grade: "9th",
      section: "C",
      rollNo: 17,
      subjects: ["Biology", "Chemistry", "English", "History"],
      address: { city: "Kochi", state: "Kerala", pincode: "682001" },
      parent: { fatherName: "Manoj Nair", motherName: "Anitha Nair", contact: "9822223344" }
    },
    {
      id: 7,
      name: "Kunal Mehta",
      age: 16,
      grade: "10th",
      section: "B",
      rollNo: 8,
      subjects: ["Physics", "Chemistry", "Math", "Geography"],
      address: { city: "Pune", state: "Maharashtra", pincode: "411001" },
      parent: { fatherName: "Rohit Mehta", motherName: "Seema Mehta", contact: "9833334455" }
    },
    {
      id: 8,
      name: "Neha Gupta",
      age: 14,
      grade: "8th",
      section: "C",
      rollNo: 14,
      subjects: ["Math", "Science", "English", "Civics"],
      address: { city: "Lucknow", state: "Uttar Pradesh", pincode: "226001" },
      parent: { fatherName: "Sanjay Gupta", motherName: "Rita Gupta", contact: "9844445566" }
    },
    {
      id: 9,
      name: "Rohan Das",
      age: 13,
      grade: "7th",
      section: "B",
      rollNo: 19,
      subjects: ["Math", "Science", "English", "Geography"],
      address: { city: "Kolkata", state: "West Bengal", pincode: "700001" },
      parent: { fatherName: "Anil Das", motherName: "Shreya Das", contact: "9855556677" }
    },
    {
      id: 10,
      name: "Aarav Kapoor",
      age: 17,
      grade: "12th",
      section: "A",
      rollNo: 2,
      subjects: ["Math", "Physics", "Chemistry", "Computer Science"],
      address: { city: "Chandigarh", state: "Punjab", pincode: "160001" },
      parent: { fatherName: "Rohit Kapoor", motherName: "Simran Kapoor", contact: "9866667788" }
    }
  ]);
});


app.listen(PORT,()=>{
  console.log('backend is running')
})
