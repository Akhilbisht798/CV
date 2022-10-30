import React from "react";
import Genral from "./components/genral";
import Practical from "./components/practical";
import Education from "./components/education";
import CV from "./components/cv";
import "./Css/app.css"
import "./Css/form.css"
import "./Css/cv.css"

class App extends React.Component {
    constructor() {
        super();
        this.personal = { name: "Akhil", title: "Software Developer", phone: "888-888-888", email: "akhilbisht798@gmail.com", location: "Dehradun, India", about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." };
        this.education = [{
            course: "course",
            organisation: "organisation",
            start: "start date",
            end: "end date",
            description: "description"
        }];
        this.practical = [{
            company: "company",
            position: "position",
            start: "start date",
            end: "end date",
            description: "description"
        }];

        this.state = {
            personal: this.personal,
            education: this.education,
            practical: this.practical
        }
    }
    // -------------------------------
    changeGenral(e) {
        let item = e.target.id;
        this.personal[item] = e.target.value;
        this.setState({
            personal: this.personal,
        })
    }
    // ----------------------------------------
    addPrac() {
        let data = {
            company: "company",
            position: "position",
            start: "start date",
            end: "end date",
            description: "description"
        }
        this.practical.push(data);
        this.setState({
            practical: this.practical,
        })
    }

    changePra(e) {
        const index = e.target.dataset.index;
        const key = e.target.dataset.key;
        this.practical[index][key] = e.target.value;
        this.setState({
            practical: this.practical,
        })
    }

    removePrac(e) {
        const index = e.target.dataset.index;
        this.practical.splice(index, 1);
        this.setState({
            practical: this.practical,
        })
    }
    // ----------------------------------------
    addEdu() {
        let data = {
            course: "course",
            organisation: "organisation",
            start: "start date",
            end: "end date",
            description: "description"
        }
        this.education.push(data);
        this.setState({
            education: this.education,
        })
    }

    changeEdu(e) {
        const index = e.target.dataset.index;
        const key = e.target.dataset.key;
        this.education[index][key] = e.target.value;
        this.setState({
            education: this.education,
        })
    }

    removeEdu(e) {
        const index = e.target.index;
        this.education.splice(index, 1);
        this.setState({
            education: this.education,
        })
    }
    // ----------------------------------
    render() {
        return (
            <div id="wrapper">
                <div className="form-group">
                    <div className="form-inside">
                        <Genral changeGenral={this.changeGenral.bind(this)}
                            data={this.state.personal} />
                        <Practical data={this.state.practical}
                            changePra={this.changePra.bind(this)}
                            addPrac={this.addPrac.bind(this)}
                            deleteEntry={this.removePrac.bind(this)} />
                        <Education data={this.state.education}
                            addEdu={this.addEdu.bind(this)}
                            deleteEntry={this.removeEdu.bind(this)}
                            changeEdu={this.changeEdu.bind(this)} />
                    </div>

                </div>
                <div className="cv-output">
                    <div className="cv-inside">
                        <CV data={this.state} />

                    </div>
                </div>
            </div>
        )
    }
}

export default App;