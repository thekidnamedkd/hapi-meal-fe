import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'Inter';
        font-style: 'sans-serif';
        font-weight: 400;
        src: url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
        font-style: normal;
      }
      `}
  />
);

export default Fonts;
