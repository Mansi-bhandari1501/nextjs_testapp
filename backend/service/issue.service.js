const { User } = require("../models");
const { Books } = require("../models");
const { Issue } = require("../models");
const { Op } = require('@sequelize/core');

exports.addNewIssue = async (req) => {
  try{
    const  {userId,bookId} = req.body
    console.log("Request",req.body)
    const user = await User.findOne({
      where:{userId: userId}
    })
    const book = await Books.findOne({where:{bookId: bookId}})
    // console.log('user: ', userId);
    if(user.role === 'admin'){
      throw Object.assign(new Error(), {
        name: "CONFLICT",
        message: "request for Book issue can be done by user only",
      });
    }
    if(user.role === 'user'){
       const issueExists = await Issue.findOne({
        where:
        {
          bookId:{
            [Op.eq]:book.id
          },
          userId:{
            [Op.eq]:user.id
          }}})
       console.log('issueExists: ', issueExists);
       const bookExists = await Books.findOne({where:{bookId:bookId}})
       console.log(bookExists,"jgsfusugufgsud")
       if(!bookExists){
        throw Object.assign(new Error(), {
          name: "CONFLICT",
          message: "Book dosn't exists",
        });
       }
       else{
        if(issueExists){
          throw Object.assign(new Error(), {
            name: "CONFLICT",
            message: "request for Book issue already exists",
          });
         
        }else{
      const newIssue = await Issue.create({userId:user.id,bookId:book.id,status:"pending"})

     //  console.log("bookss",newIssue)
      return newIssue
    }
       }
      }
  // return newBook;
  }
  catch(error){
    console.log(error)
    throw(error)
  }

  // const { userId, bookId } = req.body
  // const user = await User.findOne({where:{userId: userId}})
  
  // const book = await Books.findOne({where:{bookId: bookId}})
  // const newIssue = await Issue.create({ userId:user.id, bookId:book.id, status: "pending" });
  // console.log('newIssue: ', newIssue);
  // return newIssue;
}
exports.getAllIssue = async (req) => {
  try {
    const issue = await Issue.findAll({})

    if (issue) {
      return issue
    }
    else {
      throw Object.assign(new Error(), {
        name: "CONFLICT",
        message: "No issue is present",
      });

    }
  }
  catch (error) {
    console.log('error: ', error);
    throw (error)
  }
}

exports.getIssueById = async (req) => {
  try {

    const Book = await Issue.findOne({
      where: {
        uuId: req.params.id
      },
      include: [
        {
          association: Issue.userAssociation
          // model: User,
          // foreignKey:"userId"
          // as:"users"
        }
      ]
    })
    if (Book) {
      return Book
    }
    else {
      throw Object.assign(new Error(), {
        name: "BAD_REQUEST",
        message: "No Book is present",
      });
    }
  }
  catch (error) {
    console.log('error: ', error);
    throw (error)
  }
}

// edit exam by id
exports.editIssue = async (req) => {
  console.log('reqBODYY: ', req.body);
  try {
// const {userId}= REQ.BODY
    const user = await User.findOne({ where: { userId: req.body.userId } })
    // const book = await Books.findOne({ where: { userId: req.body.bookId } })
    const issue = await Issue.findOne({ where: { uuId: req.params.id } })
console.log(user,"-------------------")
    if (user.role === "admin" || issue.userId === user.id) {
      if (issue) {
        const updatedIssue = Issue.update(
          req.body.status,
          { where: { uuId: req.params.id } }
        )
        return updatedIssue
      }
      else {
        throw Object.assign(new Error(), {
          name: "BAD_REQUEST",
          message: "No Book is present",
        });
      }
    }
    else {
      throw Object.assign(new Error(), {
        name: "BAD_REQUEST",
        message: "Cannot update exam details",
      });
    }
  }
  catch (error) {
    throw (error)
  }
}
exports.acceptIssue = async (req) => {
  console.log('reqBODYY: ', req.body);
  try {

    const user = await User.findOne({ where: { userId: req.body.userId } })
    const issue = await Issue.findOne({ where: { uuId: req.params.id } })

    if (user.role === "admin") {
      // const Book = await Issue.findOne({bookId: req.params.id})
      if (issue) {
        // Book.title = req.body.title;
        // Book.author = req.body.author;
        // Book.category = req.body.category;
        // Book.descriptions = req.body.descriptions;
        // Book.stock = req.body.stock;
        // Book.save()
        const updatedIssue = Issue.update(
          { status: "issued" },
          { where: { uuId: req.params.id } }
        )
        return updatedIssue
      }
      else {
        throw Object.assign(new Error(), {
          name: "BAD_REQUEST",
          message: "No Book is present",
        });
      }
    }
    else {
      throw Object.assign(new Error(), {
        name: "BAD_REQUEST",
        message: "Cannot update exam details",
      });
    }
  }
  catch (error) {
    throw (error)
  }
}

exports.deleteIssue = async (req) => {
  try {
    // console.log("params",req.params.id)
    const user = await User.findOne({ where: { userId: req.body.userId } })
    const issue = await Issue.findOne({ where: { uuId: req.params.id } })
    if (issue) {
      // console.log("user is admin")
      if (user.role === "admin" || (issue.userId === req.body.userId && issue.status === "pending")) {
        await issue.destroy()
        return issue
      }
      else {
        throw Object.assign(new Error(), {
          name: "BAD_REQUEST",
          message: "User is not allowed to delete the issue",
        });
      }
    }
    else {
      throw Object.assign(new Error(), {
        name: "BAD_REQUEST",
        message: "Cannot delete Book ",
      });
    }
  }
  catch (error) {
    console.log('error: ', error);
    throw (error)
  }
}



// export const examService = {
//     addExam,
//     getAllExams,
//     getExamById,
//     deleteExam,
//     editExam,
// };

