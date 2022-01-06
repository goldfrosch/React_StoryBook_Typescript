import styled from "styled-components";

interface LoadingProps {}
function Loading4({}: LoadingProps) {
  return (
    <LoadingBlock>
      <LoadingItemBlock />
    </LoadingBlock>
  );
}

const LoadingItemBlock = styled.div`
  width: 64px;
  height: 64px;

  border: 4px solid #e9e9e9;
  border-top: 4px solid #1483fe;
  border-radius: 50%;

  animation: 1s linear infinite animateSpin;

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
