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
    "client_number" TEXT NOT NULL,
    "installation_number" TEXT NOT NULL,
    "date_consumption" DATE NOT NULL,
    "electrical_energy_measure" TEXT NOT NULL,
    "electrical_energy_consumption" DECIMAL(10,2) NOT NULL,
    "electrical_energy_cost" DECIMAL(10,2) NOT NULL,
    "energy_sceee_measure" TEXT NOT NULL,
    "energy_sceee_consumption" DECIMAL(10,2) NOT NULL,
    "energy_sceee_cost" DECIMAL(10,2) NOT NULL,
    "energy_gdi_measure" TEXT NOT NULL,
    "energy_gdi_consumption" DECIMAL(10,2) NOT NULL,
    "energy_gdi_cost" DECIMAL(10,2) NOT NULL,
    "municipal_contribution" DECIMAL(10,2) NOT NULL,
    "invoice_amount" DECIMAL(10,2) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Invoice_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
