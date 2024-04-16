import mongoose from ("mongoose")

const reportSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true
    },
    exam: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "exams",
        required: true
    },
    result: {
        type: Object,
        required: true
    }
},{
    timestamps: true
})

export const reportModel = mongoose.model("reports",reportSchema)