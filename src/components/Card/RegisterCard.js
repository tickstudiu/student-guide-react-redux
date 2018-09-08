import React, {Component} from 'react';
import {CardBody, CardTitle, CardText, Card} from 'reactstrap';
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSignInAlt} from '@fortawesome/free-solid-svg-icons'

library.add(faSignInAlt);

class RegisterCard extends Component {
    render() {

        return (
            <Card inverse className="rounded-0 h-100" style={{
                backgroundImage: 'url(https://media.licdn.com/media-proxy/ext?w=800&h=800&hash=qzXixMBEHcySQF0cga8JlV0jdM4%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta5g-0R6jnhodx1Ey9KGTqAGj6E5DQJHUA3L0CHH05IbfPWi4e5LfLeChokAQfi4AjQAwf-e1EjfiE47tfoPpfo8j2sa3IZD5aRUPbhU4hGUB5sE-Pg',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>
                <CardBody style={{background: 'rgba(0,0,0,0.65)'}} className="h-100">
                    <CardTitle className="text-center display-4">What's up</CardTitle>
                    <CardText className="text-center lead">How are you doing ?</CardText>
                    <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                        eu.
                    </CardText>
                </CardBody>
            </Card>
        )
    }
}

export default RegisterCard;