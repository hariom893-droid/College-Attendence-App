function login(event) {

    event.preventDefault();

    let username =
        document.getElementById("username").value;

    let password =
        document.getElementById("password").value;

    let role =
        document.getElementById("role").value;


    if (username === "" || password === "") {

        alert("Please enter username and password");

        return;

    }


    if (role === "student") {

        window.location.href = "student.html";

    }

    else if (role === "teacher") {

        window.location.href = "teacher.html";

    }

    else if (role === "admin") {

        window.location.href = "admin.html";

    }

}


function logout() {

    window.location.href = "index.html";

}


function submitAttendance() {

    alert(
        "Attendance submitted successfully! ✅"
    );

}


function addStudent() {

    alert(
        "Add Student feature will be added soon."
    );

}


function addTeacher() {

    alert(
        "Add Teacher feature will be added soon."
    );

}


function viewReport() {

    alert(
        "Attendance Report feature will be added soon."
    );

}