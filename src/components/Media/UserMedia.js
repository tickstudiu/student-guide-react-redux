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
            highlight: this.props.highlight,
            like: false,
            follow: false,
            likeCount: '64',
            tourId: '1',
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

    handleSubmit = (e) =>{
        const { tourId } = this.state;
        const guideId = e.target.id;
        const tripId = e.target.value;
        let payload = {
            tripId: tripId,
            tourId: tourId,
            guideId: guideId,
        };
    };


    render() {
        const { id, name, year, languages, experience } = this.props.data;
        const { handleToggleLike, handleToggleFollow, handleSubmit } = this;
        const { highlight, like, follow, likeCount } = this.state;

        if (highlight){
            return (
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
                        <h5 className="text-white lead">{name} <small
                            className="text-white-50 text-uppercase">recommend</small></h5>

                        <p className="text-white">
                            <small>{experience}</small>
                        </p>

                        <ButtonGroup>
                            <Button size="sm" color={like ? 'danger' : 'secondary'} outline
                                    onClick={handleToggleLike}>{like ? 'Liked' : 'Like'}</Button>
                            <Button size="sm" color={follow ? 'primary' : 'secondary'} outline
                                    onClick={handleToggleFollow}>{follow ? 'Following' : 'Follow'}</Button>
                        </ButtonGroup>
                    </Media>

                    <Media right>
                        <Button color="dark" outline id={id} value="46521" onClick={(e) => handleSubmit(e)}>Send</Button>
                    </Media>
                </Media>
            )
        }
        else{
            return(
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
                            <small>{name} <span
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
                            <p className="m-0 lead">{languages}.</p>
                            <small className="text-muted "><FontAwesomeIcon icon="map-marked"/> Phuket, pa tong <span className="text-danger">{likeCount} Likes</span></small>
                        </div>

                        <div className="d-flex justify-content-between align-items-center">
                            <small>{experience}</small>
                            <Button size="sm" color="primary" id={id} value="46521" onClick={(e) => handleSubmit(e)}>Send</Button>
                        </div>
                    </Media>
                </Media>
            )
        }

    }
}

export default UserMedia;