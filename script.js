document.addEventListener("DOMContentLoaded", function() {
    const searchBtn = document.querySelector(".search-btn");
    searchBtn.addEventListener("click", function() {
        // Get user inputs
        const serviceType = document.querySelector(".input-group select").value;
        const appointmentDate = document.querySelector(".input-group input[type='date']").value;
        const timeSlot = document.querySelectorAll(".input-group select")[1].value;
        
        // Validate input fields
        if (serviceType === "Select a service") {
            alert("Please select a service type.");
            return;
        }
        if (!appointmentDate) {
            alert("Please select an appointment date.");
            return;
        }
        if (timeSlot === "Select a preferred time") {
            alert("Please select a time slot.");
            return;
        }
        
        // Display confirmation message
        alert(`Appointment confirmed!\n\nService: ${serviceType}\nDate: ${appointmentDate}\nTime: ${timeSlot}`);
    });
});