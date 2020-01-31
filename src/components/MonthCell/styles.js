import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: ${props => props.scale * 240}px;
  height: 100%x;
  background-color: #e4e4e4;
  flex-shrink: 0;
  border: ${props => props.scale * 1}px solid #737373;
  box-sizing: border-box;
  transition: all 1s ease-in;

  display: flex;
  flex-direction: column;

  .header {
    /* height: 50px; */
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
  }

  .wrap-month {
    display: flex;
    flex-direction: row;
    height: 100%;
    .month {
      width: ${props => props.scale * (props.sizeYear / 12)}px;
      height: 100%;
      border: ${props => props.scale * 1}px solid #ccc;
      box-sizing: border-box;
    }
  }
`;
