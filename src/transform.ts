import powerbi from "powerbi-visuals-api";
import IVisualHost = powerbi.extensibility.visual.IVisualHost;
import IColorPalette = powerbi.extensibility.IColorPalette;
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;

export function visualTransform(
  options: VisualUpdateOptions,
  host: IVisualHost
): any {
  let dataViews = options.dataViews;
  //   console.log("dataview", dataViews);
  let graphData = emptyLineGraphData;
  if (
    !dataViews ||
    !dataViews[0] ||
    !dataViews[0].categorical ||
    !dataViews[0].categorical.categories ||
    !dataViews[0].categorical.categories[0].source ||
    !dataViews[0].categorical.values
  )
    return graphData;
  
/////////////////////////////////////////////////
  let categorical: any = dataViews[0].categorical;
  let category = categorical.categories[0].values;
  let dataValue = categorical.values;

  let xAxisDisplayName = categorical.categories[0].source.displayName;

  ///////////////////////-----y-axis labels name-----////////////////////////////////////
  let yAxisDisplayName = categorical.values;
  
  let yAxisDisplayNameArray = [];
  
  for(let i = 0 ; i < yAxisDisplayName.length ; i++){
      yAxisDisplayNameArray.push(yAxisDisplayName[i].source.displayName)
    }
 /////////////////////////////////////////////////////////////////////////////////////


//   console.log("hey", category,dataValue)

  let result = [];

for (let i = 0; i < category.length; i++) {
    let countryData = {
        label: category[i]
    };

    for (let j = 0; j < dataValue.length; j++) {
        // countryData[`value${j + 1}`] = dataValue[j].values[i];
        // countryData[`planned`] = dataValue[j].values[i];
        // countryData[`actual`] = dataValue[j].values[i]+16710000;

        for(let k = 0 ; k < yAxisDisplayNameArray.length ; k++){
           countryData[yAxisDisplayNameArray[k]] = dataValue[j].values[i] + Math.floor(Math.random()*7567848);
        }

    }

    result.push(countryData);
}

// console.log("result",result);

   graphData.data = result

  ////////////////////------------labelsArray---------/////////////////////////////
  let labelsArray = [];
  let colorsArray = [ "#ED0295","black", "red", "gray", "teal"];

  for(let i = 0; i < yAxisDisplayNameArray.length; i++){
       labelsArray.push({
        label : yAxisDisplayNameArray[i].toUpperCase(),
        value : yAxisDisplayNameArray[i],
        color : colorsArray[i]
       })
  }

  graphData.labels = labelsArray

//   console.log("graphData",graphData)
  ///////////////////////////////////////////////////////////////////////////////////
  return graphData

}

export const emptyLineGraphData = {
  title: "",
  subtitle: "",
  summary: { label: "", subLabel: "" },
  data: [],
  labels: []
};
