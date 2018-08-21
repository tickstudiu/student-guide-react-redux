import React, {Component} from 'react';
import {Media} from 'reactstrap';

class OverViewMedia extends Component {
    render() {
        const {mediaList} = this.props;

        return (
            <Media list className="border pt-3 px-0 rounded bg-white">

                {
                    mediaList.map((data, index) => {
                        return (
                            <Media tag="li" key={index} className="px-4 mb-4">
                                <Media left href="#">
                                    <img
                                        src="https://pbs.twimg.com/profile_images/378800000017423279/1a6d6f295da9f97bb576ff486ed81389_400x400.png"
                                        alt="image of title" style={{height: '64px', width: '64px'}}/>
                                </Media>

                                <Media body className="mx-5">
                                    <Media heading>
                                        <a href="" className="text-dark">{data.title}</a>
                                    </Media>
                                    <p className="text-muted m-0">{data.subTitle}</p>
                                </Media>

                                <Media right>
                                    <Media heading>
                                        <a href="" className="text-dark">View workshop Susan</a>
                                    </Media>
                                    <p className="text-muted m-0">9 May,20:10</p>
                                </Media>
                            </Media>
                        )
                    })
                }

            </Media>
        )
    }
}

export default OverViewMedia;