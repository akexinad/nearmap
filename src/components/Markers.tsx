import React, { memo, NamedExoticComponent } from "react";
import { MapMarker } from "../types";
import { Marker } from "./Marker";

type MarkerProps = {
    markers: MapMarker[];
};

/**
 * we pass the markers down as prop and memoise the Marker component
 * so the markers aren't rerendered everytime a user clicks on a marker.
 */
export const Markers: NamedExoticComponent<MarkerProps> = memo((props) => {
    const { markers } = props;

    return (
        <>
            {markers.map((location, index) => {
                const [x, y] = location.position;

                return <Marker key={index} id={index} x={x} y={y} />;
            })}
        </>
    );
});
