import styled, { css } from "styled-components";

interface LoadingProps {}

function Loading1({}: LoadingProps) {
  return (
    <LoadingBlock>
      {[...Array(7)].map((_, key) => (
        <LoadingItemBlock type={key} gradiant="low" margin="low" key={key} />
      ))}
    </LoadingBlock>
  );
}

interface LoadingItemBlockProps {
  type: number;
  gradiant?: "low" | "high";
  margin?: "low" | "middle" | "high";
}
const LoadingItemBlock = styled.div<LoadingItemBlockProps>`
  width: 16px;
  height: 80px;
  margin: ${props =>
    "0 " +
    (props.margin === "high" ? 16 : props.margin === "middle" ? 8 : 4) +
    "px"};

  animation: 0.75s ease-in-out infinite alternate animateMoveVertical;
  animation-delay: ${props => props.type * 0.1 + "s"};

  ${props =>
    props.gradiant === "high"
      ? css`
          background-color: hsl(0, ${100 - props.type * 5 + "%"}, 50%);
        `
      : css`
          background-color: hsl(0, ${props.type * 5 + 60 + "%"}, 50%);
        `}

  @keyframes animateMoveVertical {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-75%);
    }
  }
`;

const LoadingBlock = styled.div`
  display: flex;
`;

export default Loading1;
