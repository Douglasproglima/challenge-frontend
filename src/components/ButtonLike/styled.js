import styled from 'styled-components';

const StytedButtonLike = styled.button`
    font-family: "helvetica, arial, 'hiragino kaku gothic pro', meiryo, 'ms pgothic', sans-serif";
    font-size: 15px;
    display: inline-block;
    margin-top: 10px;
    margin-left: 40px;
    height: 40px;
    color: #000000;
    padding: 0 20px;
    text-align: center;
    font-size: 14px;
    font-weight: 600;
    line-height: 40px;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
    text-decoration: none;
    white-space: nowrap;
    border-radius: 6px;
    border: 1px solid #0A7A42;
    background: #255fd8;
    /* background: transparent; */
    box-sizing: border-box;

  .StytedButtonLike:hover {
    background: #5182e6;
    background-position: right center;
  }

  .span-text-like {
    color: #ffffff;
    text-align: center;
    margin-right: 5px;
  }

  svg {
    margin-right: 10px;
  }
`;

export default StytedButtonLike;
