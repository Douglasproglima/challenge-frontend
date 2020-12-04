import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:400&display=swap');
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root  {
    min-height: 100%;
  }

  body {
    background: #000000d1;
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button {
    color: #f47b00;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
  }

  button {
    cursor: pointer;
  }

  .StytedButtonLike {
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
  }

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
