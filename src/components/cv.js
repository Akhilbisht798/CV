import React from "react";
import phone from "../img/viber.png"
import Email from "../img/email.png"
import Location from "../img/location.png"

class CV extends React.Component {
    constructor(props) {
        super(props)
        this.genral = props.data.personal;
        this.practical = props.data.practical;
        this.education = props.data.education;
    }

    practicalUI(curr) {
        return <div className="cv-edu-pra">
            <div>
                <p>{curr.position} </p>
            </div>
            <div>
                <span className="company-Name-cv">{curr.company} </span>
                <span>{curr.start}-{curr.end}</span>
            </div>
            <p>{curr.description}</p>
        </div>
    }

    educationUI(curr) {
        return <div className="cv-edu-pra">
            <div>
                <p>{curr.course}</p>
            </div>
            <div>
                <span className="company-Name-cv">{curr.organisation} </span>
                <span>{curr.start}-{curr.end}</span>
            </div>
        </div>
    }

    render() {
        return (
            <div id="cv">
                <header id="cv-header">
                    <div>
                        <h1 className="cv-personal-name">{this.genral.name}</h1>
                        <p>{this.genral.title}</p>
                    </div>
                    <div>
                        <div className="details-logo-container">
                            <img src={phone} className="details-logo" />
                            <p className="cv-personal-details">{this.genral.phone}</p>
                        </div>
                        <div className="details-logo-container">
                            <img src={Email} className="details-logo" />
                            <p className="cv-personal-details">{this.genral.email}</p>
                        </div>
                        <div className="details-logo-container">
                            <img src={Location} className="details-logo" />
                            <p className="cv-personal-details">{this.genral.location}</p>
                        </div>
                    </div>
                </header>
                <p>{this.genral.about}</p>
                <div className="cv-ui-container">
                    <h4>Practical</h4>
                    {this.practical.map(this.practicalUI)}
                </div>
                <div className="cv-ui-container">
                    <h4>Education</h4>
                    {this.education.map(this.educationUI)}
                </div>

            </div>
        )
    }
}

export default CV;