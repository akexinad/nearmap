import React, { FC } from "react";
import { MapMarker } from "../../types";

import { capitalize } from "lodash";

type ModalProps = {
    details: MapMarker;
};

export const Modal: FC<ModalProps> = ({ details }) => {
    return (
        <div
            style={{
                position: "absolute",
                display: "flex",
                flexDirection: "column",
                padding: "10px",
                height: 300,
                width: 180,
                backgroundColor: "white",
                top: "15px",
                right: "15px",
                borderRadius: "5px"
            }}
            onClick={(e) => e.stopPropagation()}
        >
            <h3
                style={{
                    margin: "0 0 10px 0",
                    textAlign: "center",
                    color: "black",
                    fontSize: "25px"
                }}
            >
                Details
            </h3>
            {Object.entries(details).map(([key, value], index) => (
                <div
                    key={index}
                    style={{
                        fontSize: "14px",
                        color: "black",
                        textAlign: "start"
                        // AlignSelf: "flex-start"
                    }}
                >
                    <strong>{capitalize(key)}: </strong>
                    {value}
                </div>
            ))}
        </div>
    );
};
