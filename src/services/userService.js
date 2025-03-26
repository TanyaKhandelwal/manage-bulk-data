const User = require("../models/user");

exports.bulkInsert = async (userData) => {
  return await User.bulkCreate(userData);
};

exports.getAllUsers = async () => {
  return await User.findAll();
};
