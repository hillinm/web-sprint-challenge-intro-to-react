import React from 'react';
import { Col, Card, CardFooter, CardBody, CardTitle, CardText } from 'reactstrap';

const CharacterCard = (props) => {
    return (
            <Col>
                <Card>
                    <CardBody>
                        <CardTitle>{props.name}</CardTitle>
                        <CardText>Height: {props.height}</CardText>
                        <CardText>Hair Color: {props.hair_color}</CardText>
                        <CardText>Eye Color: {props.eye_color}</CardText>
                        <CardText>Birth Year: {props.birth_year}</CardText>
                    </CardBody>
                    <CardFooter>Home World:  {props.homeworld}</CardFooter>
                </Card>
            </Col>
    )   
}

export default CharacterCard