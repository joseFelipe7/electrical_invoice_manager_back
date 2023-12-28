/*
  Warnings:

  - Changed the type of `electrical_energy_consumption` on the `Invoice` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `electrical_energy_cost` on the `Invoice` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `energy_sceee_consumption` on the `Invoice` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `energy_sceee_cost` on the `Invoice` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `energy_gdi_consumption` on the `Invoice` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `energy_gdi_cost` on the `Invoice` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Invoice" DROP COLUMN "electrical_energy_consumption",
ADD COLUMN     "electrical_energy_consumption" DECIMAL(10,2) NOT NULL,
DROP COLUMN "electrical_energy_cost",
ADD COLUMN     "electrical_energy_cost" DECIMAL(10,2) NOT NULL,
DROP COLUMN "energy_sceee_consumption",
ADD COLUMN     "energy_sceee_consumption" DECIMAL(10,2) NOT NULL,
DROP COLUMN "energy_sceee_cost",
ADD COLUMN     "energy_sceee_cost" DECIMAL(10,2) NOT NULL,
DROP COLUMN "energy_gdi_consumption",
ADD COLUMN     "energy_gdi_consumption" DECIMAL(10,2) NOT NULL,
DROP COLUMN "energy_gdi_cost",
ADD COLUMN     "energy_gdi_cost" DECIMAL(10,2) NOT NULL;
