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

  let categorical: any = dataViews[0].categorical;
  let category = categorical.categories[0];
  let dataValue = categorical.values[0];

  let array: any = [];
  //   console.log("Category", category, "dataValue", dataValue);

  for (let i = 0, len = Math.max(category.values.length, dataValue.values.length); i < len; i++) {
    array.push({
      label: <string>category.values[i],
      value: <number>dataValue.values[i],
    });

  }

  graphData.data = array

  return graphData

}

export const emptyLineGraphData = {
  title: "",
  subtitle: "",
  summary: { label: "", subLabel: "" },
  data: [],
  labels: [
    {
      label: "Planned Migration",
      value: "value",
      color: "#ED0295",
      color1: "#ffffff",
      colorOpacity: 1,
      colorOpacity1: 0.1,
    },
  ],
};
