const PROFILES = [
  {
    id: 'john_doe',
    description: "John Doe (random email, has name, has custom fields)",
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
    first_name: "Jane",
    last_name: "Doe",
    has_email: false,
    verified_email: false,
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
    gender: "female",
    birthdate: "2002-03-03",
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
