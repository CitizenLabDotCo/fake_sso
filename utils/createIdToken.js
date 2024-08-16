const jose = require("jose");
const { v4: uuidv4 } = require("uuid");
const { randomBytes } = require("crypto");
const { getProfileById } = require("./profiles");

require('dotenv').config({ path: './env_files/back-secret.env' });

const secret = new TextEncoder().encode(process.env.FAKE_SSO_JWT_SECRET);
const issuer = process.env.FAKE_SSO_ISSUER ?? "http://host.docker.internal";

const alg = "HS256";

const createIdToken = (profileId) => {
  const uid = uuidv4();
  const randomString = randomBytes(6).toString("hex");

  const profile = getProfileById(profileId);

  // https://www.iana.org/assignments/jwt/jwt.xhtml
  return new jose.SignJWT({
    uid,
    sub: uid,
    azp: "govocal_client",
    email: profile.has_email ? `${randomString}@example.com` : undefined,
    email_verified: profile.verified_email,
    name: `${profile.first_name} ${profile.last_name}`,
    given_name: profile.first_name,
    family_name: profile.last_name,
    gender: profile.gender,
    birthdate: profile.birthdate,
  })
    .setProtectedHeader({ alg })
    .setIssuedAt()
    .setIssuer(issuer)
    .setAudience("govocal_client")
    .setExpirationTime("2h")
    .sign(secret);
};

module.exports = { createIdToken };
