import { getAllRockets } from "./modules/rockets.js";
import { rocketGeneralInformation } from "./modulesComponents/content.js";
import { 
    progressRocketWeight, 
    progressPayloadWeights, 
    progressHeightRocket, 
    progressDiameterRocket,
    progressSecondStageDiameterRocket,
    progressSecondStageHeightRocket
} from "./modulesComponents/progressBar.js";

document.addEventListener("DOMContentLoaded", async () => {
    let information__2 = document.querySelector("#information__2");
    let description__item = document.querySelector("#description__item");
    let description__buttom=document.querySelector("#description__buttom")


    let dataRockets = await getAllRockets();
    let Totales = dataRockets.pop();
    let [Rocket1, Rocket2, Rocket3, Rocket4] = dataRockets;

    console.log(dataRockets);
    console.log(Totales);

    information__2.append(...progressRocketWeight(Totales.kg_max, Rocket4));
    information__2.append(...progressPayloadWeights(Totales.payload_weights, Rocket4));
    information__2.append(...progressHeightRocket(Totales.height, Rocket4));
    information__2.append(...progressDiameterRocket(Totales.diameter, Rocket4));
    information__2.append(...progressSecondStageDiameterRocket(Totales.composite_diameter, Rocket4));
    information__2.append(...progressSecondStageHeightRocket(Totales.composite_height, Rocket4));    
    description__item.innerHTML = rocketGeneralInformation([Rocket4]); 
});
