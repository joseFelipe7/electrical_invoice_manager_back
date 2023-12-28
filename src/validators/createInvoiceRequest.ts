import joi from "joi"

export default joi.object().keys({
                    client_number:joi.number().required(),
                    installation_number:joi.number().required(),
                    date_consumption:joi.string().regex(/^\d{4}-\d{2}$/).required(),
                    electrical_energy_measure:joi.string().trim().required(),
                    electrical_energy_consumption:joi.number().precision(2).required(),
                    electrical_energy_cost:joi.number().precision(2).required(),
                  
                    energy_sceee_measure:joi.string().trim().required(),
                    energy_sceee_consumption:joi.number().precision(2).required(),
                    energy_sceee_cost:joi.number().precision(2).required(),
                  
                    energy_gdi_measure:joi.string().trim().required(),
                    energy_gdi_consumption:joi.number().precision(2).required(),
                    energy_gdi_cost:joi.number().precision(2).required(),
                  
                    municipal_contribution:joi.number().precision(2).required(),
                    invoice_amount:joi.number().precision(2).required()
                })