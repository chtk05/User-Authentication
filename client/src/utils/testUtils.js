import React from "react";
import { render } from "@testing-library/react";
import AuthProvider from "../provider/AuthProvider";
import { BrowserRouter as Router } from "react-router-dom";

const customRender = (ui, options) => {
  return render(
    <Router>
      <AuthProvider>{ui}</AuthProvider>
    </Router>,
    options
  );
};

export * from "@testing-library/react";

export { customRender as render };
