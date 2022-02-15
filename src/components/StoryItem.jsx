import { render } from "@testing-library/react";
import React, { Fragment, useState, useEffect } from "react";
//API imports
import {
    ItemDetails,
} from "../utils/NewsUtils";
//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Alert, Card } from 'react-bootstrap';

export default function StoryItem(props) {

    const [toggleDetails, setToggleDetails] = useState(false);
    const [comments, setComments] =useState([]);

    const fetchComments = async function(comments) {
        console.log("KIDS", comments);
        let commentsDetails = await Promise.all(comments.map((commentId) => ItemDetails(commentId)));
        let toggle = !toggleDetails;
        setToggleDetails(toggle);
        setComments(commentsDetails);
    }

    return (
        <Fragment>
        <Card>
            <Card.Body>
                <Card.Title>
                    <h3>{props.title}</h3>
                </Card.Title>
                <Card.Text>
                    <label>{props.time} </label>
                    <p>
                        {props.text ? `text: ${props.text}`: "Url: "}<a href={props.url}>{props.url}</a>
                    </p>
                    <p>
                        <br />
                        <Button  onClick={() => fetchComments(props.kids)}> [{props.kids.length}] comments</Button>
                        <br />
                    </p>
                </Card.Text>
            </Card.Body>
        </Card>
        <Container fluid variant="success" id={`Comment-${props.key}`}>
            <Row>
        {
            toggleDetails &&
            comments.map((comment, index) => (
                <Col ms>
                    <Alert variant="primary">
                        <Fragment key={`${comment.title}-${index}`}>
                            <h3>{comment.title}</h3>
                            <h6> {comment.time} </h6>
                            <br/>
                            <label> 
                                <div id={`${comment.index}`} dangerouslySetInnerHTML={{ __html: `${comment.text}` }}></div>
                            </label>
                            <br />
                        </Fragment>
                    </Alert>
                </Col>
                ))
        } 
            </Row>
        </Container>
        </Fragment>          
    );
}