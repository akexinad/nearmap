import React, { FC, useEffect } from "react";
import { mapData } from "../../data/map-data";
import { useGlobalStore } from "../../state/GlobalState";
import { Marker } from "../Marker/Marker";
import { Modal } from "../Modal/Modal";

export const Map: FC = () => {
    const store = useGlobalStore();

    useEffect(() => {
        store.setMarkers([...mapData]);

        console.log(`store.mapMarkers`, store.mapMarkers);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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
                {store.mapMarkers.map((location, index) => {
                    const [x, y] = location.position;

                    return (
                        <Marker
                            key={index}
                            id={index}
                            x={x}
                            y={y}
                            clicked={() => store.selectMarker(index)}
                        />
                    );
                })}
                {store.selected && store.selectedMarker ? (
                    <Modal details={store.selectedMarker} />
                ) : null}
            </div>
        </>
    );
};
