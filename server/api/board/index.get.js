import boardModel from "@/server/models/board.model";

export default defineEventHandler(async (event) => {
  const board = await boardModel.find();
  return board
})