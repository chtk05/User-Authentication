const request = require("supertest");
const app = require("../__mocks__/app");
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");
const { hashPassword, comparePassword } = require("../utilities/auth");

jest.mock("../models/user.model");
jest.mock("../utilities/auth");

describe("User API", () => {
  const mockUser = {
    name: "John Doe",
    email: "john@example.com",
    password: "password123",
    quote: "This is a test quote",
  };

  beforeEach(() => {
    hashPassword.mockClear();
    comparePassword.mockClear();

    hashPassword.mockImplementation((password) => `hashed-${password}`);
    comparePassword.mockImplementation(
      (password, hashedPassword) => hashedPassword === `hashed-${password}`
    );
  });

  it("should register a new user", async () => {
    const response = await request(app)
      .post("/register")
      .send({
        name: "Jane Doe",
        email: "jane@example.com",
        password: "password456",
        quote: "This is another test quote",
      })
      .expect(200);

    expect(response.body.name).toBe("Jane Doe");
    expect(response.body.email).toBe("jane@example.com");
    expect(response.body.password).toBe("hashed-password456");
    expect(response.body.quote).toBe("This is another test quote");
  }, 10000);

  it("should login a user", async () => {
    const response = await request(app)
      .post("/login")
      .send({ email: mockUser.email, password: mockUser.password })
      .expect(200);

    expect(comparePassword).toHaveBeenCalledWith(
      "password123",
      "hashed-password123"
    );
    expect(response.body.email).toBe(mockUser.email);
    expect(response.body.name).toBe(mockUser.name);
    expect(response.body.quote).toBe(mockUser.quote);
    expect(response.headers["set-cookie"]).toBeDefined();
  });

  it("should logout a user", async () => {
    const response = await request(app).post("/logout").expect(200);

    expect(response.body).toBe("Success");
  });
});
