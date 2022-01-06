import styled from "styled-components";

interface LoadingProps {}
function Loading3({}: LoadingProps) {
  return (
    <LoadingBlock>
      {[...Array(5)].map((_, key) => (
        <LoadingBlock key={key}>
          <LoadingItemBlockLeft></LoadingItemBlockLeft>
          <LoadingItemBlockRight></LoadingItemBlockRight>
        </LoadingBlock>
      ))}
    </LoadingBlock>
  );
}

const LoadingItemBlockLeft = styled.div`
  width: 16px;
  border-bottom: 4px solid black;
  border-radius: 40%;
  animation: 1s ease-in-out infinite animateRotateShakeLeft;

  @keyframes animateRotateShakeLeft {
    0%,
    50%,
    100% {
      transform: rotate(0);
    }
    25% {
      transform: rotate(30deg);
    }
    75% {
      transform: rotate(-30deg);
    }
  }
`;
const LoadingItemBlockRight = styled.div`
  width: 16px;
  border-bottom: 4px solid black;
  border-radius: 40%;
  animation: 1s ease-in-out infinite animateRotateShakeRight;

  @keyframes animateRotateShakeRight {
    0%,
    50%,
    100% {
      transform: rotate(0);
    }
    25% {
      transform: rotate(-30deg);
    }
    75% {
      transform: rotate(30deg);
    }
  }
`;

const LoadingBlock = styled.div`
  display: flex;
`;

export default Loading3;
