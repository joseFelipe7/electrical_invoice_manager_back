import joi from "joi"

export default joi.object().keys({
                    name:joi.string().trim().min(3).max(100).required(),
                    password:joi.string().min(3).max(100).required(),
                    email:joi.string().min(6).max(150).required().email(),
                })