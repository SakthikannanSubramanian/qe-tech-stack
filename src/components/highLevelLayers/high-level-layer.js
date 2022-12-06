import React, { useState } from "react";

import "./high-level-layer.css";

const HighLevelComponent = (props) => {
  const [layers] = useState(["Frontend", "Backend", "Apps"]);

  return (
    <div className="heading-layers">
      {layers &&
        layers.map((layer) => {
          return (
            <button
              key={layer}
              className="high-level-architectural-layer"
              onClick={() => props.onClick(layer)}
              style={{
                borderWidth: props.highLight === layer ? "5px" : "",
              }}
            >
              {layer}
            </button>
          );
        })}
    </div>
  );
};

export default HighLevelComponent;
