import * as React from "react";
import { useStore } from "@nanostores/react";
import { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import {
  $height,
  $lineGraphData,
  $renderTheGraph,
  $width,
} from "../store/store";
import PortalTooltip from "./PortalTooltip";
import Legends from "./Legends";

import LinearLine from "../graphs/LinearLine/graphWrapper"; //////////////////////

const VisualComponent = (): JSX.Element => {
  const [enableTooltip, setEnableTooltip] = useState(false);
  const [toolTipPos, setToolTipPos] = useState({ left: 0, top: 0 });
  const [tooltipData, setTooltipData] = useState<any>({ label: "", data: [] });
  const [labels, setLabels] = useState();

  const handleMouseEnter = (event, d) => {
    console.log("d", d);
    setEnableTooltip(() => true);
    setToolTipPos({
      ...toolTipPos,
      left: event.clientX,
      top: event.clientY - 10,
    });
    const labelsLineGraph = lineGraphData?.labels?.map((el) => el.label);
    console.log(labelsLineGraph);

    const prepareLableData = {
      label: d?.label,
      data: [],
    };

    for (let i = 0; i < labelsLineGraph?.length; i++) {
      prepareLableData.data.push({
        value: d[labelsLineGraph[i]],
        color: d[`${labelsLineGraph[i]}Color`],
      });
    }

    setTooltipData(prepareLableData);

    // const tData = d.data || d;
    // setTooltipData({ label: tData?.label, value: tData?.value });
  };
  const handleMouseMove = (event) => {
    setToolTipPos({
      ...toolTipPos,
      left: event.clientX,
      top: event.clientY - 10,
    });
    // }
  };
  const handleMouseLeave = () => {
    setToolTipPos({
      left: 0,
      top: 0,
    });
    setEnableTooltip(() => false);
    setTooltipData({ label: "", value: "" });
    //}
  };

  const lineGraphData = $lineGraphData.get();

  let width: number = useStore($width);
  let height: number = useStore($height);
  let renderTheGraphBool: boolean = useStore($renderTheGraph);

  let size = Math.min(width, height);

  useEffect(() => {
    // console.log(width, height, lineGraphData);
    // console.log("rendering the graph");
    // const labelsLineGraph = lineGraphData.map((el) => el.label);
    // setLabels(labelsLineGraph);
  }, [width, height, lineGraphData, renderTheGraphBool]);

  // useEffect(()=>{
  //  const labelsLineGraph = lineGraphData.map((el) => el.label);
  //   setLabels(labelsLineGraph);
  // },[lineGraphData])

  return (
    <GraphContainer size={size}>
      <LinearLine
        data={lineGraphData}
        config={{
          graphType: "line",
          gridXYLabelFontSize: `${10}`,
          enableGridYLine: true,
          gridLineStrokeWidth: 1,
          dasharray: 0,
          pointCircleFontSize: 0,
          //   enablePointCircle: true,
          disableCircleLabel: true,

          yAxisType: "number", // added for the y axis for delimeter
          yAxisTicksFormat: true, // added for the y axis for delimeter

          //   hideYAxis: false,
          enableAllPointToolTip: false,
          gridXTicks: `${5}`,
          //   pointCircleStroke: "#fff",
          //   pointCircleStrokeWidth: 3,
          hoverLine: true,
          padding: {
            left: 25,
            // bottom : 25
          },
          handleMouseMove,
          handleMouseEnter,
          handleMouseLeave,
        }}
      />
      {enableTooltip && (
        <PortalTooltip
          isOpen={true}
          pos={toolTipPos}
          align={toolTipPos.left > window.innerWidth / 2 ? "left" : "right"}
          vAlign={toolTipPos.top > window.innerHeight / 2 ? "top" : "bottom"}
        >
          <TooltipWrapper>
            <TooltipTitle>{tooltipData?.label}</TooltipTitle>
            <TooltipBody>
              {tooltipData?.data?.map((el) => (
                <Div>
                  <TooltipColorBox color={el.color} />
                  <TooltipValueBox> {el.value} </TooltipValueBox>
                </Div>
              ))}
            </TooltipBody>
          </TooltipWrapper>
        </PortalTooltip>
      )}
      <Legends labels={lineGraphData?.labels} />
    </GraphContainer>
  );
};

export default VisualComponent;

export const GraphContainer = styled.div<{ size?: number }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: ${({ size }) => size + "px" || "100%"};
`;
// export const GraphWrap = styled.div`
//   position: relative;
//   width: 100% !important;
//   height: 100% !important;

//   .circle-path-center-label {
//     font-size: 1rem !important;
//   }
//   .circle-path-center-sub-label {
//     font-size: 0.75rem !important;
//   }
// `;

export const TooltipWrapper = styled.div`
  padding: 0.7rem 0.875rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
export const TooltipTitle = styled.div`
  font-weight: 500;
  font-size: 1rem;
  line-height: 0.5rem;
  color: #585858;
`;
export const TooltipBody = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Div = styled.div`
  display: flex;
`;

export const TooltipColorBox = styled.div`
  height: 0.5rem;
  width: 0.5rem;
  border-radius: 50%;
  background-color: ${({ color }) => color};
`;

export const TooltipValueBox = styled.div``;
