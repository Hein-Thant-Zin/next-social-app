-- CreateTable
CREATE TABLE "admin" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER,
    "ph" INTEGER
);

-- CreateIndex
CREATE UNIQUE INDEX "admin_email_key" ON "admin"("email");

-- CreateIndex
CREATE UNIQUE INDEX "admin_name_key" ON "admin"("name");
