import React from "react";

import "./test-types.css";
import completeData from "../../test-data/complete-data";

const TestTypes = ({ selectedLayer, onClick, highLight }) => {
  const TestTypesInLayerSelected = completeData[selectedLayer].Type;
  return (
    <div className="test-types">
      {TestTypesInLayerSelected &&
        TestTypesInLayerSelected.map((TestType) => {
          return (
            <button
              key={TestType}
              className="test-types-item"
              onClick={() => onClick(TestType)}
              style={{
                borderWidth: highLight === TestType ? "5px" : "",
              }}
            >
              {TestType}
            </button>
          );
        })}
    </div>
  );
};

export default TestTypes;
