module.exports = {
  hashPassword: jest.fn((password) => `hashed-${password}`),
  comparePassword: jest.fn(
    (password, hashedPassword) => hashedPassword === `hashed-${password}`
  ),
};
