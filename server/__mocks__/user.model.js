const users = [];

const findOne = jest.fn((query) => {
  console.log("findOne called with query:", query);
  return users.find((user) => user.email === query.email);
});

const create = jest.fn((user) => {
  console.log("create called with user:", user);
  const newUser = { ...user, _id: Date.now().toString() };
  users.push(newUser);
  console.log("New user created:", newUser);
  return newUser;
});

const __setMockUsers = (newUsers) => {
  users.length = 0;
  users.push(...newUsers);
};

const __clearMockUsers = () => {
  users.length = 0;
};

module.exports = {
  findOne,
  create,
  __setMockUsers,
  __clearMockUsers,
};
