import {createGlobalStyle} from 'styled-components';
import {normalize} from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}
    body {
      font-family: ${props => props.theme.typography.fonts.body};
      -webkit-font-smoothing: antialiased;
    }
    img {
      max-width: 100%;
    }
  }
`;

export default GlobalStyle;
