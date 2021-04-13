import React, { FC } from "react";
import { useGlobalStore } from "../state/GlobalState";
import { Markers } from "./Markers";
import { Modal } from "./Modal";

export const Map: FC = () => {
    const store = useGlobalStore();

    return (
        <>
            <div
                style={{
                    height: "600px",
                    width: "800px",
                    position: "relative",
                    background: `url('${process.env.PUBLIC_URL}/background-map.jpg')`,
                    zIndex: 1
                }}
                onClick={() => store.deSelectAll()}
            >
                <Markers markers={store.mapMarkers} />
                {store.selectedMarker ? (
                    <Modal details={store.selectedMarker} />
                ) : null}
            </div>
        </>
    );
};
