import {
    getAllRocketEngineTotal,
    getAllRocketEngineThrustVacuumTotal,
    getAllLandingLegs,
    getSuccessRates
} from "../modules/rockets.js";


export const informRocketEngineThrustSeaLevel = async (thrust_sea_level) => {
    let { kN: totalKN } = await getAllRocketEngineTotal();
    let porcentaje = (thrust_sea_level.kN * 100) / totalKN

    let div = document.createElement('div');
    div.classList.add("carousel__item")
    let divFirst = document.createElement('div');
    divFirst.classList.add("item__progress__bar");
    divFirst.style = `background: radial-gradient(closest-side, #1d1f38 85%, transparent 85% 100%), conic-gradient(var(--color--three) ${porcentaje}%, transparent 0)`
    let divFirstChildren = document.createElement('div');
    divFirstChildren.classList.add("progress__value")
    let strong = document.createElement('strong');
    strong.textContent = "Atmospheric acceleration"
    let smallFirst = document.createElement('small');
    smallFirst.textContent = `${porcentaje.toFixed(2)} %`

    let smallLast = document.createElement('small');
    let kN = new Intl.NumberFormat('cop').format(thrust_sea_level.kN)
    let lbf = new Intl.NumberFormat('cop').format(thrust_sea_level.lbf)
    smallLast.innerHTML = `${kN} kN <br> ${lbf} Lbf`

    divFirstChildren.append(strong, smallFirst, smallLast)
    divFirst.append(divFirstChildren)
    div.append(divFirst)
    let section__information__1 = document.querySelector("#section__information__1");
    section__information__1.innerHTML = "";
    section__information__1.append(div)

    // <div class="carousel__item">
    //     <div class="item__progress__bar">
    //         <div class="progress__value">
    //             <strong>Title</strong>
    //             <small>3</small>
    //         </div>
    //     </div>
    // </div>
}


export const informRocketEngineThrustVacuum = async (thrust_vacuum) => {
    let { kN: totalKN } = await getAllRocketEngineThrustVacuumTotal();
    let porcentaje = (thrust_vacuum.kN * 100) / totalKN;

    let div = document.createElement('div');
    div.classList.add("carousel__item")
    let divFirst = document.createElement('div');
    divFirst.classList.add("item__progress__bar");
    divFirst.style = `background: radial-gradient(closest-side, #1d1f38 85%, transparent 85% 100%), conic-gradient(var(--color--three) ${porcentaje}%, transparent 0)`
    let divFirstChildren = document.createElement('div');
    divFirstChildren.classList.add("progress__value")
    let strong = document.createElement('strong');
    strong.textContent = "Speed in space"
    let smallFirst = document.createElement('small');
    smallFirst.textContent = `${porcentaje.toFixed(2)} %`

    let smallLast = document.createElement('small');
    let kN = new Intl.NumberFormat('cop').format(thrust_vacuum.kN)
    let lbf = new Intl.NumberFormat('cop').format(thrust_vacuum.lbf)
    smallLast.innerHTML = `${kN} kN <br> ${lbf} Lbf`

    divFirstChildren.append(strong, smallFirst, smallLast)
    divFirst.append(divFirstChildren)
    div.append(divFirst)
    let section__information__1 = document.querySelector("#section__information__1");
    // section__information__1.innerHTML = "";
    section__information__1.append(div)

    // <div class="carousel__item">
    //     <div class="item__progress__bar">
    //         <div class="progress__value">
    //             <strong>Title</strong>
    //             <small>3</small>
    //         </div>
    //     </div>
    // </div>
}
export const informRocketLegs = async (landing_legs) => {
    let { number: totalNumber } = await getAllLandingLegs();

    let porcentaje = (landing_legs * 100) / totalNumber
    let div = document.createElement('div');
    div.classList.add("carousel__item")
    let divFirst = document.createElement('div');
    divFirst.classList.add("item__progress__bar");
    divFirst.style = `background: radial-gradient(closest-side, #1d1f38 85%, transparent 85% 100%), conic-gradient(var(--color--three) ${porcentaje}%, transparent 0)`
    let divFirstChildren = document.createElement('div');

    divFirstChildren.classList.add("progress__value")
    let strong = document.createElement('strong');
    strong.textContent = "Landing Legs"
    let smallFirst = document.createElement('small')
    smallFirst.textContent = `${porcentaje.toFixed(2)}%`

    let smallLast = document.createElement('small');
    smallLast.textContent = `${landing_legs}`

    divFirstChildren.append(strong, smallFirst, smallLast)
    divFirst.append(divFirstChildren)
    div.append(divFirst)
    let section__information__2 = document.querySelector("#section__information__2")
    section__information__2.innerHTML = "";
    section__information__2.append(div)
}

export const informRocketsSuccess = async () => {
    let rockets = await getSuccessRates();
    let section__information__2 = document.querySelector("#section__information__2");
    section__information__2.innerHTML = "";

    rockets.forEach(rocket => {
        let div = document.createElement('div');
        div.classList.add("carousel__item")
        let divFirst = document.createElement('div');
        divFirst.classList.add("item__progress__bar");
        divFirst.style = `background: radial-gradient(closest-side, #1d1f38 85%, transparent 85% 100%), conic-gradient(var(--color--three) ${rocket.success_rate_pct}%, transparent 0)`
        let divFirstChildren = document.createElement('div');

        divFirstChildren.classList.add("progress__value")
        let strong = document.createElement('strong');
        strong.textContent = "Success rate"
        let smallFirst = document.createElement('small')
        smallFirst.textContent = `${rocket.success_rate_pct.toFixed(2)}%`

        let smallLast = document.createElement('small');
        smallLast.textContent = `${rocket.success_rate_pct}`

        divFirstChildren.append(strong, smallFirst, smallLast)
        divFirst.append(divFirstChildren)
        div.append(divFirst)
        section__information__2.append(div);
    });
}

