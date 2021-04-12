import React, { FC } from "react";
import { useGlobalStore } from "../../state/GlobalState";

export type MarkerProps = {
    id: number;
    x: number;
    y: number;
    clicked: (id: number) => void;
};

export const Marker: FC<MarkerProps> = ({ id, x, y, clicked }) => {
    const store = useGlobalStore();

    return (
        <img
            src={
                store.selected && store.selectedMarkerId === id
                    ? "./marker-selected.png"
                    : "./marker.png"
            }
            alt="marker"
            style={{
                position: "absolute",
                left: x,
                top: y,
                cursor: "pointer",
                zIndex: 100
            }}
            onClick={(e) => {
                e.stopPropagation();
                clicked(id);
            }}
        />
    );
};
