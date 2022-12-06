import React from "react";

import "./test-tools.css";
import completeData from "../../test-data/complete-data";

const TestTools = ({ selectedLayer, selectedTestType, highLight, onClick }) => {
  const TestToolForSelectedLayer =
    completeData[selectedLayer][selectedTestType.split(" ").join("")];
  return (
    <div className="test-tools">
      {TestToolForSelectedLayer &&
        TestToolForSelectedLayer.map((TestTool) => {
          return (
            <div
              key={TestTool}
              className="test-tools-item"
              onClick={() => onClick(TestTool)}
            >
              <img
                alt={TestTool}
                width={50}
                height={50}
                src={require(`../../assets/images/${TestTool.toLowerCase()}.png`)}
              />
              <br />
              <label>
                {TestTool.charAt(0).toUpperCase() + TestTool.slice(1)}
              </label>
            </div>
          );
        })}
    </div>
  );
};

export default TestTools;
