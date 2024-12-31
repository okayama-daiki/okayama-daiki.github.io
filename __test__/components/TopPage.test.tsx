import React from "react";
import { it, describe, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";

import TopPage from "../../src/components/TopPage/TopPage";

describe("TopPage", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    cleanup();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("should render the typed text", () => {
    render(<TopPage />);
    vi.advanceTimersByTime(1000);
    expect(screen.getByText(/Hello, World!/)).toBeTruthy();
    vi.advanceTimersByTime(3500);
    expect(screen.getByText(/I'm Daiki Okayama./)).toBeTruthy();
  });

  it("should remove the cursor after the typing animation", () => {
    render(<TopPage />);
    vi.advanceTimersByTime(4500);
    expect(screen.queryByTestId("typed-cursor")).toBeNull();
  });

  it("should scroll when the down icon is clicked", () => {
    render(<TopPage />);
    const scrollSpy = vi.spyOn(window, "scrollTo");
    scrollSpy.mockImplementation(() => {});
    const downIcon = screen.getByRole("img", { name: "Down icon" });
    fireEvent.click(downIcon);
    expect(scrollSpy).toHaveBeenCalledWith({
      top: window.innerHeight,
      behavior: "smooth",
    });
  });
});
