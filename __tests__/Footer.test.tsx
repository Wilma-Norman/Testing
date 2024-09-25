import {screen, render} from '@testing-library/react'
import Footer from '../components/Footer/footer'

describe("Tests for footer component", () => {
    it("Check if footer renders correctly", () => {
      render(<Footer />);
      const footerContainer = screen.getByTestId("footer");
      expect(footerContainer).toBeInTheDocument();
    });
  
    it("Displays the correct heading", () => {
      render(<Footer />);
      const contactTitle = screen.getByRole("heading", {level: 4, name: "Copywright 2024"})
      expect(contactTitle).toBeInTheDocument();
    });
})  