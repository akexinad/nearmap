import React from "react";
import "./App.css";

import { Map } from "../../components/Map/Map";
import { GlobalStore } from "../../state/GlobalState";

function App() {
    return (
        <GlobalStore>
            <div className="App">
                <header className="App-header">
                    <h1 className="Header">Nearmap Code Test</h1>
                    <Map />
                </header>
            </div>
        </GlobalStore>
    );
}

export default App;
