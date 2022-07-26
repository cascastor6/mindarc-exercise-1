import { useMediaQuery } from "react-responsive";
import "./assets/Banner.css";
import desktopBackground from "./assets/desktop.png";
import mobileBackground from "./assets/mobile.png";

export default function Banner(props) {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  return (
    <div id="banner">
      <img src={isDesktopOrLaptop ? desktopBackground : mobileBackground} alt='banner' />
      <div id="banner-text">
        <h1>Hello {props.name}!</h1>
        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
      </div>
    </div>
  );
}
