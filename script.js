
let pointment = document.getElementById("book-appointment").onclick = function () {

    let skin = document.getElementById("skin").checked;
    let neuro = document.getElementById("neuro").checked;
    let ortho = document.getElementById("ortho").checked;






    if (skin === true) {
        document.getElementById("selected-doctor-name").innerHTML = "Skin Specialist And is Availiable"


    } else if (neuro === true) {
        document.getElementById("selected-doctor-name").innerHTML = "Neuro Specialist And is Availiable "

    } else if (ortho === true) {
        document.getElementById("selected-doctor-name").innerHTML = "Ortho Specialist And is Availiable "

    } else {
        document.getElementById("message").innerHTML = "Please Select Your Doctor";
        document.getElementById("message").style.color = "red";
    }






    if (skin === true || neuro === true || ortho === true) {
        // [0] targets the specific individual element in the collection
        document.getElementsByClassName("doctor")[0].style.display = "none";
        document.getElementsByClassName("appointment-card")[0].style.display = "block";


    } else {

        document.getElementById("message").innerHTML = "Please Select Your Doctor";
        document.getElementById("message").style.color = "red";
    }


    // Confirmation
    let confirm = document.getElementsByClassName("submit-btn")[0].onclick = function () {

        let PatientNameValue = document.getElementById("patient-name").value.trim();
        let PatientNumberValue = document.getElementById("patient-phone").value.trim();
        let statusMsg = document.getElementsByClassName("status-message")[0];


        if (!PatientNameValue) {
            statusMsg.innerHTML = "Please Entre Patient Name";
            statusMsg.style.color = "red";

        } else if (!PatientNumberValue) {
            statusMsg.innerHTML = "Please Entre number"
            statusMsg.style.color = "red"

        } else if (PatientNameValue && PatientNumberValue) {

            statusMsg.innerHTML = "Appointment was booked";

            document.getElementsByClassName("appointment-card")[0].style.display = "none";
            document.getElementsByClassName("confirmation-view")[0].style.display = "block";
        } else {
            statusMsg.innerHTML = "Please Select Your Doctor";
            statusMsg.style.color = "red";

        }



    }

}



