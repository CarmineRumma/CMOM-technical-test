// created by Carmine Rumma <carmine_rumma@epam.com> at 20220207 10:25.
// 
// 

import { Container, Segment } from "semantic-ui-react";

export default function Footer(){
    return (
        <Segment inverted vertical style={{ margin: '2em 0em 0em', padding: '2em 0em' }}>
            <Container>
                CMom - Cryptocurrency prices per cap. market
            </Container>
        </Segment>
    );
}