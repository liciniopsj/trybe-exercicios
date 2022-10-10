const header = document.getElementById("header-container");
header.style.backgroundColor = "#0de046";


const emergencySection = document.querySelector(".emergency-tasks");
emergencySection.style.backgroundColor = "salmon";

const noemergencySection = document.querySelector(".no-emergency-tasks");
noemergencySection.style.backgroundColor = "yellow";

const emergencyTasks = document.querySelectorAll(".emergency-tasks div h3");
    for (let bgColor of emergencyTasks){
        bgColor.style.backgroundColor = "purple"
    }

    const noemergencyTasks = document.querySelectorAll(".no-emergency-tasks div h3");
    for (let bgColor of noemergencyTasks){
        bgColor.style.backgroundColor = "black"
    }

const footer = document.getElementById("footer-container");
footer.style.backgroundColor = "#044716";
