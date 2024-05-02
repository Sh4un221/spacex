// content.js
export const rocketsMenu = () => {
    let htmlContent = '';

    Rockets.forEach(val => {
        let status = ''
        if (val.active === false) {
            status = "No esta activo"
        } else {
            status = "Activo"
        }
        htmlContent += `
         <ul>
        <li><p class="rocket__1">Cohete1</p></li>
        <li><p class="rocket__2">Cohete2</p></li>
        <li><p class="rocket__3">Cohete3</p></li>
        <li><p class="rocket__4">Cohete4</p></li>
        </ul>
            `;
    });

    return htmlContent;
};
