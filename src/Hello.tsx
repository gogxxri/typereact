import React from "react";
// import styled from "@emotion/styled";
interface Props {
  name: string;
  color?: string; // 옵셔널 프롭스 : ?를 붙이면 없어도 에러 안 남
}

// interface ContainerProps {
//   color?: string;
// }
// const Container = styled.div<ContainerProps>`
//   color: ${(props) => props.color};
// `;

// export const Hello = ({ name, color = "blue" }: Props) => {
//   return <Container style={{ color }}>HELLO {name}</Container>;
// };

export const Hello = ({ name, color = "blue" }: Props) => {
  return <div style={{ color }}>HELLO {name}</div>;
};
