import { render } from "@testing-library/react";
import React, { Fragment, useState, useEffect } from "react";
//API import
import {
    BestStoryQty,
    ItemDetails,
} from "../utils/NewsUtils";
import StoryItem from "./StoryItem";
//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col} from 'react-bootstrap';

export default function NewsAPI(props) {
    
    const [stories, setStories] = useState([]);
    const [details, setDetails] = useState([]);

    useEffect(async () => {

        let stories = await BestStoryQty(10); // get 10 stories
        let details = await Promise.all(stories.map((story) => ItemDetails(story)));
        console.log("DETAILS", details);
        setStories(stories);
        setDetails(details);

        return () => {
        };
    }, []);

    return (
        details.map((story, index) => (
            <Container fluid-ms>
                <Row md id={`StoryItem-${index}`}>
                    <Col>
                        <Fragment>
                            <StoryItem
                                key={index}
                                title={story.title}
                                time={story.time}
                                text={story.text}
                                kids={story.kidsSliced}
                                url={story.url}
                            />
                        </Fragment>
                    </Col>
                </Row>
            </Container>
        ))
    );
}