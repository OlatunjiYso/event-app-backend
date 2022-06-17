const mongoose =  require('mongoose');

const Schema = mongoose.Schema;
const EventSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    date: { type: String, required: true },
    isVirtual: { type: String, required: true },
    address: { type: String, required: true }
}, { timestamps: true });


const Event = mongoose.model('event', EventSchema);
module.exports = Event;