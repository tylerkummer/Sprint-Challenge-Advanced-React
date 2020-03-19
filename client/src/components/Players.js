import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import "./Players.css";

class Players extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        const {value} = this.props;
        return (
            <div>
                {value.map(player => (
                    <Card className="cardStyle" key={player.id} data-testid={player.id}>
                        <CardBody className="bodyStyle">
                            <CardTitle className="titleStyle" data-testid={player.name}>Player:<br />{player.name}</CardTitle>
                            <CardSubtitle className="subtitleStyle" data-testid={player.country}>Country:<br />{player.country}</CardSubtitle>
                            <CardSubtitle className="subtitleStyle" data-testid={player.searches}>Searches:<br />{player.searches}</CardSubtitle>
                        </CardBody>
                    </Card>
                ))}
            </div>
        )
    }

}

export default Players