import { mount, ReactWrapper } from "enzyme";
import React from "react";
import { Marker } from "../components/Marker";

let wrapper: ReactWrapper;

beforeEach(() => {
    wrapper = mount(<Marker id={4} x={100} y={200} />);
});

afterEach(() => {
    wrapper.unmount();
});

describe("Marker component", () => {
    it("should contain an img", () => {
        expect(wrapper.find("img")).toHaveLength(1);
    });
});
