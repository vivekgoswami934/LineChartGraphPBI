import * as React from "react";
import * as ReactDOM from "react-dom";
import styled from "styled-components";
const PortalTooltip = (props) => {
  if (!props.isOpen) {
    return null;
  }
  return (
    <Container pos={props.pos} align={props.align} style={props?.style} vAlign={props.vAlign}>
      {props.children}
    </Container>
  );
};
export default PortalTooltip;


const Container : any  = styled.div`
  transform: ${(props:any) =>
    props.align === "left" ? "translateX(-100%)" : "translateX(0%)"};
  transform: ${(props : any) =>
    props.vAlign === "top" ? "translateY(-100%)" : "translateY(0%)"};
  position: absolute;
  left: ${(props : any) =>
    props.align === "left" ? props.pos.left - 25 : props.pos.left + 25}px;
  top: ${(props : any) =>
    props.vAlign === "top" ? props.pos.top - 25 : props.pos.top + 25}px;
  /* top: ${(props  :any) => props.pos.top || 0}px; */
  z-index: 1001;
  overflow: hidden;
  background: #ffffff;
  box-shadow: 0px 2.90418px 5.80835px rgba(88, 88, 88, 0.3);
  border-radius: 8.71253px;
  width: fit-content;
`;
