import React, { useRef } from "react";
import { Form, Row, Col, Button, Card } from "react-bootstrap";
import Styles from "./SearchItem.module.css";

interface IsearchItem {
  setQuerySting: (queryString: string) => void;
  ativo: boolean;
}

export default function SearchItem({ setQuerySting, ativo }: IsearchItem) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <Form
      className={[Styles.SearchItem, ativo && Styles.ativo].join(" ")}
      onSubmit={(e) => {
        e.preventDefault();
        setQuerySting(inputRef.current?.value ?? "");
      }}
    >
      <Row>
        <Col>
          <Form.Group
            className={Styles.inputContainer}
            controlId="exampleForm.ControlInput1"
          >
            <Form.Control
              className={Styles.roundedInput}
              type="text"
              placeholder="Pesquisar Banda ou artista"
              ref={inputRef}
            />
            <Button
              className={Styles.roundedBututon}
              type="submit"
              variant="primary"
              onClick={(e) => {
                e.preventDefault();
                setQuerySting(inputRef.current?.value ?? "");
              }}
            >
              <i className="fa fa-search" aria-hidden="true"></i>
            </Button>
          </Form.Group>
        </Col>
      </Row>
    </Form>
  );
}
