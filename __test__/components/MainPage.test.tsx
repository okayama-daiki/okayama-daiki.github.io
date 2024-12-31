import React from "react";
import { it, describe, expect, vi, beforeEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";

import MainPage from "../../src/components/MainPage";

vi.mock("react-i18next", () => {
  return {
    useTranslation: () => ({
      t: (str: string) => str,
      i18n: {
        language: "en",
        changeLanguage: vi.fn(),
      },
    }),
  };
});

describe("MainPage", () => {
  beforeEach(() => {
    cleanup();
  });

  it("should render the whoAmI section", () => {
    render(<MainPage />);
    expect(screen.getByText(/whoAmI\.title/)).toBeTruthy();
    expect(screen.getByText(/whoAmI\.description/)).toBeTruthy();
    expect(screen.getByText(/Dakken LLC\./)).toBeTruthy();
    expect(screen.getByText(/whoAmI\.company/)).toBeTruthy();
    expect(screen.getByText(/whoAmI\.university\.name/)).toBeTruthy();
    expect(screen.getByText(/whoAmI\.university\.details/)).toBeTruthy();
    expect(
      screen.getByText(/whoAmI\.university\.graduateSchool\.name/)
    ).toBeTruthy();
    expect(
      screen.getByText(/whoAmI\.university\.graduateSchool\.details/)
    ).toBeTruthy();
  });

  it("should render the projects section", () => {
    render(<MainPage />);
    expect(screen.getByText(/projects\.title/)).toBeTruthy();
    expect(screen.getByText(/projects\.description/)).toBeTruthy();
    expect(screen.getByText(/projects\.items\.videoSystem/)).toBeTruthy();
    expect(
      screen.getByText(/\[WIP\] projects\.items\.selfCareApp/)
    ).toBeTruthy();
  });

  it("should render the skills section", () => {
    render(<MainPage />);
    expect(screen.getByText(/skills\.title/)).toBeTruthy();
    expect(screen.getByText(/skills\.description/)).toBeTruthy();
    expect(screen.getByText(/skills\.items\.git\.name/)).toBeTruthy();
    expect(screen.getByText(/skills\.items\.git\.description/)).toBeTruthy();
    expect(screen.getByText(/skills\.items\.python\.name/)).toBeTruthy();
    expect(screen.getByText(/skills\.items\.python\.description/)).toBeTruthy();
  });

  it("should render the works section", () => {
    render(<MainPage />);
    expect(screen.getByText(/works\.title/)).toBeTruthy();
    expect(screen.getByText(/works\.description/)).toBeTruthy();
    expect(screen.getByText(/works\.items\.snakeGame/)).toBeTruthy();
    expect(screen.getByText(/works\.items\.github\.text/)).toBeTruthy();
    expect(screen.getByText(/works\.items\.github\.link/)).toBeTruthy();
  });

  it("should render the links section", () => {
    render(<MainPage />);
    expect(screen.getByText(/links\.title/)).toBeTruthy();
    expect(screen.getByText(/links\.items\.github/)).toBeTruthy();
    expect(screen.getByText(/links\.items\.stackoverflow/)).toBeTruthy();
    expect(screen.getByText(/links\.items\.zenn/)).toBeTruthy();
    expect(screen.getByText(/links\.items\.qiita/)).toBeTruthy();
  });

  it("should render the contact section", () => {
    render(<MainPage />);
    expect(screen.getByText(/contact\.title/)).toBeTruthy();
    expect(screen.getByText(/contact\.description/)).toBeTruthy();
    expect(screen.getByText(/contact\.email/)).toBeTruthy();
  });
});
