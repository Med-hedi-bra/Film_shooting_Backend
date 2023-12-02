const User = require("../model/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const counter = require("../Utils/counter/counter");

exports.register = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  try {
    const oldUser = await User.findOne({ email });
    if (oldUser) {
      return res.status(409).send("User Already Exist. Please Login");
    }

    let encryptedPassword = await bcrypt.hash(password, 10);
    // Create user in our database
    counter.incrementCounter();
    idUser = counter.getCurrentCount();
    const user = await User.create({
      idUser:idUser,
      token:"",
      role:"100",
      ...req.body,
    });

    await user.save();

    const token = jwt.sign(
      { user_id: user._id, email },
      process.env.TOKEN_KEY,
      { expiresIn: "6h" }
    );
    // save user token
   user.token = token
   user.password = encryptedPassword
     await user.save(); 
    // return new user
    res.status(201).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ err: error });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!(email && password)) {
      res.status(400).send("All input is required");
    }
    const user = await User.findOne({ email:email });

    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_KEY,
        {expiresIn: "6h"}
      );
        user.token = token
      res.status(200).json(user);
    }
    else{
        res.status(400).json({ error: "Invalid Credentials" });
    }
  } catch (err) {
    console.log(err);
  }
}; 

exports.getUserById = async (req, res) => {
  try {
    const user = await User.findOne({ idUser: req.params.idUser });
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ err: "User not found" });
    }
  } catch (err) {
    res.status(500).json({ err: err });
  }
}
 