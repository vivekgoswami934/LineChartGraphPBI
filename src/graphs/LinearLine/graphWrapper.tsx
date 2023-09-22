import * as React from "react";
// import PropTypes from 'prop-types'
import { actualOneD } from '../utils/mockData'
import ResizeHandlerHOC from '../utils/resizeHandlerHOC'
import LinearLineGraph from './linearLine.graph'
import  styled  from 'styled-components'
// import { GraphContainer, GraphWrp } from '../Styles/index.sc'

const LinearLine = (props) => {
  const refElement = React.useRef(null)
  let graph

  // useEffect hook - creates new d3 component whenever data changes
  React.useEffect(() => {
    if (props.data) {
      graph = graph || new LinearLineGraph(refElement.current)
      graph.setData(props.data || actualOneD)
      graph.setConfig({ ...props.config })
      graph.drawGraph()
    }
  }, [props.data, props.rerender])

  return (
    <GraphContainer className='linear-line '>
      <GraphWrp className='graph-wrp' ref={refElement} />
    </GraphContainer>
  )
}
// LinearLine.propTypes = {
//   data: PropTypes.object,
//   config: PropTypes.object,
//   rerender: PropTypes.string
// }
export default ResizeHandlerHOC(LinearLine)



export const GraphContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;

  .region-wrp {
    background-color: blue;
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .regions,
  .countries,
  .citys,
  .regions-label,
  .countries-label {
    position: absolute;
    overflow: hidden;
  }
  .citys,
  .countries,
  .regions {
    border: 1px solid #fff;
  }
  .node {
    box-sizing: border-box;
    line-height: 1em;
    overflow: hidden;
    position: absolute;
    white-space: pre;
    background: #ddd;
  }

  .node-label,
  .node-value {
    margin: 4px;
  }

  .node-value {
    margin-top: -2px;
  }

  .node-value {
    font-weight: bold;
  }

  .regions-label {
    color: #fff;
  }
  .bubble-label,
  .bubble-value {
    pointer-events: none;
  }
`

export const GraphWrp = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  text-transform: capitalize;
  & svg {
    height: 100%;
    width: 100%;
  }
  .line-bg-rect-group:hover line,
  .line-bg-rect-group:hover .hover-tooltip-rect,
  .line-bg-rect-group:hover .tooltip-label ,
  .line-bg-rect-group:hover .tooltip-color-legend,
  .line-bg-rect-group:hover .tooltip-sublabel{
    display: block !important;
  }

  .column-rect-group:hover {
    fill: rgba(195, 199, 217, 0.3);
  }
`
