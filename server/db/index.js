import mongoose from 'mongoose';

export default async (_nitroApp) => {
  try {
    // 嚴格模式
    mongoose.set("strictQuery", true); 
    await mongoose.connect(
      "mongodb+srv://llaurrrraa:LA1LyEC13fBQDdhM@tngus.uacvlmq.mongodb.net/tngus-message-board"
    );
    console.log("連接 MongoDB 成功");
  } catch(e) {
    console.error("Error MongoDB =>", e)
  }
}