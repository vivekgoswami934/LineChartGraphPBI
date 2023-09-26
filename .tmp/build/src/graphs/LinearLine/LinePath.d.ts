export function linePath(): {
    (selected: any): any;
    config(val: any, ...args: any[]): any | {
        enableCurve: boolean;
        enableStep: boolean;
        areaLineStroke: string;
        areaLineStrokeWidth: number;
        r: number;
        enablePointCircle: boolean;
        pointCircleStroke: string;
        pointCircleStrokeWidth: number;
        enableThreshold: boolean;
        thresholdStroke: string;
        thresholdStrokeWidth: number;
        enableGradient: boolean;
        disableCircleLabel: boolean;
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
