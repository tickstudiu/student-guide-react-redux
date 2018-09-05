import React, {Component} from 'react';
import {Media, Card, CardTitle, CardText, CardImg, CardImgOverlay} from 'reactstrap';
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSignInAlt} from '@fortawesome/free-solid-svg-icons'

library.add(faSignInAlt);

class RegisterForm extends Component {
    render() {

        return (
            <Media>
                <Media left>
                    <Card inverse className="border-0">
                        <CardImg
                            src="https://media.licdn.com/media-proxy/ext?w=800&h=800&hash=qzXixMBEHcySQF0cga8JlV0jdM4%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta5g-0R6jnhodx1Ey9KGTqAGj6E5DQJHUA3L0CHH05IbfPWi4e5LfLeChokAQfi4AjQAwf-e1EjfiE47tfoPpfo8j2sa3IZD5aRUPbhU4hGUB5sE-Pg"
                            alt="image cap" className="rounded-0 img-fluid"/>
                        <CardImgOverlay style={{background: 'rgba(0,0,0,0.65)'}}>
                            <CardTitle className="text-center display-4" style={{marginTop: '10%'}}>What's
                                up</CardTitle>
                            <CardText className="text-center lead">How are you doing ?</CardText>
                            <CardText style={{marginTop: '30%'}}>Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                                eu.</CardText>
                        </CardImgOverlay>
                    </Card>
                </Media>

                <Media body className="bg-white">
                    right (body).
                </Media>
            </Media>
        )
    }
}

export default RegisterForm;