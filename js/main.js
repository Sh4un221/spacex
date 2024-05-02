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


let information__2 = document.querySelector("#information__2");
let dataRockets = await getAllRockets();
let Totales = dataRockets.pop()
let test=rocketGeneralInformation()
console.log(`${test} adasd`);
let [Rocket1, Rocket2, Rocket3, Rocket4] = dataRockets; 



let information__1 = document.querySelector("#description__item");



console.log(dataRockets);
console.log(Totales);

information__2.append(...progressRocketWeight(Totales.kg_max, Rocket3))
information__2.append(...progressPayloadWeights(Totales.payload_weights, Rocket3))
information__2.append(...progressHeightRocket(Totales.height, Rocket3))
information__2.append(...progressDiameterRocket(Totales.diameter, Rocket3))
information__2.append(...progressSecondStageDiameterRocket(Totales.composite_diameter, Rocket3))
information__2.append(...progressSecondStageHeightRocket(Totales.composite_height, Rocket3))
information__1.append( rocketGeneralInformation(Rocket3))
