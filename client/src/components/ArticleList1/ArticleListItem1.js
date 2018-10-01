import React from "react";
import { Container, Row, Col } from "../Grid";
import "./article.css";

// ArticleListItem renders a bootstrap list item containing data from the article api call
export const ArticleListItem1 = props => (
  <li className="list-group-item">
    <Container>
      <Row>
        <Col size="xs-8 sm-9">
          <h3>{props.title}</h3>
          <p>
            Summary: {props.summary}
          </p>
          <a
            rel="noreferrer noopener"
            target="_blank"
            href={props.href}
          >
            Go to article!
          </a> <button 
          className="save-button"
          onClick={props.handleOnClick}
          >
          Save This Article
          </button>
        </Col>
      </Row>
    </Container>
  </li>
);
