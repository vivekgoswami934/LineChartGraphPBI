export function formatNumber(n: any): any;
export function xAxis(): {
    (selected: any): any;
    config(val: any, ...args: any[]): any | {
        fontFamily: string;
        xAxisType: string;
        enableGridXLine: boolean;
        gridLineXStroke: string;
        x: any;
        y: any;
        width: number;
        height: number;
        fontSize: number;
        padding: {
            left: number;
            top: number;
            right: number;
            bottom: number;
        };
        textwrap: boolean;
        xLabelAlignment: number;
        yLabelAlignment: number;
        xAxisLabelBreatingSpace: number;
        duration: number;
        gutterSpace: number;
        graphTopPadding: number;
        dasharray: number;
        gridLineStrokeWidth: number;
    };
};
export function yAxis(): {
    (selected: any): void;
    config(val: any, ...args: any[]): any | {
        yAxisType: string;
        enableGridYLine: boolean;
        gridLineYStroke: string;
        duration: number;
        x: any;
        y: any;
        width: number;
        height: number;
        fontSize: number;
        padding: {
            left: number;
            top: number;
            right: number;
            bottom: number;
        };
        textwrap: boolean;
        xLabelAlignment: number;
        yLabelAlignment: number;
        xAxisLabelBreatingSpace: number;
        gutterSpace: number;
        graphTopPadding: number;
        dasharray: number;
        gridLineStrokeWidth: number;
    };
};
