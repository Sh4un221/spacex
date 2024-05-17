export const tableRocketColumn1 = async (Rocket) => {
    const createElement = (tag, textContent, parent) => {
        const element = document.createElement(tag);
        if (textContent) element.textContent = textContent;
        if (parent) parent.append(element);
        return element;
    };

    const box1 = document.querySelector("#box1");
    box1.innerHTML = "";
    createElement("h3", "Rocket Information", box1).classList.add("title__table__1");
    createElement("hr", null, box1);

    const container = createElement("div", null, box1);
    container.classList.add("table__container__1");

    const createInfoDiv = (label, value) => {
        const div = createElement("div", null, container);
        createElement("span", label, div);
        createElement("strong", value, div);
    };

    createInfoDiv("Rocket in service", Rocket.active ? "Active" : "Inactive");
    createInfoDiv("Number of stages", Rocket.stages);
    createInfoDiv("Number of boosters", Rocket.boosters);
    createInfoDiv("Type", Rocket.type);
    createInfoDiv("Landing legs", Rocket.landing_legs.number);
    createInfoDiv("Leg material", Rocket.landing_legs.material || "");
};

export const tableRocketColumn2 = async (Rocket) => {
    const createElement = (tag, textContent, parent) => {
        const element = document.createElement(tag);
        if (textContent) element.textContent = textContent;
        if (parent) parent.append(element);
        return element;
    };

    const box2 = document.querySelector("#box2");
    box2.innerHTML = "";
    createElement("h3", "Engine Information", box2).classList.add("title__table__2");
    createElement("hr", null, box2);
    

    const container = createElement("div", null, box2);
    container.classList.add("table__container__1");

    const createInfoDiv = (label, value) => {
        const div = createElement("div", null, container);
        createElement("span", label, div);
        createElement("strong", value, div);
    };

    createInfoDiv("Maximum power loss", Rocket.engines.engine_loss_max || 0);
    createInfoDiv("Engine layout", Rocket.engines.layout || "");
    createInfoDiv("Number of engines", Rocket.engines.number || 0);
    createInfoDiv("Stage 1 fuel", Rocket.engines.propellant_1 || "");
    createInfoDiv("Stage 2 fuel", Rocket.engines.propellant_2 || "");
    createInfoDiv("Engine type and version", `${Rocket.engines.type || ""} ${Rocket.engines.version || ""}`);
};
