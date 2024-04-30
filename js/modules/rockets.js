export const getAllRockets = async ()=>{
    let res = await fetch("https://api.spacexdata.com/v4/rockets")
    let data = await res.json();
    let massList = [];
    let payloadWeightsList = [];
    data.forEach((val, id) => {
        massList.push(val.mass.kg);
        payloadWeightsList.push(...val.payload_weights)
    });
    
    massList.sort((a,b) => b - a)
    payloadWeightsList.sort((a,b) => b.kg - a.kg)
    data.push({kg_max: massList.shift(), payload_weights: payloadWeightsList.shift().kg});
    return data;
}