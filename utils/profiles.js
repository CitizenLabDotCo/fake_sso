const { randomBytes } = require("crypto");

const randomEmail = () => {
  const randomString = randomBytes(6).toString("hex");
  return `${randomString}@example.com`;
}

const getProfiles = () => {
  return [
    {
      id: 'john_doe',
      description: "John Doe (random email, has name, has custom fields)",
      first_name: "John",
      last_name: "Doe",
      has_email: true,
      verified_email: true,
      new_user: true,
      email: randomEmail(),
      gender: "male",
      birthdate: "2000-01-01",
    },
    {
      id: 'jane_doe',
      description: "Jane Doe (no email, has name, has custom fields)",
      first_name: "Jane",
      last_name: "Doe",
      has_email: false,
      verified_email: false,
      new_user: true,
      email: null,
      gender: "female",
      birthdate: "2001-02-02",
    },
    {
      id: 'tracy_smith',
      description: "Tracy Smith (random unverified email, has name, has custom fields)",
      first_name: "Tracy",
      last_name: "Smith",
      has_email: true,
      verified_email: false,
      new_user: true,
      email: randomEmail(),
      gender: "female",
      birthdate: "2002-03-03",
    },
    {
      id: 'billy_fixed',
      description: "Billy Fixed (fixed email & ID, has name, has custom fields)",
      first_name: "Billy",
      last_name: "Fixed",
      has_email: true,
      new_user: false,
      email: 'billy_fixed@example.com',
      verified_email: true,
      gender: "male",
      birthdate: "1980-01-01",
    },
    {
      id: 'jenny_fixed',
      description: "Jenny Fixed (no email & fixed ID, has name, has custom fields)",
      first_name: "Jenny",
      last_name: "Fixed",
      has_email: false,
      new_user: false,
      email: null,
      verified_email: false,
      gender: "female",
      birthdate: "1990-10-10",
    },
    {
      id: 'bradley_fixed',
      description: "Bradley Fixed (fixed unverified email & ID, has name, has custom fields)",
      first_name: "Bradley",
      last_name: "Fixed",
      has_email: true,
      new_user: false,
      email: 'bradley_fixed@example.com',
      verified_email: false,
      gender: "male",
      birthdate: "1984-07-01",
    }
  ]
};

const getProfileById = (id) => {
  return getProfiles().find(p => p.id === id);
}

module.exports = {
  getProfiles,
  getProfileById,
};
