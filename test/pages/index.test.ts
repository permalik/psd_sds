import React from "react";
import { render, screen } from "../test-utils";
import SiteHeader from '../../src/components/SiteHeader';

describe("SiteHeader", () => {
    it("should render the heading", () => {
        const textToFind = "SDS"

        render(<SiteHeader />);
        const button = screen.getByText(textToFind);

        expect(button).toBeInTheDocument();
    });
});