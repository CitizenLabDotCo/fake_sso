const express = require("express");
const router = express.Router();
const { createIdToken } = require("../utils/createIdToken");
const { getProfiles } = require("../utils/profiles");

// GET home page
router.get("/", (_req, res) => {
  res.render("index", { title: "Fake SSO", profiles: getProfiles() });
});

// The authorization endpoint, same as homepage
router.get("/oauth2/authorize", (_req, res) => {
  res.render("index", { title: "Fake SSO", profiles: getProfiles() });
});

// The token endpoint: receives code, returns id token and access token.
// The id token contains all the verified information about the user.
// The access token can be used to request extra information using
// the /userinfo endpoint.
router.post("/oauth2/token", async (req, res) => {
  // This is the code that was passed to the redirect_uri.
  // See public/javascripts/index.js
  const profileId = req.body.code;

  // We then use this profile to create an id token.
  const idToken = await createIdToken(profileId);

  res.json({
    token_type: "Bearer",
    id_token: idToken,
    access_token: "access_token_abc123",
  });
});

// The userinfo endpoint. Data returned here is not used
// for anything at the moment.
router.get("/userinfo", (_req, res) => {
  res.json({
    some: "stuff",
  });
});

module.exports = router;
