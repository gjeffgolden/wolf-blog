import { render, screen } from "@testing-library/react";
import OnePost from '../OnePost';

test("Author image displays correctly", () => {
    render(<OnePost />)
    const authorImage = screen.getByAltText(/Jeff Golden Author/i);
    expect(authorImage).toBeInTheDocument();
})