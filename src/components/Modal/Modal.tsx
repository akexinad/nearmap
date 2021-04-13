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
                height: 270,
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
                    margin: "0 0 15px 0",
                    textAlign: "left",
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
                        display: "flex",
                        flexDirection: "row",
                        fontSize: "14px",
                        color: "black",
                        textAlign: "start",
                        marginBottom: "10px"
                    }}
                >
                    <div
                        style={{
                            width: "90px",
                            margin: 0
                        }}
                    >
                        <p
                            style={{
                                margin: 0
                            }}
                        >
                            <strong>{capitalize(key)}</strong>
                        </p>
                    </div>
                    <div
                        style={{
                            width: "100px"
                        }}
                    >
                        <p
                            style={{
                                margin: 0
                            }}
                        >
                            {capitalize(value?.toString())}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};
