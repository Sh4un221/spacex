export const getAllRockets = async ()=>{
    let res = await fetch("https://api.spacexdata.com/v4/rockets")
    let data = await res.json();
    let listMass = [], 
        listPayloadWeights = [], 
        heightRocket = [], 
        listDiameter = [], 
        listaDiameterComposite = [],
        listaHeightComposite = [];

    data.forEach((val, id) => {
        listMass.push(val.mass.kg);
        listPayloadWeights.push(...val.payload_weights)
        heightRocket.push(val.height)
        listDiameter.push(val.diameter)
        listaDiameterComposite.push(val.second_stage.payloads.composite_fairing.diameter)
        listaHeightComposite.push(val.second_stage.payloads.composite_fairing.height)
    });
    
    listMass.sort((a,b) => b - a)
    listPayloadWeights.sort((a,b) => b.kg - a.kg)
    heightRocket.sort((a,b) => b.meters - a.meters)
    listDiameter.sort((a,b) => b.meters - a.meters)
    listaDiameterComposite.sort((a,b) => b.meters - a.meters)
    listaHeightComposite.sort((a,b) => b.meters - a.meters)
    data.push({
        kg_max: listMass.shift(), 
        payload_weights: listPayloadWeights.shift().kg,
        height: heightRocket.shift().meters,
        diameter: listDiameter.shift().meters,
        composite_diameter : listaDiameterComposite.shift().meters,
        composite_height: listaHeightComposite.shift().meters
    });
    return data;
}                   
