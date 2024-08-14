const PROFILES = [
  {
    profile_name: 'john_doe',
    profile_description: "John Doe (random email, has name, has custom fields)",
    first_name: "John",
    last_name: "Doe",
    has_email: true,
    verified_email: true,
    gender: "male",
    birthdate: "2000-01-01",
  },
  {
    profile_name: 'jane_doe',
    profile_description: "Jane Doe (no email, has name, has custom fields)",
    first_name: "Jane",
    last_name: "Doe",
    has_email: false,
    verified_email: false,
    gender: "female",
    birthdate: "2001-02-02",
  }
]

const getProfiles = () => PROFILES;

const getProfileByName = (profileName) => {
  return PROFILES.find(p => p.profile === profileName);
}

const getProfileByToken = () => {
  // TODO
};

module.exports = {
  getProfiles,
  getProfileByName,
  getProfileByToken
};
