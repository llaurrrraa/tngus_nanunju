import boardModel from "@/server/models/board.model";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { name, message, created_time } = body;
  const data = new boardModel({ name, message, created_time });
  await data.save();
  return { success: true, body };
});