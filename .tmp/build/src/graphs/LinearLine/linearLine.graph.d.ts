export default LinearLineGraph;
declare class LinearLineGraph extends RootGraph {
    setData(data: any): void;
    labels: any;
    summary: any;
    filteredData: any[];
    graphData: any[][];
    setConfig(configObj?: {}): void;
    config: {};
}
import RootGraph from "../utils/rootGraph";
