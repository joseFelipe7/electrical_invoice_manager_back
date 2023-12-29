import joi from "joi"

export default joi.object().keys({
                filter: joi.object({
                  client_number: joi.string().pattern(/^[0-9]+$/),
                  installation_number: joi.string().pattern(/^[0-9]+$/),
                  date_consumption: joi.string(),
                  invoice_amount: joi.string(),
                  municipal_contribution: joi.string(),
                  energy_gdi_cost: joi.string(),
                  energy_gdi_consumption: joi.string(),
                  energy_sceee_cost: joi.string(),
                  energy_sceee_consumption: joi.string(),
                  electrical_energy_cost: joi.string(),
                  electrical_energy_consumption: joi.string(),
                }),
                page: joi.string().pattern(/^[0-9]+$/),
                per_page: joi.string().pattern(/^[0-9]+$/)
              });