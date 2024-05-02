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
                    <h3>Nombre: ${val.name}</h3>
                    <h3>Tipo: ${val.type}</h3>
                    <h3>Empresa: ${val.company}</h3>
                    <h3>Estado: ${status}</h3>
                    <h4>Descripcion: ${val.description}</h4>

                </div>
            </div>`;
    });

    return htmlContent;
};
