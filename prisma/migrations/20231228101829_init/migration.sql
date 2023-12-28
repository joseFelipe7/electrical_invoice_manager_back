-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Invoice" (
    "id" TEXT NOT NULL,
    "client_number" INTEGER NOT NULL,
    "installation_number" INTEGER NOT NULL,
    "date_consumption" TIMESTAMP(3) NOT NULL,
    "electrical_energy_measure" TEXT NOT NULL,
    "electrical_energy_consumption" TEXT NOT NULL,
    "electrical_energy_cost" TEXT NOT NULL,
    "energy_sceee_measure" TEXT NOT NULL,
    "energy_sceee_consumption" TEXT NOT NULL,
    "energy_sceee_cost" TEXT NOT NULL,
    "energy_gdi_measure" TEXT NOT NULL,
    "energy_gdi_consumption" TEXT NOT NULL,
    "energy_gdi_cost" TEXT NOT NULL,
    "municipal_contribution" TEXT NOT NULL,
    "invoice_amount" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Invoice_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
