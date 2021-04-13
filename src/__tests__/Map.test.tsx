import { mount, ReactWrapper } from "enzyme";
import React, { FC } from "react";
import { Map } from "../components/Map";
import { GlobalContext } from "../state/GlobalState";
import { State } from "../types";

let wrapper: ReactWrapper;
let MockStore: FC;

const mockStateWithSelectedMarker: State = {
    mapMarkers: [],
    selectedMarkerId: null,
    selectedMarker: {
        name: "Dragontail",
        type: "village",
        population: 565,
        wealth: 11360,
        authority: "constable",
        numGuards: 5,
        position: [83, 65]
    },
    selectMarker: () => {},
    deSelectAll: () => {}
};

const mockStateNOSelectedMarker: State = {
    mapMarkers: [],
    selectedMarkerId: null,
    selectedMarker: null,
    selectMarker: () => {},
    deSelectAll: () => {}
};

describe("Map component with modal", () => {
    beforeEach(() => {
        MockStore = (props) => (
            <GlobalContext.Provider
                value={mockStateWithSelectedMarker}
                {...props}
            />
        );

        wrapper = mount(
            <MockStore>
                <Map />
            </MockStore>
        );
    });

    afterEach(() => {
        wrapper.unmount();
    });

    it("should contain a div", () => {
        expect(wrapper.find("#map")).toHaveLength(1);
    });

    it("should contain a Markers component", () => {
        const props = wrapper.find("Memo()").props() as {
            markers: [];
            foo: any;
        };

        expect(wrapper.find("Memo()")).toHaveLength(1);
        expect(props.markers).toBeTruthy();
        expect(props.foo).toBeFalsy();
    });

    it("should display the modal when a maker has been selected", () => {
        expect(wrapper.find("Modal")).toHaveLength(1);
    });
});

describe("Map component with no modal", () => {
    beforeEach(() => {
        MockStore = (props) => (
            <GlobalContext.Provider
                value={mockStateNOSelectedMarker}
                {...props}
            />
        );

        wrapper = mount(
            <MockStore>
                <Map />
            </MockStore>
        );
    });

    afterEach(() => {
        wrapper.unmount();
    });

    it("should contain a div", () => {
        expect(wrapper.find("#map")).toHaveLength(1);
    });

    it("should contain a Markers component", () => {
        const props = wrapper.find("Memo()").props() as {
            markers: [];
            foo: any;
        };

        expect(wrapper.find("Memo()")).toHaveLength(1);
        expect(props.markers).toBeTruthy();
        expect(props.foo).toBeFalsy();
    });

    it("should NOT display the modal when a maker has been selected", () => {
        expect(wrapper.find("Modal")).toHaveLength(0);
    });
});
