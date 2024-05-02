export const rocketGeneralInformation = (Rockets) => {
    let conterDiv = [];

    [Rockets].forEach(val => {
        let descriptionContainer = document.createElement("div")
        descriptionContainer.classList.add("description__container")
        let divFirst = document.createElement("div")
        let h3first = document.createElement("h3")
        let h3second = document.createElement("h3")
        let h3third = document.createElement("h3")

        console.log(val);
        h3first.append(`Nombre`)
        h3second.append(`Tipo`)
        h3third.append(`Empresa`)
        descriptionContainer.append(divFirst)
        conterDiv.push(descriptionContainer)
    });
    return conterDiv
}