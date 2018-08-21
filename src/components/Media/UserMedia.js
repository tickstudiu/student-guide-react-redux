import React, {Component} from 'react';
import {Media, Button, ButtonGroup} from 'reactstrap';
import Background from '../../assets/images/dark-smoke-background.jpg';
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMapMarked} from '@fortawesome/free-solid-svg-icons'

library.add(faMapMarked);

class UserMedia extends Component {
    constructor(props) {
        super(props);
        this.state = {
            like: false,
            follow: false
        }
    }

    handleToggleLike = () => {
        this.setState({
            like: !this.state.like
        })
    };

    handleToggleFollow = () => {
        this.setState({
            follow: !this.state.follow
        })
    };


    render() {
        const {handleToggleLike, handleToggleFollow} = this;
        const {active, like, follow} = this.state;

        console.log(active);
        return (
            <div>
                <Media className="align-items-center rounded pr-4 mb-3" style={{
                    backgroundImage: `url(${Background})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}>
                    <Media left href="#" className="pr-4">
                        <img
                            src="https://d1jiktx90t87hr.cloudfront.net/223/wp-content/uploads/2016/09/michelle-prince-profile-img.png"
                            alt="image of title" style={{height: '194x', width: '194px'}}
                            className="rounded-left"
                        />
                    </Media>
                    <Media body>
                        <h5 className="text-white lead">Wanchalerm Suksawat <small
                            className="text-white-50 text-uppercase">recommend</small></h5>

                        <p className="text-white">
                            <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor aliqua...
                            </small>
                        </p>

                        <ButtonGroup>
                            <Button size="sm" color={like ? 'danger' : 'secondary'} outline
                                    onClick={handleToggleLike}>{like ? 'Liked' : 'Like'}</Button>
                            <Button size="sm" color={follow ? 'primary' : 'secondary'} outline
                                    onClick={handleToggleFollow}>{follow ? 'Following' : 'Follow'}</Button>
                        </ButtonGroup>
                    </Media>

                    <Media right>
                        <Button size="sm" color="primary">Sand</Button>
                    </Media>
                </Media>
                <Media className="align-items-center p-3 border rounded mb-3 bg-white">
                    <Media left href="#" className="px-5">
                        <img
                            src="https://d1jiktx90t87hr.cloudfront.net/223/wp-content/uploads/2016/09/michelle-prince-profile-img.png"
                            alt="image of title" style={{height: '64px', width: '64px'}}
                            className="rounded-circle"
                        />
                    </Media>

                    <Media body>
                        <div className="d-flex justify-content-between align-items-center">
                            <small>Wanchalerm Suksawat <span
                                className="text-dark text-uppercase text-black-50">recommend</span>
                            </small>
                            <ButtonGroup>
                                <Button size="sm" color={like ? 'danger' : 'secondary'} outline
                                        onClick={handleToggleLike}>{like ? 'Liked' : 'Like'}</Button>
                                <Button size="sm" color={follow ? 'primary' : 'secondary'} outline
                                        onClick={handleToggleFollow}>{follow ? 'Following' : 'Follow'}</Button>
                            </ButtonGroup>
                        </div>

                        <div className="my-3">
                            <p className="m-0 lead">asdfasdf</p>
                            <small className="text-muted "><FontAwesomeIcon icon="map-marked"/> Phuket, pa tong</small>
                        </div>

                        <div className="d-flex justify-content-between align-items-center">
                            <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor aliqua...
                            </small>
                            <Button size="sm" color="primary">Sand</Button>
                        </div>
                    </Media>
                </Media>
            </div>
        )
    }
}

export default UserMedia;