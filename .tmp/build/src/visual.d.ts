import powerbi from "powerbi-visuals-api";
import VisualConstructorOptions = powerbi.extensibility.visual.VisualConstructorOptions;
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import IVisual = powerbi.extensibility.visual.IVisual;
import "./../style/visual.less";
export declare class Visual implements IVisual {
    private target;
    private updateCount;
    private reactRoot;
    private host;
    private selectionManager;
    private textNode;
    private formattingSettings;
    constructor(options: VisualConstructorOptions);
    update(options: VisualUpdateOptions): void;
}
