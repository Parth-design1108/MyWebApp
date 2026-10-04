function validateForm() {

    let name =
        document.getElementById("name").value;

    let email =
        document.getElementById("email").value;

    let mobile =
        document.getElementById("mobile").value;

    let namePattern =
        /^[A-Za-z ]+$/;

    let emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let mobilePattern =
        /^[0-9]{10}$/;

    if (name == "") {
        alert("Enter your name");
        return false;
    }

    if (!namePattern.test(name)) {
        alert("Name should contain only letters");
        return false;
    }

    if (!emailPattern.test(email)) {
        alert("Enter valid email");
        return false;
    }

    if (!mobilePattern.test(mobile)) {
        alert("Enter valid mobile number");
        return false;
    }

    document.getElementById("message").innerHTML =
        "Form Submitted Successfully";

    return false;
}