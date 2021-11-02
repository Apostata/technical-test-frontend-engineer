import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Logo from "../Logo";
import Styles from "./Header.module.css";
export default function Header() {
  return (
    <header className={Styles.Header}>
      <Card className={Styles.Card}>
        <Container>
          <Row>
            <Col xs={3}>
              <Logo />
            </Col>
          </Row>
        </Container>
      </Card>
    </header>
  );
}
