import React from 'react'
import CourseRowComponentStateful from "./CourseRowComponentStateful";

const CourseTableComponent = ({editCourse, deleteCourse, courses, showEditor, saveCourse}) =>
    <div>
        {/*<h3>Course Table {courses.length}</h3>*/}
        <ul className="list-group">
            {
                courses.map(course =>

                    <CourseRowComponentStateful
                        courses={courses}
                        showEditor={showEditor}
                        editCourse={editCourse}
                        deleteCourse={deleteCourse}
                        saveCourse={saveCourse}
                        key={course._id}
                        course={course}/>

                )
            }
        </ul>
    </div>;

export default CourseTableComponent
