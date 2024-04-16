import mongoose from "mongoose"

const questionSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true

    },
    answer: {
        type: String,
        required: true
    },
    options: {
       option1:{
        type: String,
        required: true

       },
       option2:{
        type: String,
        required: true

       },
       option3:{
        type: String,
        required: true

       },option4:{
        type: String,
        required: true

       }
    },
    weightage:{
        type: String,
        required: true
    },
    exam: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "exams",
        required:"true"
    },
},{
    timestamps: true
})

// remove question from the exam if the question is deleted
// questionSchema.post('remove',async function(res, next){
//     await Exam.updateOne({ _id: this.exam},{
//         $pull: {questions: this._id}
//     });
//     next();
// })

 export const questionModel = mongoose.model("questions",questionSchema)