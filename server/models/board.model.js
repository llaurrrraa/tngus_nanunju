import mongoose from "mongoose";

// people schema
const schema = new mongoose.Schema({
 name: {
   type: String,
 },
 message: {
   type: String,
 },
 created_time: {
   type: String,
 },
});

const board = mongoose.model("tngus-message-board", schema, "board");

// people model
export default board;