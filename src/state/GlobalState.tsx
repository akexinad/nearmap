import React, {
    createContext,
    FC,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useState
} from "react";
import { MapMarker, State } from "../types";

const initialState: State = {
    mapMarkers: [],
    selectedMarkerId: null,
    selectedMarker: null,
    selectMarker: () => {},
    deSelectAll: () => {}
};

const GlobalContext = createContext<State>(initialState);

export const GlobalStore: FC = (props) => {
    const [selectedMarkerId, setselectedMarkerId] = useState<number | null>(
        null
    );
    const [selectedMarker, setselectedMarker] = useState<MapMarker | null>(
        null
    );
    const [mapMarkers, setMapMarkers] = useState<MapMarker[]>([]);

    useEffect(() => {
        fetch(process.env.REACT_APP_API_URL)
            .then((response) => response.json())
            .then((data) => setMapMarkers(data))
            .catch((err) => console.error("ERROR: ", err));
    }, []);

    /**
     * The functions below could be made a lot more pure
     * in order to reduce complexity and dependency on the
     * useCallback hook.
     */
    const selectMarker = useCallback(
        (id: number) => {
            setselectedMarker(mapMarkers[id]);

            /**
             * Ideally the data would have a property of
             * id so this logic would be unnecessary, but
             * for the purposes of this test we will
             * just use it's index
             */
            setselectedMarkerId(id);
        },
        [mapMarkers]
    );

    const deSelectAll = useCallback(() => {
        setselectedMarkerId(null);
        setselectedMarker(null);
    }, []);

    const initialStateMemoized = useMemo<State>(
        () => ({
            mapMarkers,
            selectedMarkerId,
            selectedMarker,
            selectMarker,
            deSelectAll
        }),
        [
            mapMarkers,
            selectedMarkerId,
            selectedMarker,
            selectMarker,
            deSelectAll
        ]
    );

    return <GlobalContext.Provider value={initialStateMemoized} {...props} />;
};

export const useGlobalStore = () => useContext(GlobalContext);
