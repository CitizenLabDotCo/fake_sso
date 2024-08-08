const jose = require("jose");
const { v4: uuidv4 } = require("uuid");
const { randomBytes } = require("crypto");

require('dotenv').config({ path: './env_files/back-secret.env' });

const secret = new TextEncoder().encode(process.env.FAKE_SSO_JWT_SECRET);
const issuer = process.env.FAKE_SSO_JWT_ISSUER ?? "http://host.docker.internal";

console.log({ issuer })

const alg = "HS256";

const createIdToken = () => {
  const uid = uuidv4();
  const randomString = randomBytes(6).toString("hex");

  // https://www.iana.org/assignments/jwt/jwt.xhtml
  return new jose.SignJWT({
    uid,
    sub: uid,
    azp: "govocal_client",
    email: `${randomString}@example.com`,
    email_verified: true,
    name: "John Doe",
    given_name: "John",
    family_name: "Doe",
    gender: "male",
    birthdate: "2000-01-01",
  })
    .setProtectedHeader({ alg })
    .setIssuedAt()
    .setIssuer(issuer)
    .setAudience("govocal_client")
    .setExpirationTime("2h")
    .sign(secret);
};

module.exports = { createIdToken };
