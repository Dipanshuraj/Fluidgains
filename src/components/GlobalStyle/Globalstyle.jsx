import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle `
*{
margin : 0;
padding : 0; 
box-sizing : border-box ;
font-family : font-family: 'Major Mono Display', monospace;

}

html{
font-size: 62.5%;
overflow-x: hidden;
}
body {
  background: #E8CBC0;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #636FA4, #E8CBC0);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #636FA4, #E8CBC0); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  

      overflow-x: hidden;
      scrollbar-color: rgb(98 84 243);
      scrollbar-width: thin;
  }
    
  
  h1{
    color:${({ theme }) => theme.colors.heading};
    font-size: 6rem;
    font-weight: 900;
  }
  
  h2 {
     color: ${({ theme }) => theme.colors.heading};
     font-size: 4.4rem;
     font-weight: 300;
     white-space: normal;
     text-align: center;
    }
  
    h3 {
    font-size: 1.8rem;
    font-weight: 400;
  }
  
  p {
    color: ${({ theme }) => theme.colors.text};
    opacity: .7;
    font-size: 1.65rem;
    line-height: 1.5;
    margin-top: 1rem;
    font-weight:400;
  }
  
  a {
    text-decoration: none;
  }
  
  li {
    list-style: none;
  }
  
  .container {
    max-width: 120rem;
    margin: 0 auto;
  }


`;
