const PROFILES = [
  {
    id: 'john_doe',
    description: "John Doe (random email, has name, has custom fields)",
    first_name: "John",
    last_name: "Doe",
    has_email: true,
    verified_email: true,
    new_user: true,
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
    verified_email: false,
    gender: "female",
    birthdate: "1990-10-10",
  }
]

const getProfiles = () => PROFILES;

const getProfileById = (id) => {
  return PROFILES.find(p => p.id === id);
}

module.exports = {
  getProfiles,
  getProfileById,
};
