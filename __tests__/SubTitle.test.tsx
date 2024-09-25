import {render, screen} from '@testing-library/react'
import SubTitle from '../components/SubTitle/subtitle'

test("Subtitle renders correctly", () => {
    const mockData:string = "mock subtitle value"
    render(<SubTitle text="mock subtitle value"/>)
    const subtitleText = screen.getByRole("heading", {level: 3, name:"mock subtitle value"})

    expect(subtitleText).toBeInTheDocument();
})