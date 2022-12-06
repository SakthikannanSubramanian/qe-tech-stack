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
        <div>
          <br />
          <label>
            <b>Choose Layer</b>
          </label>
          <br />
          <HighLevelLayers
            highLight={selectedLayer}
            onClick={UpdateSelectedLayer}
          />
        </div>
      )}
      {showLayers && selectedLayer && (
        <div>
          <label>
            <b>Choose Test type</b>
          </label>
          <br />
          <br />
          <TestTypes
            selectedLayer={selectedLayer}
            highLight={selectedTestType}
            onClick={UpdateSelectedTestType}
          />
        </div>
      )}
      <br />
      {showLayers && selectedLayer && selectedTestType && (
        <div>
          <label>
            <b>Suggested Tools</b>
          </label>
          <br />
          <br />
          <TestTools
            selectedLayer={selectedLayer}
            selectedTestType={selectedTestType}
            highLight={selectedTool}
            onClick={UpdateSelectedTool}
          />
        </div>
      )}
    </div>
  );
};

export default Home;
