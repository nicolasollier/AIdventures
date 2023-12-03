const Joi = require("joi");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

require('dotenv').config();

const isProduction = process.env.NODE_ENV === 'production';
const cookieOptions = {
  httpOnly: true,
  secure: isProduction,
  sameSite: isProduction ? 'None' : 'Lax',
};

const loginValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string()
      .min(6)
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
      .required(),
    password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
  });

  return schema.validate(data);
};

const handleLogin = async (req, res) => {
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).send("Incorrect email or password");

    const validPass = await bcrypt.compare(req.body.password, user.password);
    if (!validPass) return res.status(400).send("Incorrect email or password");

    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);

    if (isProduction) {
      cookieOptions.domain = process.env.DOMAIN;
    }

    res.cookie('auth-token', token, cookieOptions).send("Connexion réussie");
  } catch (error) {
    res.status(500).send("Server error");
  }
};

module.exports = {
  handleLogin,
};
