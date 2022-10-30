import React from "react";

class CV extends React.Component {
    constructor(props) {
        super(props)
        this.genral = props.data.personal;
        this.practical = props.data.practical;
        this.education = props.data.education;
    }

    practicalUI(curr) {
        return <div>
            <p>{curr.company}</p>
            <p>{curr.position} </p>
            <p>{curr.start} </p>
            <p>{curr.end} </p>
            <p>{curr.description}</p>
        </div>
    }

    educationUI(curr) {
        return <div>
            <p>{curr.course}</p>
            <p>{curr.organisation} </p>
            <p>{curr.start} </p>
            <p>{curr.end} </p>
            <p>{curr.description}</p>
        </div>
    }

    render() {
        return (
            <div id="cv">
                <header id="cv-header">
                    <div>
                        <h3>{this.genral.name}</h3>
                        <p>{this.genral.title}</p>
                    </div>
                    <div>
                        <p>{this.genral.phone}</p>
                        <p>{this.genral.email}</p>
                        <p>{this.genral.location}</p>
                    </div>
                </header>
                <p>{this.genral.about}</p>
                {this.practical.map(this.practicalUI)}
                {this.education.map(this.educationUI)}

            </div>
        )
    }
}

export default CV;