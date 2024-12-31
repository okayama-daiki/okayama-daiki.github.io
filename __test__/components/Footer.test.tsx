import React from "react";
import { it, describe, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";

import Footer from "../../src/components/Footer/Footer";
import { ThemeType } from "../../src/types";
import { useTranslation } from "react-i18next";

vi.mock("react-i18next", () => {
  const changeLanguageMock = vi.fn();
  return {
    useTranslation: () => ({
      t: (str: string) => str,
      i18n: {
        language: "en",
        changeLanguage: changeLanguageMock,
      },
    }),
  };
});

describe("Footer", () => {
  beforeEach(() => {
    cleanup();
  });

  it("should render", () => {
    render(<Footer themeType={ThemeType.LIGHT} switchThemes={() => {}} />);
    expect(screen.getByText(/Daiki Okayama/i)).toBeTruthy();
  });

  it("should call switchThemes when theme switch button is clicked", () => {
    const switchThemesMock = vi.fn();
    render(
      <Footer themeType={ThemeType.LIGHT} switchThemes={switchThemesMock} />
    );
    const button = screen.getByRole("button", { name: "Switch themes" });
    fireEvent.click(button);
    expect(switchThemesMock).toHaveBeenCalled();
  });

  it("should display Sun icon when themeType is LIGHT", () => {
    render(<Footer themeType={ThemeType.LIGHT} switchThemes={() => {}} />);
    expect(screen.getByRole("img", { name: "Sun" }));
  });

  it("should display Moon icon when themeType is DARK", () => {
    render(<Footer themeType={ThemeType.DARK} switchThemes={() => {}} />);
    expect(screen.getByRole("img", { name: "Moon" }));
  });

  it("should change language when language switch button is clicked", () => {
    const { i18n } = useTranslation();
    render(<Footer themeType={ThemeType.LIGHT} switchThemes={() => {}} />);
    const button = screen.getByRole("button", { name: "en" });
    fireEvent.click(button);
    expect(i18n.changeLanguage).toHaveBeenCalledWith("ja");
  });
});
