export default RootGraph;
declare class RootGraph {
    constructor($graphWrp: any);
    $graphWrp: any;
    $svg: d3.Selection<d3.BaseType, any, null, undefined> | d3.Selection<SVGSVGElement, any, null, undefined>;
    $svgNode: d3.BaseType | SVGSVGElement;
    $graphGrp: d3.Selection<d3.BaseType, any, null, undefined> | d3.Selection<SVGGElement, any, null, undefined>;
    width: number;
    height: number;
    data: any[];
    preferences: {};
    padding: {
        left: number;
        top: number;
        right: number;
        bottom: number;
    };
    margin: {
        left: number;
        top: number;
        right: number;
        bottom: number;
    };
    init($graphWrp: any): void;
    setup(): void;
    drawGraph(): void;
}
import * as d3 from "d3";
