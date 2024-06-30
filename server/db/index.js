// import mongoose from 'mongoose';
// const url = useRuntimeConfig().dbURL;

// export default async (_nitroApp) => {
//   try {
//     // 嚴格模式
//     mongoose.set("strictQuery", true); 
//     await mongoose.connect(url);
//     console.log("連接 MongoDB 成功");
//   } catch(e) {
//     console.error("Error MongoDB =>", e)
//   }
// }