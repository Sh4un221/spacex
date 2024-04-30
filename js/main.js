import {
    getAllRockets
} from "./modules/rockets.js";
let information__2 = document.querySelector("#information__2");
let dataRockets = await getAllRockets();
[Rocket1]=dataRockets;
dataRockets.forEach(val => {
    let divInformationContainer = document.createElement("div");
    divInformationContainer.classList.add("information_container");
    let divFirst = document.createElement("div");
    let labelFirst = document.createElement("label");
    labelFirst.textContent = "File progress";
    let ProgressFirst = document.createElement("progress");
    ProgressFirst.max = 100;
    ProgressFirst.value = 70;
    ProgressFirst.textContent = "Lorem ipsum"
    let divLast = document.createElement("div");
    let spanLast = document.createElement("span");
    spanLast.textContent = "Lorem ipsum.."
    divFirst.append(labelFirst);
    divFirst.append(ProgressFirst)
    divLast.append(spanLast)
    divInformationContainer.append(divFirst)
    divInformationContainer.append(divLast)
    console.log(divInformationContainer);
    // information__2.append(divInformationContainer);
});