/*
  Warnings:

  - Changed the type of `municipal_contribution` on the `Invoice` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `invoice_amount` on the `Invoice` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Invoice" DROP COLUMN "municipal_contribution",
ADD COLUMN     "municipal_contribution" DECIMAL(10,2) NOT NULL,
DROP COLUMN "invoice_amount",
ADD COLUMN     "invoice_amount" DECIMAL(10,2) NOT NULL;
