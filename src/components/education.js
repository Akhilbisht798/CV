import React from "react";

class Education extends React.Component {
    render() {

        let ht = this.props.data.map((curr, index) => {
            return (<div className="form">

                <label htmlFor="course">
                    <input type="text" data-index={index} data-key="course"
                        onChange={this.props.changeEdu}
                        placeholder={curr.course} />
                </label>
                <label htmlFor="organisation">
                    <input type="text" data-index={index} data-key="organisation"
                        onChange={this.props.changeEdu}
                        placeholder={curr.organisation} />
                </label>
                <label htmlFor="start">
                    <input type="text" data-index={index} data-key="start"
                        onChange={this.props.changeEdu}
                        placeholder={curr.start} />
                </label>
                <label htmlFor="end">
                    <input type="text" data-index={index} data-key="end"
                        onChange={this.props.changeEdu}
                        placeholder={curr.end} />
                </label>
                <label htmlFor="description">
                    <textarea type="text" data-index={index} data-key="description"
                        onChange={this.props.changeEdu}
                        placeholder={curr.description} />
                </label>
                <button className="btn btn-danger" onClick={this.props.deleteEntry} data-index={index}>
                    Delete</button>
            </div>);
        })

        return (
            <div id="education">
                <h4>Eduaction</h4>
                {ht}
                <button className="btn btn-primary" onClick={this.props.addEdu}>Add</button>
            </div>
        );
    }
}

export default Education;