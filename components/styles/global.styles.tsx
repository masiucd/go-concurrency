import {css, Global} from "@emotion/react"
// font-family: 'Jost', sans-serif;
const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        :root {
          /* fonts */
          --jost: "'Jost' , sans-serif";
          --oswald: "'Oswald', sans-serif";

          /* colors */
          --bg: #252932;
          --bg-2: #191c21;
          --text: #fff;
          --primary: #f56f6c;
          --highlight: #195962;

          --bg-900: #313642;
          --bg-800: #3d4452;
          --bg-700: #495163;
          --bg-600: #555e73;
          --bg-500: #616b83;
          --bg-400: #6d7993;
          --bg-300: #7d889f;
          --bg-200: #8e97ab;
          --bg-100: #9ea6b7;

          /* elevations */
          --sm-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
          --shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
          --md-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          --lg-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
          --xl-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
          --xxl-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          --inner-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);
          --none-shadow: 0 0 #0000;
        }
      `}
    />
  )
}

export default GlobalStyles
