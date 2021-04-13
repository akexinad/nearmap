import { ReactWrapper, mount } from "enzyme";
import React from "react";
import { Modal } from "../components/Modal";

let wrapper: ReactWrapper;

const mockMarkerDetails = {
    name: "Dragontail",
    type: "village",
    population: 565,
    wealth: 11360,
    authority: "constable",
    numGuards: 5,
    position: [83, 65]
};

const testDetails = Object.entries(mockMarkerDetails);

beforeEach(() => {
    wrapper = mount(<Modal details={mockMarkerDetails} />);
});

afterEach(() => {
    wrapper.unmount();
});

describe("Modal component", () => {
    it("should foo", () => {
        expect(1).toBe(1);
    });
});
