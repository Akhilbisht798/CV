import React from "react";
import "../Css/genral.css"

class Genral extends React.Component {

    render() {
        return (
            <div id="genral">
                <label htmlFor="name">
                    <input type="text" id="name" onChange={this.props.changeGenral}
                        value={this.props.data.name} required />
                </label>
                <label htmlFor="title">
                    <input type="text" id="title" onChange={this.props.changeGenral}
                        value={this.props.data.title} required />
                </label>
                <label htmlFor="phone">
                    <input type="text" id="phone" onChange={this.props.changeGenral}
                        value={this.props.data.phone} required />
                </label>
                <label htmlFor="email">
                    <input type="email" id="email" onChange={this.props.changeGenral}
                        value={this.props.data.email} required />
                </label>
                <label htmlFor="location">
                    <input type="text" id="location" onChange={this.props.changeGenral}
                        value={this.props.data.location} required />
                </label>
                <label htmlFor="about">
                    <textarea type="text" id="about" onChange={this.props.changeGenral}
                        value={this.props.data.about} />
                </label>
            </div>
        );
    }
}

export default Genral;