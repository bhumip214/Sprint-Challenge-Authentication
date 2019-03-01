const axios = require("axios");
const bcrypt = require("bcryptjs");
const db = require("../database/dbConfig");
const tokenService = require("../auth/token-service.js");

const { authenticate } = require("../auth/authenticate");

module.exports = server => {
  server.post("/api/register", register);
  server.post("/api/login", login);
  server.get("/api/jokes", authenticate, getJokes);
};

async function register(req, res) {
  // implement user registration
  try {
    const { username, password } = req.body;
    if (username && password) {
      const hash = await bcrypt.hashSync(password, 14);

      const [id] = await db("users").insert({ username, password: hash });
      const user = await db("users")
        .where({ id })
        .first();

      const token = tokenService.generateToken(user);
      res.status(201).json({ user, token });
    } else {
      res.status(400).json({
        errorMessage: "Please provide username and password to register."
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "There was an error while registering."
    });
  }
}

function login(req, res) {
  // implement user login
}

function getJokes(req, res) {
  const requestOptions = {
    headers: { accept: "application/json" }
  };

  axios
    .get("https://icanhazdadjoke.com/search", requestOptions)
    .then(response => {
      res.status(200).json(response.data.results);
    })
    .catch(err => {
      res.status(500).json({ message: "Error Fetching Jokes", error: err });
    });
}
