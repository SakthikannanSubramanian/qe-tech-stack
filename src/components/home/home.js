import React, { useState } from "react";
import Modal from "react-modal";

import HighLevelLayers from "../highLevelLayers/high-level-layer";
import TestTypes from "../test-types/test-types";
import TestTools from "../test-tools/test-tools";

import Description from "../../test-data/description";

import "./home.css";

const Home = () => {
  const [showLayers, setLayers] = useState(false);
  const [selectedLayer, UpdateSelectedLayer] = useState("");
  const [selectedTestType, UpdateSelectedTestType] = useState("");
  const [selectedTool, UpdateSelectedTool] = useState("");

  const closeModal = () => {
    UpdateSelectedTool("");
  };

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
      {selectedTool && (
        <Modal
          style={{
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
          }}
          isOpen={Boolean(selectedTool)}
        >
          <br />
          <div>
            <br />
            <br />
            <label className="heading">{Description[selectedTool].label}</label>
            <br />
            <br />

            <label className="sideHeading">Description:</label>

            <br />
            <br />
            <label>{Description[selectedTool].description}</label>
            <br />
            <br />

            <label className="sideHeading">Why:</label>

            <br />
            <br />
            <label>{Description[selectedTool].why}</label>
            <br />
            <br />

            <label className="sideHeading">Useful link:</label>
            <br />
            <br />
            <a href={Description[selectedTool].url}>
              {Description[selectedTool].url}
            </a>
          </div>

          <center>
            <button className="close-button" onClick={closeModal}>
              close
            </button>
          </center>
        </Modal>
      )}
    </div>
  );
};

export default Home;
