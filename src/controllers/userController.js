// const db = require("../config/database");
const userService = require("../services/userService");
const Joi = require("joi");

const userSchema = Joi.array().items(
  Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    age: Joi.number().integer().min(1).required(),
  })
);

exports.bulkInsert = async (req, res) => {
  try {
    const { error } = userSchema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    const userDetails = await userService.bulkInsert(req.body);
    res.status(201).json({ message: "Data inserted successfully", data: userDetails });
  } catch (err) {
    if (err.name === "SequelizeUniqueConstraintError") {
      return res.status(400).json({ error: "Email must be unique" });
    }
    res.status(500).json({ error: err.message });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const userData = await userService.getAllUsers();
    res.status(200).json({ data: userData });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
