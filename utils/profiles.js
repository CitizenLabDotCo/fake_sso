const PROFILES = [
  {
    id: 'john_doe',
    description: "John Doe (random email, has name, has custom fields)",
    token: 'john_doe_token',
    first_name: "John",
    last_name: "Doe",
    has_email: true,
    verified_email: true,
    gender: "male",
    birthdate: "2000-01-01",
  },
  {
    id: 'jane_doe',
    description: "Jane Doe (no email, has name, has custom fields)",
    token: 'jane_doe_token',
    first_name: "Jane",
    last_name: "Doe",
    has_email: false,
    verified_email: false,
    gender: "female",
    birthdate: "2001-02-02",
  }
]

const getProfiles = () => PROFILES;

const getProfileById = (id) => {
  return PROFILES.find(p => p.id === id);
}

const getProfileByToken = (token) => {
  return PROFILES.find(p => p.token === token);
};

module.exports = {
  getProfiles,
  getProfileById,
  getProfileByToken
};
