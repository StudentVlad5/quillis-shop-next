import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
  position: relative;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  font-family: -apple-system, BlinkMacSystemFont, 'Inter', 'Roboto', 'Poppins',
    'Manrope', 'Oswald', 'Montserrat', 'Bungee', 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
 text-align: left;
  background-color: white;
  }

  code {
  font-family: source-code-pro, 'Menlo', 'Monaco', 'Consolas', 'Courier New',
    monospace;
  }
  
  main {
    width: 90%;
    min-height: calc(100vh - 50px);
    display: flex;

  }
  #canvas_mouse{
    position: fixed;
    top:0;
    left:0;
    height: 100vh;
    width: 100vw;
  }

//-----reset-----//
h1, h2, h3, h4, h5, h6, p {
  padding: 0;
  margin: 0;
}

ul {
  padding: 0;
  margin: 0;
  list-style: none;
}

img {
  display:block;
  max-width: 100%;
  height: auto;
}

#root {
  width: 100%;
  @media screen and (min-width: 768px) {
    width: auto;
  }
}

.BaseContainer {
  display: flex;
  max-width: 300px;
  width: 100%;

  @media screen and (min-width: 768px) {
    max-width: 768px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1280px;
    width: 90%;
  }
}
`;
