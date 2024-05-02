// content.js
export const rocketGeneralInformation = (Rockets) => {
    let htmlContent = '';

    Rockets.forEach(val => {
        let status = ''
        if (val.active === false) {
            status = "No esta activo"
        } else {
            status = "Activo"
        }
        htmlContent += `
            <div class="description__container">
                <div class="rocket__general">
                    <img src="${val.flickr_images[0]}">
                    <p><strong>Name</strong>: ${val.name}</p>
                    <p><strong>Type</strong>: ${val.type}</p>
                    <p><strong>Country</strong>: ${val.country}</p>
                    <p><strong>Company</strong>: ${val.company}</p>
                    <p><strong>Status</strong>: ${status}</p>
                    <p><strong>Description</strong>: ${val.description}</p>
                    <p><strong>Wikipedia</strong>: <a href=${val.wikipedia} target="_blank">Ir a la pagina de wikipedia</a></p>


                </div>
            </div>`;
    });

    return htmlContent;
};
