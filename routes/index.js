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
  let profileId = req.body.code;
  let emailOverride = null;
  let subOverride = null;

  try {
    const decoded = JSON.parse(Buffer.from(profileId, "base64").toString("utf8"));
    if (decoded.profileId) {
      profileId = decoded.profileId;
      emailOverride = decoded.email ?? null;
      subOverride = decoded.sub ?? null;
    }
  } catch (_) {
    // plain profile ID — fall through
  }

  // We then use this profile to create an id token.
  const idToken = await createIdToken(profileId, emailOverride, subOverride);

  res.json({
    token_type: "Bearer",
    id_token: idToken,
    access_token: "access_token_abc123",
  });
});

// The userinfo endpoint. Used to return extra information
// that is not part of the id token specification.
router.get("/userinfo", (_req, res) => {
  res.json({
    postal_code: "1212",
  });
});

module.exports = router;
