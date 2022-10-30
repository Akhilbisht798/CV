import React from "react";

class Practical extends React.Component {

    render() {

        let ht = this.props.data.map((curr, index) => {
            return (<div className="form">

                <label htmlFor="company">
                    <input type="text" data-index={index} data-key="company"
                        onChange={this.props.changePra}
                        placeholder={curr.company} />
                </label>
                <label htmlFor="position">
                    <input type="text" data-index={index} data-key="position"
                        onChange={this.props.changePra}
                        placeholder={curr.position} />
                </label>
                <label htmlFor="start">
                    <input type="text" data-index={index} data-key="start"
                        onChange={this.props.changePra}
                        placeholder={curr.start} />
                </label>
                <label htmlFor="company">
                    <input type="text" data-index={index} data-key="end"
                        onChange={this.props.changePra}
                        placeholder={curr.end} />
                </label>
                <label htmlFor="company">
                    <textarea type="text" data-index={index} data-key="description"
                        onChange={this.props.changePra}
                        placeholder={curr.description} />
                </label>
                <button className="btn btn-danger" onClick={this.props.deleteEntry} data-index={index}>
                    Delete</button>
            </div>);
        })

        return (
            <div id="practical">
                {ht}
                <button className="btn btn-primary" onClick={this.props.addPrac}>Add</button>
            </div>
        );
    }
}

export default Practical;