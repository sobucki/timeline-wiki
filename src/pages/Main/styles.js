import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: thistle;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .table {
    width: 100%;
    height: 100%;
    background-color: bisque;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    overflow: auto;
    position: relative;
  }

  .cell {
    position: relative;
    width: ${props => props.scale * 240}px;
    height: ${props => props.scale * 240}px;
    background-color: cornflowerblue;
    flex-shrink: 0;
    border: ${props => props.scale * 1}px solid #f00;
    box-sizing: border-box;
    transition: all 1s ease-in;
  }
  .zoom-buttons {
    button {
      width: 20px;
      height: 20px;
    }
  }
`;

export const Content = styled.div`
  position: absolute;
  left: ${props => props.start * 240 * props.scale}px;
  display: flex;
  align-items: center;
  top: ${props => (props.index + 1) * 80}px;
  background: cyan;
  width: ${props => props.scale * props.size * 240}px;
  height: 30px;
  z-index: 10;
  transition: all 1s ease-in;
  border-radius: 2px;
  box-shadow: 5px 5px 10px 2px rgba(0, 0, 0, 0.25);

  span {
    padding-left: 10px;
  }
`;
