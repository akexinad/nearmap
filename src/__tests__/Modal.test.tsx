import { ReactWrapper, mount, ShallowWrapper, shallow } from "enzyme";
import { capitalize } from "lodash";
import React from "react";
import { Modal } from "../components/Modal";

let wrapper: ShallowWrapper;

const mockMarkerDetails = {
    name: "Dragontail",
    type: "village",
    population: 565,
    wealth: 11360,
    authority: "constable",
    numGuards: 5,
    position: [83, 65]
};

const testDetails = Object.entries(mockMarkerDetails).map((keyValue, index) => {
    const [key, value] = keyValue;
    return [index, capitalize(key), capitalize(value.toString())];
});

beforeEach(() => {
    wrapper = shallow(<Modal details={mockMarkerDetails} />);
});

afterEach(() => {
    wrapper.unmount();
});

describe("Modal component", () => {
    it("should contain a div of id container", () => {
        expect(wrapper.find("#container")).toHaveLength(1);
    });

    it("should contain an h3", () => {
        expect(wrapper.find("h3")).toHaveLength(1);
    });

    test.each(testDetails)(
        "should display the mockMarkerDetails",
        (index, key, value) => {
            expect(
                wrapper
                    .find("strong")
                    .at(+index)
                    .text()
            ).toContain(key);

            expect(
                wrapper
                    .find("#value")
                    .at(+index)
                    .text()
            ).toContain(value);
        }
    );
});
