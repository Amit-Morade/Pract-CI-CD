import { render, screen } from "@testing-library/react"
import Message from "./components/Message/Message";

describe("Message", () => {
    it("renders message correctly in uppercase format", () => {
        render(<Message message="How are you?"/>)
        screen.debug();
        expect(screen.getByText(/HOW ARE YOU?/)).toBeInTheDocument();
    })
})