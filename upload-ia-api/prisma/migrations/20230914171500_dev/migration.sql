/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Prompt` table. All the data in the column will be lost.
  - You are about to drop the column `transcription` on the `Prompt` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Video` table. All the data in the column will be lost.
  - Added the required column `template` to the `Prompt` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Prompt` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Video` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Prompt" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "template" TEXT NOT NULL
);
INSERT INTO "new_Prompt" ("id") SELECT "id" FROM "Prompt";
DROP TABLE "Prompt";
ALTER TABLE "new_Prompt" RENAME TO "Prompt";
CREATE TABLE "new_Video" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "path" TEXT NOT NULL,
    "transcription" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Video" ("id", "path") SELECT "id", "path" FROM "Video";
DROP TABLE "Video";
ALTER TABLE "new_Video" RENAME TO "Video";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
