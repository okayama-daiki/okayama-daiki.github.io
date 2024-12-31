import React from "react";
import { it, describe, expect, beforeEach } from "vitest";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";

import App from "../src/App";
import { ThemeType } from "../src/types";

describe("App", () => {
  beforeEach(() => {
    cleanup();
    localStorage.clear();
  });

  it("should render the App component", () => {
    render(<App />);
    expect(screen.getByText(/Daiki Okayama/i)).toBeTruthy();
  });

  it("should switch themes when the theme switch button is clicked", () => {
    render(<App />);
    const button = screen.getByRole("button", { name: "Switch themes" });
    fireEvent.click(button);
    expect(
      document.querySelector("html")?.classList.contains(ThemeType.DARK)
    ).toBe(true);
    fireEvent.click(button);
    expect(
      document.querySelector("html")?.classList.contains(ThemeType.LIGHT)
    ).toBe(true);
  });

  it("should save the theme to localStorage when switched", () => {
    render(<App />);
    const button = screen.getByRole("button", { name: "Switch themes" });
    fireEvent.click(button);
    expect(localStorage.getItem("theme")).toBe(ThemeType.DARK);
    fireEvent.click(button);
    expect(localStorage.getItem("theme")).toBe(ThemeType.LIGHT);
  });

  it("should load the theme from localStorage on initial render", () => {
    localStorage.setItem("theme", ThemeType.DARK);
    render(<App />);
    expect(
      document.querySelector("html")?.classList.contains(ThemeType.DARK)
    ).toBe(true);
  });
});
