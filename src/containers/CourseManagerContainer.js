import React from 'react'
import CourseTableComponent from "../components/CourseTableComponent";
import CourseGridComponent from "../components/CourseGridComponent";
import CourseService, {updateCourse} from "../services/CourseService";
import ModuleList from "../components/ModuleList";
import CourseEditorComponent from "../components/CourseEditorComponent";
import {createCourse, deleteCourse, findAllCourses} from "../services/CourseService";
import App from '../containers/../App.css'

class CourseManagerContainer extends React.Component {
    state = {
        layout: 'table',
        newCourseTitle: '',
        courses: [],
        showEditor: false
    };

    componentDidMount = async () => {
        const courses = await findAllCourses();
        this.setState({
            courses: courses
        })
        // courseService.findAllCourses()
        //     .then(courses => {
        //         this.setState({
        //             courses: courses
        //         })
        //     })
    };

    deleteCourse = async (deletedToCourse) => {
        console.log(deletedToCourse._id);
        const status = await deleteCourse(deletedToCourse._id);
        const courses = await findAllCourses();
        this.setState({
            courses: courses
        })
    };

    addCourse = async () => {
        const status = await createCourse({title : this.state.newCourseTitle});
        const courses = await findAllCourses();

        this.setState({
            courses: courses
        });
        console.log(courses)
    };

    saveCourse = async (courseId, savedCourse) => {
        const status = await updateCourse(courseId, savedCourse);
        console.log(status);
        const courses = await findAllCourses();
        this.setState({
            courses: courses
        })
    };

    toggle = () => {
        this.setState(prevState => ({
            layout: prevState.layout === 'grid' ? 'table': 'grid'
        }))
    };

    updateFormState = (event) => {
        this.setState({
            newCourseTitle: event.target.value
        })
    };

    editCourse = (course) => {
        this.setState(prevState => ({
            courses: prevState.courses.map(c => {
                c.editing = false;
                if(c._id === course._id) {
                    c.editing = true
                } else {
                    c.editing = false
                }
                return c
        })}))
    }

    showEditor = () => {
        this.setState({
            showEditor : true
        })
    }

    hideEditor = () => {
        this.setState({
            showEditor : false
        })
    };



    render() {

        return (
            <div className="container-fluid">
                <div>
                {
                    !this.state.showEditor &&
                        <div>
                            <div className={"row Top navbar navbar-expand-xl"}>
                                <div className={"col-1"}>
                                    <i className="fas fa-bars fa-2x"/>
                                </div>
                                <div className={"col-3 collapse navbar-collapse"}>
                                    <h1>Course Manager</h1>
                                </div>
                                <div className={"col-7"}>
                                    <input
                                        className="form-control"
                                        onChange={this.updateFormState}
                                        value={this.state.newCourseTitle}
                                        placeholder="New Course Title"/>
                                </div>
                                <div className={"col-1"}>
                                    <i onClick={this.addCourse} className="fas fa-plus-circle fa-2x"/>
                                </div>
                            </div>
                            <div>
                                <hr className={"Horizontal-Line"}/>
                            </div>
                            <div className={"row navbar"}>
                                <div className={"col-6 "}>
                                    <h6 >Title</h6>
                                </div>
                                <div className={"col-3 d-none d-md-block"}>
                                    <h6>Owned by</h6>
                                </div>
                                <div className={"col-2 d-none d-lg-block"}>
                                    <h6>Last modified</h6>
                                </div>
                                <div className={"col-1 "}>
                                    <i onClick={this.toggle}
                                    className={`fas ${this.state.layout === "table"? "fa-th" : "fa-list"} float-right `}/>
                                </div>
                            </div>
                        </div>
                }
                </div>
                <div>
                    {
                        this.state.showEditor &&
                        <CourseEditorComponent hideEditor={this.hideEditor}/>
                    }
                    {
                        !this.state.showEditor &&
                            <div>
                            {
                                this.state.layout === "grid" &&
                                <CourseGridComponent
                                    showEditor={this.showEditor}
                                    editCourse={this.editCourse}
                                    deleteCourse={this.deleteCourse}
                                    saveCourse={this.saveCourse}
                                    courses={this.state.courses}/>
                            }
                            {
                                this.state.layout === "table"  &&
                                <CourseTableComponent
                                    showEditor={this.showEditor}
                                    editCourse={this.editCourse}
                                    deleteCourse={this.deleteCourse}
                                    saveCourse={this.saveCourse}
                                    courses={this.state.courses}/>
                            }
                            </div>
                    }
                </div>
            </div>
        );
    }
}

export default CourseManagerContainer
