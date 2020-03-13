import React from "react";

class CourseRowComponentStateful extends React.Component {
    constructor(props) {
        super(props)
    }
    state = {
        active: false,
        course: this.props.course

    };
    editCourse = () => {
        this.setState(prevState => ({
            active: !prevState.active
        }))
    };

    updateForm = (event) => {
        this.setState({
            course: {
                ...this.props.course,
                title: event.target.value
            }
        })
    };

    render() {
        return(
            <li className={`list-group-item list-group-item-action ${this.state.active?'active':''}`}>
                <div className={"row"}>
                    <div className={"col-6"}>
                        {!this.state.active &&
                            <a onClick={this.props.showEditor} href={"#"}>
                                {this.props.course.title}</a>
                        }
                        {this.state.active && <input onChange={this.updateForm} value={this.state.course.title}/>
                        }
                    </div>
                    <div className={"col-3 d-none d-md-block"}>
                        Me
                    </div>
                    <div className={"col-2 d-none d-lg-block"}>
                        01/01/2020
                    </div>
                    <div className={"col-1"}>
                        {!this.state.active &&
                            <div className={"float-right"}>
                                <i onClick={() => this.editCourse()} className="fas fa-pen"/>
                                <i onClick={() => this.props.deleteCourse(this.props.course)} className="fas fa-trash"/>
                            </div>
                        }
                        {this.state.active &&
                            <div className={"float-right"}>
                                <i className="fas fa-check float-right"
                                   onClick={() => this.props.saveCourse(this.state.course._id, this.state.course) && this.editCourse()}/>
                            </div>
                        }
                    </div>
                </div>
            </li>
        )
    }
}
    
export default CourseRowComponentStateful
