import React from "react";
import Login from "./Login";
import { render } from "../utils/testUtils";
import { screen } from "../utils/testUtils";
import "@testing-library/jest-dom";

test("email input should be rendered", () => {
  render(<Login />);
  const userInputEle = screen.getByPlaceholderText(/email/i);
  expect(userInputEle).toBeInTheDocument();
});

test("password input should be rendered", () => {
  render(<Login />);
  const passwordInputEle = screen.getByPlaceholderText(/password/i);
  expect(passwordInputEle).toBeInTheDocument();
});

test("button should be rendered", () => {
  render(<Login />);
  const buttoneInputEle = screen.getByRole("button");
  expect(buttoneInputEle).toBeInTheDocument();
});

test("email input should be empty", () => {
  render(<Login />);
  const userInputEle = screen.getByPlaceholderText(/email/i);
  expect(userInputEle.value).toBe("");
});

test("password input should be empty", () => {
  render(<Login />);
  const passwordInputEle = screen.getByPlaceholderText(/password/i);
  expect(passwordInputEle.value).toBe("");
});

test("button shoukd be disable when input field is empty", () => {
  render(<Login />);
  const buttonInputEle = screen.getByRole("button");
  expect(buttonInputEle).toBeDisabled();
});
