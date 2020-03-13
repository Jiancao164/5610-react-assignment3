import React from 'react'
import ModuleList from "./ModuleList";
import TopicPill from "./TopicPill";
import WidgetList from "./WidgetList";

const CourseEditorComponent = ({hideEditor}) =>
    <div className={"container-fluid"}>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark row">
            <a className="navbar-brand" href="#"><i onClick={hideEditor} className="fas fa-window-close"/></a>
            <div className={"col-3"}>
                <h1 className={"editor-title"}>CS5610-WEB</h1>
            </div>
            <div className="collapse navbar-collapse col-8" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#"><h3>Build</h3></a>
                    </li>
                    <li className="nav-item col-2">
                        <a className="nav-link" href="#"><h3>Pages</h3></a>
                    </li>
                    <li className="nav-item col-2">
                        <a className="nav-link" href="#"><h3>Theme</h3></a>
                    </li>
                    <li className="nav-item col-2">
                        <a className="nav-link" href="#"><h3>Store</h3></a>
                    </li>
                    <li className="nav-item col-2">
                        <a className="nav-link" href="#"><h3>App</h3></a>
                    </li>
                    <li className="nav-item col-2">
                        <a className="nav-link" href="#"><h3>Settings</h3></a>
                    </li>
                </ul>
            </div>
            <div className={"float-right col-1"}>
                <i className="fas fa-plus fa-2x"/>
            </div>
        </nav>
        <div className="row">
            <div className="col-3 left-tab">
                <ModuleList modules={[
                    {id: 12, title: "Course A"},
                    {id: 23, title: "Course B"},
                    {id: 34, title: "Course C"},
                    {id: 56, title: "Course D"},
                    {id: 78, title: "Course E"}
                ]}/>
            </div>
            <div className={"col-9"}>
                <div>
                    <TopicPill topics={[
                        {id: 12, title: "Topic 1"},
                        {id: 23, title: "Topic 2"},
                        {id: 34, title: "Topic 3"},
                        {id: 56, title: "Topic 4"},
                        {id: 78, title: "Topic 5"}
                    ]}/>
                </div>
                <div className={"row preview-section float-right"}>
                    <div><button >Save</button></div>
                    <div><h5>Preview</h5></div>
                    <div>
                        <a className="nav-link" href="#"><i className="fas fa-toggle-on fa-2x"/></a>
                    </div>
                </div>
                <div>
                    <WidgetList lessons={[
                        {_id:123, title: "Lesson 1"},
                        {_id:234, title: "Lesson 2"}
                    ]}/>
                </div>
            </div>
        </div>
    </div>

export default CourseEditorComponent