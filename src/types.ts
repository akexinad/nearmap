export type MapMarker = {
    name?: string;
    type?: string;
    population?: number;
    wealth?: number;
    authority?: string;
    numGuards?: number;
    position: number[];
};

export type State = {
    mapMarkers: MapMarker[];
    selected: boolean;
    selectedMarkerId: number | null;
    selectedMarker: MapMarker | null;
    selectMarker: (id: number) => void;
    deSelectAll: () => void;
    setMarkers: (mapMarkers: MapMarker[]) => void;
};
