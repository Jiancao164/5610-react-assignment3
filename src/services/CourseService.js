export const createCourse = async (course) => {
		let response = await fetch("https://wbdv-generic-server.herokuapp.com/api/001358744/courses", {
			method: 'POST',
			body: JSON.stringify(course),
			headers: {
				'content-type': 'application/json'
			}
		});
		return await response.json();
	};
export const updateCourse = async (courseId, course) => {
		let response = await fetch(`https://wbdv-generic-server.herokuapp.com/api/001358744/courses/${courseId}`, {
			method: 'PUT',
			body: JSON.stringify(course),
			headers: {
				'content-type': 'application/json'
			}
		});
		return await response.json();
	};
export const findAllCourses = async () => {
		let response = await fetch("https://wbdv-generic-server.herokuapp.com/api/001358744/courses");
		return await response.json();
	};
export const findCourseById = async (courseId) => {
		let response = await fetch(`https://wbdv-generic-server.herokuapp.com/api/001358744/courses/${courseId}`)
		return await response.json();
	};
export const deleteCourse = async (courseId) => {
		let response = await fetch(`https://wbdv-generic-server.herokuapp.com/api/001358744/courses/${courseId}`, {
			method: 'DELETE'
		});
		return await response.json();
	};

