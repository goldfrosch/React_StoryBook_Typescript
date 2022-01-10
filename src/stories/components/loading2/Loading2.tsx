import styled from "styled-components";

interface LoadingProps {
  maxNum?: number;
}
function Loading2({ maxNum }: LoadingProps) {
  return (
    <LoadingBlock>
      {[...Array(maxNum || 7)].map((_, key) => (
        <LoadingItemBlock type={key} key={key} />
      ))}
    </LoadingBlock>
  );
}

interface LoadingItemBlockProps {
  type: number;
}

const LoadingItemBlock = styled.div<LoadingItemBlockProps>`
  width: 16px;
  height: 80px;

  border-radius: 4px;
  margin: 0 4px;

  animation: 1s ease-in-out infinite animateScaleY;
  animation-delay: ${props => props.type * 0.1 + "s"};

  @keyframes animateScaleY {
    0% {
      transform: scaleY(0.1);
      background-color: yellow;
    }
    20% {
      transform: scaleY(1);
    }
    25% {
      background-color: red;
    }
    40% {
      transform: scaleY(0.1);
    }
    50% {
      transform: scaleY(0.1);
      background-color: purple;
    }
    75% {
      transform: scaleY(0.1);
      background-color: blue;
    }
    100% {
      transform: scaleY(0.1);
      background-color: green;
    }
  }
`;

const LoadingBlock = styled.div`
  display: flex;
`;

export default Loading2;
