import mongoose from "mongoose"
// import  Question from ("./questionModel")

const examSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    totalMarks: {
        type: Number,
        required: true
    },
    passingMarks: {
        type: Number,
        required: true
    },
    questions: {
        type: [mongoose.Schema.Types.ObjectId],
        required: true,
        ref: "questions"  
    },
},{
    timestamps: true
})

// remove all the questions associated with an exam if that exam is deleted
// examSchema.post('remove',async function(res, next){
//     await Question.deleteMany({exam: this._id});
//     next();
// })



 export const examModel = mongoose.model("exams", examSchema)
