import React from "react";
import Register from "./Register";
import { render, screen, fireEvent } from "../utils/testUtils";
import "@testing-library/jest-dom";

test("name input should be rendered", () => {
  render(<Register />);
  const nameInputEle = screen.getByPlaceholderText(/Name/i);
  expect(nameInputEle).toBeInTheDocument();
});

test("email input should be rendered", () => {
  render(<Register />);
  const emailInputEle = screen.getByPlaceholderText(/Email/i);
  expect(emailInputEle).toBeInTheDocument();
});

test("password input should be rendered", () => {
  render(<Register />);
  const passwordInputEle = screen.getByPlaceholderText(/Password/i);
  expect(passwordInputEle).toBeInTheDocument();
});

test("quote input should be rendered", () => {
  render(<Register />);
  const quoteInputEle = screen.getByPlaceholderText(/Quote/i);
  expect(quoteInputEle).toBeInTheDocument();
});

test("submit button should be rendered", () => {
  render(<Register />);
  const buttonEle = screen.getByRole("button");
  expect(buttonEle).toBeInTheDocument();
});

test("password input should enforce minimum length", () => {
  render(<Register />);
  const passwordInputEle = screen.getByPlaceholderText(/Password/i);
  fireEvent.change(passwordInputEle, { target: { value: "12345" } });
  expect(passwordInputEle.value.length).toBeLessThan(6);
  fireEvent.change(passwordInputEle, { target: { value: "123456" } });
  expect(passwordInputEle.value.length).toBeGreaterThanOrEqual(6);
});

test("all inputs should be empty initially", () => {
  render(<Register />);
  const nameInputEle = screen.getByPlaceholderText(/Name/i);
  const emailInputEle = screen.getByPlaceholderText(/Email/i);
  const passwordInputEle = screen.getByPlaceholderText(/Password/i);
  const quoteInputEle = screen.getByPlaceholderText(/Quote/i);
  expect(nameInputEle.value).toBe("");
  expect(emailInputEle.value).toBe("");
  expect(passwordInputEle.value).toBe("");
  expect(quoteInputEle.value).toBe("");
});

test("button should be disabled when inputs are empty", () => {
  render(<Register />);
  const buttonEle = screen.getByRole("button");
  expect(buttonEle).toBeDisabled();
});
