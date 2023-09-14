/*
  Warnings:

  - You are about to drop the column `name` on the `Video` table. All the data in the column will be lost.
  - Added the required column `title` to the `Video` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Video" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "path" TEXT NOT NULL
);
INSERT INTO "new_Video" ("id", "path") SELECT "id", "path" FROM "Video";
DROP TABLE "Video";
ALTER TABLE "new_Video" RENAME TO "Video";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
