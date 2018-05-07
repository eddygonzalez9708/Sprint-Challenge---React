import React from 'react';
import {Card, CardTitle, CardText, CardBody} from 'reactstrap'; 
import './CharCard.css'; 
const CharCard = ({ char }) => {
    return (
        <Card className="Card-Wrapper">
            <CardTitle>{char.name}</CardTitle> 
            <CardBody> 
                <CardText>{char.height}</CardText> 
                <CardText>{char.eye_color}</CardText> 
                <CardText></CardText> 
            </CardBody>  
        </Card>
    ); 
}; 

export default CharCard; 