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
              style={{
                borderWidth: highLight === TestTool ? "5px" : "",
              }}
            >
              {/* <img
                alt={TestTool}
                src={
                  require(`../../assets/images/${TestTool.toLowerCase()}.png`)
                    .default
                }
              /> */}
              {TestTool.charAt(0).toUpperCase() + TestTool.slice(1)}
            </div>
          );
        })}
    </div>
  );
};

export default TestTools;
