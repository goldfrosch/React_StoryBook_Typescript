import styled from "styled-components";

interface LoadingProps {}
function Loading5({}: LoadingProps) {
  return (
    <BackgroundBlock>
      <div className="header">
        <DropBlock>
          <div className="milkDrop" />
          <div className="chocoDrop">
            {[...Array(4)].map((_, key) => (
              <div className="chocoChild" key={key} />
            ))}
          </div>
        </DropBlock>
      </div>

      <div className="background">
        <CupBlock>
          <div className="milk" />
        </CupBlock>
      </div>
    </BackgroundBlock>
  );
}

const DropBlock = styled.div`
  position: relative;
  & > .milkDrop {
    position: absolute;

    width: 0;
    height: 0;

    top: -10%;

    border-left: 12px solid transparent;
    border-right: 12px solid transparent;
    border-bottom: 32px solid white;

    border-radius: 4px 4px 16px 16px;

    animation: 0.5s linear 19 animateDrop;
  }
  & > .chocoDrop {
    position: absolute;
    width: 64px;
    height: 64px;

    top: -20%;

    padding: 8px;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 4px;

    background-color: #443532;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

    transform: rotate(36deg);

    animation: 1s linear animateDrop;
    animation-delay: 12s;

    & > .chocoChild {
      background-color: #332421;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
        rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    }
  }
  @keyframes animateDrop {
    0% {
      top: -20%;
    }
    100% {
      top: 200%;
    }
  }
`;

const CupBlock = styled.div`
  width: 180px;
  height: 240px;

  border: 8px solid #d9d9d9;
  border-top: none;

  border-radius: 0 0 16px 16px;

  display: flex;
  align-items: flex-end;

  z-index: 3;
  & > .milk {
    width: 100%;
    height: 90%;
    background-color: #a67b5b;

    border-radius: 0 0 8px 8px;

    animation-name: animateFillMilk, animateAddCoffeeOnMilk;
    animation-duration: 16.5s, 2s;
    animation-delay: 0s, 16.5s;
    animation-timing-function: ease-in-out, ease-in-out;
  }
  @keyframes animateAddCoffeeOnMilk {
    0% {
      background-color: white;
    }
    100% {
      background-color: #a67b5b;
    }
  }

  @keyframes animateFillMilk {
    0% {
      background-color: white;
      height: 0;
    }
    75%,
    100% {
      background-color: white;
      height: 90%;
    }
  }
`;

const BackgroundBlock = styled.div`
  width: 1080px;
  height: 720px;

  background-color: #1483fe;

  display: flex;
  flex-direction: column;

  overflow: hidden;

  margin: 64px 0;

  & > .header {
    width: 100%;
    flex: 1;

    display: flex;
    justify-content: center;
  }
  & > .background {
    width: 100%;

    display: flex;
    align-items: flex-end;
    justify-content: center;
  }
`;
export default Loading5;
