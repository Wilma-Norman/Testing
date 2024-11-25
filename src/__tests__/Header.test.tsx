import {render, screen} from '@testing-library/react'
import Header from '../components/Header/header'


describe("Test for the header", () => {
    it("Checks the header container is rendered", () => {
      render(<Header />);
      const headerContainer = screen.getByTestId("header");
      expect(headerContainer).toBeInTheDocument();
    });

    it("If it renders Header title", () => {
        render(<Header />)
        const headerTitle = screen.getByRole("heading", {level: 1, name:"Task List"})
        expect(headerTitle).toBeInTheDocument();
    })

    it("Checks that the header has a first subtitle", () => {
        render(<Header />)
        const firstSubtitle = screen.getByTestId("firstSubtitle"); 
        expect(firstSubtitle).toHaveTextContent("Write a task so you dont forget it!");
      });
})

