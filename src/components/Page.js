import React, { PropTypes, Component } from 'react'

export default class Page extends Component {
    render() {
        const { year, photo } = this.props;

        return <div>
            <p>У тебя { photo.length } фото за { year } год</p>
        </div>
    }
}

Page.PropTypes = {
    year: PropTypes.string.isRequired,
    photo: PropTypes.array.isRequired
};