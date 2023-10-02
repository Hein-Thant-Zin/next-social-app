-- CreateTable
CREATE TABLE "seller" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER,
    "ph" INTEGER
);

-- CreateIndex
CREATE UNIQUE INDEX "seller_email_key" ON "seller"("email");

-- CreateIndex
CREATE UNIQUE INDEX "seller_name_key" ON "seller"("name");
