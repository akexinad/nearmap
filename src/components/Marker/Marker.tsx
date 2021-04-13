import React, { FC } from "react";
import { useGlobalStore } from "../../state/GlobalState";

export type MarkerProps = {
    id: number;
    x: number;
    y: number;
};

export const Marker: FC<MarkerProps> = (props) => {
    const { id, x, y } = props;

    const store = useGlobalStore();

    return (
        <img
            src={
                store.selectedMarkerId === id
                    ? "./marker-selected.png"
                    : "./marker.png"
            }
            alt="marker"
            style={{
                position: "absolute",
                left: x,
                top: y,
                cursor: "pointer",
                zIndex: 10
            }}
            onClick={(e) => {
                e.stopPropagation();
                store.selectMarker(id);
            }}
        />
    );
};
