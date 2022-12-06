import React, { useState } from "react";

import HighLevelLayers from "../highLevelLayers/high-level-layer";
import TestTypes from "../test-types/test-types";
import TestTools from "../test-tools/test-tools";

import "./home.css";

const Home = () => {
  const [showLayers, setLayers] = useState(false);
  const [selectedLayer, UpdateSelectedLayer] = useState("");
  const [selectedTestType, UpdateSelectedTestType] = useState("");
  const [selectedTool, UpdateSelectedTool] = useState("");
  console.log(selectedTool);
  return (
    <div className="home">
      <button
        className="click-btn"
        onClick={() => {
          setLayers(!showLayers);
        }}
      >
        Architechtural Layers
      </button>
      {showLayers && (
        <HighLevelLayers
          highLight={selectedLayer}
          onClick={UpdateSelectedLayer}
        />
      )}
      {showLayers && selectedLayer && (
        <TestTypes
          selectedLayer={selectedLayer}
          highLight={selectedTestType}
          onClick={UpdateSelectedTestType}
        />
      )}
      {showLayers && selectedLayer && selectedTestType && (
        <TestTools
          selectedLayer={selectedLayer}
          selectedTestType={selectedTestType}
          highLight={selectedTool}
          onClick={UpdateSelectedTool}
        />
      )}
    </div>
  );
};

export default Home;
