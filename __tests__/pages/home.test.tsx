import React from "react";
import { render, screen, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "@/app/page";

describe("home page", () => {
  it("should render the header", async () => {
    await act(async () => {
      render(<Home />);
    });

    const header = screen.getByText("Todo App");
    expect(header).toBeInTheDocument();
  });
});

  
  