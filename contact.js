function validateNumber() {
    var number = document.getElementById("numberInput").value;
    var regex = /^\d{10}$/; 

    if (regex.test(number)) {
        alert("Phone number is valid. Check passed!");
    } else {
        alert("Invalid number! Please enter a 10-digit number.");
        
    }
}
