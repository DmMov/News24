import { css } from 'styled-components';

import RobotoLight from 'assets/fonts/Roboto/Roboto-Light';
import RobotoRegular from 'assets/fonts/Roboto/Roboto-Regular';
import RobotoMedium from 'assets/fonts/Roboto/Roboto-Medium';
import RobotoBold from 'assets/fonts/Roboto/Roboto-Bold';
import RobotoBlack from 'assets/fonts/Roboto/Roboto-Black';

import IBMLight from 'assets/fonts/IBM_Plex_Serif/IBMPlexSerif-Light';
import IBMRegular from 'assets/fonts/IBM_Plex_Serif/IBMPlexSerif-Regular';
import IBMMedium from 'assets/fonts/IBM_Plex_Serif/IBMPlexSerif-Medium';
import IBMSemiBold from 'assets/fonts/IBM_Plex_Serif/IBMPlexSerif-SemiBold';
import IBMBold from 'assets/fonts/IBM_Plex_Serif/IBMPlexSerif-Bold';

export const enableFonts = css`
  @font-face {
    font-family: "Roboto";
    src: url(${RobotoLight}) format('truetype');
    font-weight: 300;
  }
  @font-face {
    font-family: "Roboto";
    src: url(${RobotoRegular}) format('truetype');
    font-weight: 400;
  }
  @font-face {
    font-family: "Roboto";
    src: url(${RobotoMedium}) format('truetype');
    font-weight: 500;
  }
  @font-face {
    font-family: "Roboto";
    src: url(${RobotoBold}) format('truetype');
    font-weight: 700;
  }
  @font-face {
    font-family: "Roboto";
    src: url(${RobotoBlack}) format('truetype');
    font-weight: 900;
  }
  @font-face {
    font-family: "IBM Plex Serif";
    src: url(${IBMLight}) format('truetype');
    font-weight: 300;
  }
  @font-face {
    font-family: "IBM Plex Serif";
    src: url(${IBMRegular}) format('truetype');
    font-weight: 400;
  }
  @font-face {
    font-family: "IBM Plex Serif";
    src: url(${IBMMedium}) format('truetype');
    font-weight: 500;
  }
  @font-face {
    font-family: "IBM Plex Serif";
    src: url(${IBMSemiBold}) format('truetype');
    font-weight: 600;
  }
  @font-face {
    font-family: "IBM Plex Serif";
    src: url(${IBMBold}) format('truetype');
    font-weight: 700;
  }
`;