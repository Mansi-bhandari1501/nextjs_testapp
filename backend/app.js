const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { sequelize } = require('./models');
const routes = require('./routes')
const app = express();



// import express from "express"
// import cors from "cors"
// import dotenv from "dotenv"
// import connectdb from "./config/db.js"
// import routes from "./routes/index.js"
dotenv.config()


app.use(express.json())
app.use(express.urlencoded())
app.use(cors())
app.use("/", routes);


const port  = process.env.PORT
// connectdb()
// app.listen(port,()=>{
//     console.log(`Server is running on port no ${port}`)
// })





// app.post('/users', async (req, res) => {
//     const { name, email, role } = req.body;
//     try {
//         const user = await User.create({ name, email, role });
//         return res.json(user)
//     } catch (err) {
//         console.log("<----ERROR---->", err);
//         return res.status(500).json(err);
//     }
// })

// app.get('/users', async (req, res) => {
//     try {
//         const users = await User.findAll()
//         return res.json(users)
//     } catch (err) {
//         console.log(err)
//         return res.status(500).json({ error: "something went wrong" })
//     }
// })
// app.get('/users/:uuid', async (req, res) => {
//     const uuid = req.params.uuid
//     try {
//         const user = await User.findOne({
//             where: { uuid },
//         })
//         await user.destroy()
//         return res.json({ message: 'User deleted' })
//     } catch (err) {
//         console.log(err)
//         return res.status(500).json({ error: "something went wrong" })
//     }
// })
// app.delete('/users/:uuid', async (req, res) => {
//     const uuid = req.params.uuid
//     try {
//       const user = await User.findOne({ where: { uuid } })
  
//       await user.destroy()
  
//       return res.json({ message: 'User deleted!' })
//     } catch (err) {
//       console.log(err)
//       return res.status(500).json({ error: 'Something went wrong' })
//     }
//   })
  
//   app.put('/users/:uuid', async (req, res) => {
//     const uuid = req.params.uuid
//     const { name, email, role } = req.body
//     try {
//       const user = await User.findOne({ where: { uuid } })
  
//       user.name = name
//       user.email = email
//       user.role = role
  
//       await user.save()
  
//       return res.json(user)
//     } catch (err) {
//       console.log(err)
//       return res.status(500).json({ error: 'Something went wrong' })
//     }
//   })

// app.post('/posts', async (req, res) => {
//     const { userUuid, body } = req.body
//     try {
//         const user = await User.findOne({ where: { uuid: userUuid } })
//         const post = await Post.create({ body, userId: user.id })
//         return res.json(post)
//     } catch (err) {
//         console.log(err)
//         return res.status(500).json(err)
//     }
// })
// app.get('/posts', async (req, res) => {
//     try {
//         const posts = await Post.findAll({ include: 'user' })
//         return res.json(posts)
//     } catch (err) {
//         console.log(err)
//         return res.status(500).json({ error: "something went wrong" })
//     }
// })
// app.get('/posts/:uuid', async (req, res) => {
//     const uuid = req.params.uuid
//     try {
//         const user = await User.findOne({
//             where: { uuid },
//             include: 'posts',
//         })
//         const post = await Post.findOne({
//             where: { uuid }
//         })
//         return res.json(post)
//     } catch (err) {
//         console.log(err)
//         return res.status(500).json({ error: "something went wrong" })
//     }
// })
app.listen({ port }, async () => {
    console.log("server running pon port",port)
    await sequelize.sync()
    console.log("Database connected!")
})
