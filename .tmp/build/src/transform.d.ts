import powerbi from "powerbi-visuals-api";
import IVisualHost = powerbi.extensibility.visual.IVisualHost;
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
export declare function visualTransform(options: VisualUpdateOptions, host: IVisualHost): any;
export declare const emptyLineGraphData: {
    title: string;
    subtitle: string;
    summary: {
        label: string;
        subLabel: string;
    };
    data: any[];
    labels: any[];
};
