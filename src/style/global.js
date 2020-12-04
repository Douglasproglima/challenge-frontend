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

  buttonLike {
    display: inline-block;
    height: 40px;
    padding: 0 40px;
    color: #ffffff;
    text-align: center;
    font-size: 11px;
    font-weight: 600;
    line-height: 38px;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
    text-decoration: none;
    white-space: nowrap;
    background-color: transparent;
    border-radius: 6px;
    border: 1px solid #f47b00;
    box-sizing: border-box;

  }

  .StytedButtonLike {
    font-family: "helvetica, arial, 'hiragino kaku gothic pro', meiryo, 'ms pgothic', sans-serif";
    font-size: 15px;
    display: inline-block;
    margin-top: 10px;
    margin-left: 15px;
    height: 40px;
    color: #000000;
    padding: 0 40px;
    text-align: center;
    font-size: 14px;
    font-weight: 600;
    line-height: 40px;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
    text-decoration: none;
    white-space: nowrap;
    border-radius: 6px;
    border: 1px solid #ffffff;
    background: #0A7A42;
    /* background: transparent; */
    box-sizing: border-box;
  }

`;
