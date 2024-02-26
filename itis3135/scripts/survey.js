function addCourse() {
    const courseWrapper = document.createElement('div');
    courseWrapper.classList.add('course');

    const titleInput = document.createElement('input');
    titleInput.setAttribute('type', 'text');
    titleInput.setAttribute('placeholder', 'Course Title');
    titleInput.classList.add('courseTitle');
    titleInput.required = true;

    const descriptionInput = document.createElement('input');
    descriptionInput.setAttribute('type', 'text');
    descriptionInput.setAttribute('placeholder', 'Course Description');
    descriptionInput.classList.add('courseDescription');
    descriptionInput.required = true;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('deleteCourseBtn');
    deleteBtn.addEventListener('click', function() {
        courseWrapper.remove();
    });

    courseWrapper.appendChild(titleInput);
    courseWrapper.appendChild(descriptionInput);
    courseWrapper.appendChild(deleteBtn);

    document.getElementById('courses').appendChild(courseWrapper);
}

document.getElementById('addCourseBtn').addEventListener('click', addCourse);

document.addEventListener('click', function(event) {
    if (event.target.classList.contains('deleteCourseBtn')) {
        event.target.parentElement.remove();
    }
});