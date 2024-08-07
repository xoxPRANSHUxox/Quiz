
import { render, screen, fireEvent } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import CreateNew from "../components/CreateNew/CreateNew"

describe("CreateNew component", () => {
    it("should render the 'MCQ BASED QUESTIONS' button", () => {
        render(<CreateNew />)
        const createNewBtn = screen.getByText("MCQ BASED QUESTIONS")
        expect(createNewBtn).toBeInTheDocument()
    })

    it("should render CreateNewForm after button click", () => {
        render(<CreateNew />)
        const createNewBtn = screen.getByText("MCQ BASED QUESTIONS")
        fireEvent.click(createNewBtn)
        const formElement = screen.getByText("CreateNewForm Content") // Assuming your CreateNewForm component has some identifiable text
        expect(formElement).toBeInTheDocument()
    })
})
