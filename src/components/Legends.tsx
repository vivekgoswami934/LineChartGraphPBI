import * as React from "react";

import styled from "styled-components";

const Legends = ({ labels }) => {
  console.log(labels);
  return (
    <Wrapper>
      {labels?.map((el) => {
        return (
          <LegenedWrapper>
            <SquareColor color={el?.color} />
            <Text> {el?.label} </Text>
          </LegenedWrapper>
        );
      })}
    </Wrapper>
  );
};

export default Legends;

const Wrapper = styled.div`
  display: flex;
  gap: 1rem;
`;
const SquareColor = styled.div`
  height: 1rem;
  width: 1rem;
  background-color: ${({ color }) => color};
  border-radius: 0.2rem;
`;

const LegenedWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

const Text = styled.div`
  line-height: 1rem;
`;
