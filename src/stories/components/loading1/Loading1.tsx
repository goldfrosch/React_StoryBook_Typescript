import styled, { css } from "styled-components";

interface LoadingProps {
  maxNum?: number;
  gradiant?: "low" | "high";
  margin?: "low" | "middle" | "high";
}

function Loading1({ maxNum, gradiant, margin }: LoadingProps) {
  return (
    <LoadingBlock>
      {[...Array(maxNum || 7)].map((_, key) => (
        <LoadingItemBlock
          type={key}
          gradiant={gradiant || "low"}
          margin={margin || "low"}
          key={key}
        />
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
      transform: translateY(-70%);
    }
  }
`;

const LoadingBlock = styled.div`
  display: flex;
`;

export default Loading1;
