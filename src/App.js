// Components
import Banner from "./component/banner/Banner";
import ArticleCard from "./component/card/Card";

//Bootstrap
import { Container, Col, Row } from "react-bootstrap";

// Data
import {cardList, username} from "./data/data";

//CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <>
      <Banner name={username} />
      <Container className="pt-3">
        <Row>
          {cardList.map((card) => <Col md={4} sm={12} className="pt-2">
            <ArticleCard content={card} />{" "}
          </Col>)}
        </Row>
      </Container>
    </>
  );
}

export default App;
