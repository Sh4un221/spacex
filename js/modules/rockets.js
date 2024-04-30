export const getAllRockets = async () => {
    let res = await fetch(`https://api.spacexdata.com/v4/rockets`)
    let data = await res.json()
    let massList = [];
    let payloadsList = []
    data.forEach((val, id) => {
        massList.push(val.mass.kg)
        payloadsList.push(...val.payload_weights)
    });
    massList.sort((a, b) => b - a)
    payloadsList.sort((a, b) => b.kg - a.kg)
    data.push({ 
        kg_max: massList.shift(), 
        payload_weights: massList.payloadsList.shift() 
    })//shift () saca el primer elemento de un arreglo de datos
    return data
}