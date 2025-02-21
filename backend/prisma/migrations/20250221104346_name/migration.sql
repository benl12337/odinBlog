/*
  Warnings:

  - Added the required column `title` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Comment" ADD COLUMN     "lastEdited" TIMESTAMP(3),
ADD COLUMN     "posted" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "title" TEXT NOT NULL,
ALTER COLUMN "lastEdited" DROP NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "joined" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
