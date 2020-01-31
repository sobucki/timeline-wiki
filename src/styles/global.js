import { createGlobalStyle } from 'styled-components';

// import BackgroundImage from '~/assets/images/background_login.jpg';

export default createGlobalStyle`
  * {
    margin:0;
    padding:0;
    outline:0;
    box-sizing:border-box;
    font-family: "Open Sans", sans-serif;
  }

  html, body, #root{
    @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,500,700&display=swap');
    @import url('https://fonts.googleapis.com/css?family=Poppins:300,400,500,700&display=swap');
    height:100%;
    width:100%;
    background:#eff3f6;

    /* text-rendering: optimizeLegibility !important; */
  /* -webkit-font-smoothing: antialiased !important; */
  }


`;
