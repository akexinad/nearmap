import React, {
    createContext,
    FC,
    useCallback,
    useContext,
    useMemo,
    useState
} from "react";
import { MapMarker, State } from "../types";

const initialState: State = {
    mapMarkers: [],
    selected: false,
    selectedMarkerId: null,
    selectedMarker: null,
    selectMarker: () => {},
    deSelectAll: () => {},
    setMarkers: () => {}
};

const GlobalContext = createContext<State>(initialState);

export const GlobalStore: FC = (props) => {
    const [selected, setSelected] = useState(false);
    const [selectedMarkerId, setselectedMarkerId] = useState<number | null>(
        null
    );
    const [selectedMarker, setselectedMarker] = useState<MapMarker | null>(
        null
    );
    const [mapMarkers, setMapMarkers] = useState<MapMarker[]>([]);

    const selectMarker = useCallback(
        (id: number) => {
            setSelected(true);

            setselectedMarker({ ...mapMarkers[id] });

            setselectedMarkerId(id);
        },
        [mapMarkers]
    );

    const deSelectAll = useCallback(() => {
        setSelected(false);
        setselectedMarkerId(null);
    }, []);

    const setMarkers = (mapMarkers: MapMarker[]) => {
        setMapMarkers([...mapMarkers]);
    };

    const initialStateMemoized = useMemo<State>(
        () => ({
            mapMarkers,
            selected,
            selectedMarkerId,
            selectedMarker,
            selectMarker,
            deSelectAll,
            setMarkers
        }),
        [
            mapMarkers,
            selected,
            selectedMarkerId,
            selectMarker,
            deSelectAll,
            selectedMarker
        ]
    );

    return <GlobalContext.Provider value={initialStateMemoized} {...props} />;
};

export const useGlobalStore = () => useContext(GlobalContext);
