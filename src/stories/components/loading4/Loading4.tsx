import styled from "styled-components";

interface LoadingProps {
  size?: "s" | "m" | "l";
  duration?: number;
}
function Loading4({ size, duration }: LoadingProps) {
  return (
    <LoadingBlock>
      <LoadingItemBlock size={size || "l"} duration={duration || 1} />
    </LoadingBlock>
  );
}

interface LoadingItemBlockProps {
  size: "s" | "m" | "l";
  duration: number;
}

const LoadingItemBlock = styled.div<LoadingItemBlockProps>`
  width: ${props => {
    switch (props.size) {
      case "s":
        return "32px";
      case "m":
        return "48px";
      case "l":
        return "64px";
      default:
        return "64px";
    }
  }};
  height: ${props => {
    switch (props.size) {
      case "s":
        return "32px";
      case "m":
        return "48px";
      case "l":
        return "64px";
      default:
        return "64px";
    }
  }};

  border: 4px solid #e9e9e9;
  border-top: 4px solid #1483fe;
  border-radius: 50%;

  animation: ${props => props.duration + "s linear infinite animateSpin"};

  @keyframes animateSpin {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const LoadingBlock = styled.div`
  display: flex;
`;

export default Loading4;
