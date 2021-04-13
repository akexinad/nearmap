import React, { memo, NamedExoticComponent } from "react";
import { MapMarker } from "../../types";
import { Marker } from "../Marker/Marker";

type MarkerProps = {
    markers: MapMarker[];
};

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
