import { Button, Card } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import "./assets/Card.css";

export default function ArticleCard(props) {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  function responsiveButtonWidthClasses () {
    return isDesktopOrLaptop ? "rounded-pill button-text w-50" : "rounded-pill button-text w-75"
  }

  return (
    <Card
      style={{
        padding: "10px",
        margin: "10px",
        height: isDesktopOrLaptop ? "550px" : "auto",
      }}
    >
      <Card.Img variant="top" src={props.content[0]} />
      <Card.Body className="d-flex flex-column">
        <Card.Text>{props.content[1]}</Card.Text>
        <Button variant="article" className={responsiveButtonWidthClasses()}>
          Read More
        </Button>
      </Card.Body>
    </Card>
  );
}
