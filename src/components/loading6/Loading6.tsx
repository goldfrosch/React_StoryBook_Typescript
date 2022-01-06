import styled from "styled-components";

interface LoadingProps {}
function Loading6({}: LoadingProps) {
  return (
    <LoadingBlock>
      <div className="blank" />
    </LoadingBlock>
  );
}

const LoadingBlock = styled.div`
  width: 128px;
  height: 128px;

  background: conic-gradient(white 0% 80%, red 80% 100%);
  border-radius: 50%;
  border: 1px solid #e9e9e9;

  margin: 16px;

  display: flex;
  align-items: center;
  justify-content: center;

  animation: 5s linear test;

  @keyframes test {
    0% {
      background: conic-gradient(white 0% 90%, red 90% 100%);
    }
    100% {
      background: conic-gradient(white 0% 80%, red 80% 100%);
    }
  }

  & > .blank {
    width: 84px;
    height: 84px;

    background-color: white;
    border: 1px solid #e9e9e9;
    border-radius: 50%;
  }
`;

export default Loading6;
