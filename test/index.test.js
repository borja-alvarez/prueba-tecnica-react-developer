import React from "react";
import { render, screen } from "@testing-library/react";
import { App } from "../src/app";


describe("App", () => {
    it("renders the text 'Hello world!'",()=>{
        render(<App/>);
        expect(screen.getByText("Hello world!")).toBeInTheDocument();
    })
});
