import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import "./Players.css";

function Players({value}) {
    return (
        <div>
            {value.map(player => (
                <Card className="cardStyle" key={player.id}>
                    <CardBody className="bodyStyle">
                        <CardTitle className="titleStyle">Player:<br/>{player.name}</CardTitle>
                        <CardSubtitle className="subtitleStyle">Country:<br/>{player.country}</CardSubtitle>
                        <CardSubtitle className="subtitleStyle">Searches:<br/>{player.searches}</CardSubtitle>
                    </CardBody>
                </Card>
            ))}
        </div>
    )
}

export default Players