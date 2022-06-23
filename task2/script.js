const validateForm = () => {
    const username = document.querySelector("#user");
    const comment = document.querySelector("#comments");
    const male = document.querySelector("#male");
    const female = document.querySelector("#female");

    if (username.value == "" || username.value == null) {
        alert("All fields are compulsory");
        username.focus();
    } else if (comment.value == "" || comment.value == null) {
        alert("All fields are compulsory");
        comment.focus();
    } else if (male.checked == false && female.checked == false) {
        alert("All fields are compulsory");
        male.focus();
    } else {
        alert("Form submitted successfully");
        document.querySelector("#myForm").reset();
    }
}