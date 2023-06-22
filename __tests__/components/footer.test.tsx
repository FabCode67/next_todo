import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"
import Footer from "@/app/components/Footer";

describe("footer page", () => {
    it("should render the paragraph", () => {
      render(<Footer />);
      const paragraph = screen.getByText('All rights reserved.');
      expect(paragraph).toBeInTheDocument();
    });
  });
  
  