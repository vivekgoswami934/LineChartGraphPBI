import * as React from "react";
import { useStore } from "@nanostores/react";
import { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { $height, $lineGraphData, $width } from "../store/store";

import LinearLine from "../graphs/LinearLine/graphWrapper"; //////////////////////

const VisualComponent = (): JSX.Element => {
  const lineGraphData = $lineGraphData.get();

  let width: number = useStore($width);
  let height: number = useStore($height);

  let size = Math.min(width, height);

  useEffect(() => {
    console.log(width, height, lineGraphData);
  }, [width, height, lineGraphData]);

  return (
    <GraphContainer size={+size}>
      <GraphWrap>
        <LinearLine
          data={lineGraphData}
          config={{
            graphType: "line",
            padding: {
                left: 25,
                top : 25,
                bottom : 25,
                right : 25
              },
            //   handleMouseMove,
            //   handleMouseEnter,
            //   handleMouseLeave,
          }}
        />
      </GraphWrap>
    </GraphContainer>
  );
};

export default VisualComponent;

export const GraphContainer = styled.div<{ size?: number }>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: ${({ size  }) => size + "px" || "100%"};
`;
export const GraphWrap = styled.div`
  position: relative;
  width: 100% !important;
  height: 100% !important;

  .circle-path-center-label {
    font-size: 1rem !important;
  }
  .circle-path-center-sub-label {
    font-size: 0.75rem !important;
  }
`;
