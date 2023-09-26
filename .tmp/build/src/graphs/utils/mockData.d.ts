export const oneD: {
    label: string;
    value: number;
    color: string;
}[];
export const oneD1: {
    label: string;
    value: number;
    color: string;
}[];
export const twoD: {
    label: string;
    x: number;
    y: number;
    z: number;
}[];
export namespace actualOneD {
    const title: string;
    const subtitle: string;
    namespace summary {
        const label: string;
        const subLabel: string;
    }
    const data: {
        label: string;
        value: number;
        thresholdValue: number;
        color: string;
    }[];
    const labels: {
        label: string;
        value: string;
    }[];
    const info: any[];
}
export namespace actualOneD0 {
    const title_1: string;
    export { title_1 as title };
    const subtitle_1: string;
    export { subtitle_1 as subtitle };
    export namespace summary_1 {
        const subtext: string;
        const value: string;
        const thresholdArr: {
            label: string;
            value: string;
        }[];
    }
    export { summary_1 as summary };
    const data_1: {
        label: string;
        value: number;
    }[];
    export { data_1 as data };
    const labels_1: {
        label: string;
        value: string;
        color: string;
    }[];
    export { labels_1 as labels };
    const info_1: any[];
    export { info_1 as info };
}
export namespace actualOneDG {
    const title_2: string;
    export { title_2 as title };
    const subtitle_2: string;
    export { subtitle_2 as subtitle };
    export namespace summary_2 {
        const label_1: string;
        export { label_1 as label };
        const subLabel_1: string;
        export { subLabel_1 as subLabel };
    }
    export { summary_2 as summary };
    const data_2: ({
        label: string;
        value: number;
        halfRadius?: undefined;
        arcRadius?: undefined;
    } | {
        label: string;
        value: string;
        halfRadius: boolean;
        arcRadius: number;
    } | {
        label: string;
        value: number;
        halfRadius: boolean;
        arcRadius: number;
    })[];
    export { data_2 as data };
    const labels_2: {
        label: string;
        value: string;
    }[];
    export { labels_2 as labels };
    const info_2: any[];
    export { info_2 as info };
}
export namespace actualOneDG1 {
    const title_3: string;
    export { title_3 as title };
    const subtitle_3: string;
    export { subtitle_3 as subtitle };
    export namespace summary_3 {
        const subtext_1: string;
        export { subtext_1 as subtext };
        const value_1: string;
        export { value_1 as value };
    }
    export { summary_3 as summary };
    const data_3: {
        label: string;
        value: number;
    }[];
    export { data_3 as data };
    const labels_3: {
        label: string;
        value: string;
    }[];
    export { labels_3 as labels };
    const info_3: any[];
    export { info_3 as info };
}
export namespace actualOneD1 {
    const title_4: string;
    export { title_4 as title };
    const subtitle_4: string;
    export { subtitle_4 as subtitle };
    export namespace summary_4 {
        const subtext_2: string;
        export { subtext_2 as subtext };
        const value_2: string;
        export { value_2 as value };
    }
    export { summary_4 as summary };
    const data_4: ({
        label: string;
        value: number;
        color?: undefined;
    } | {
        label: string;
        value: number;
        color: string;
    })[];
    export { data_4 as data };
    const labels_4: {
        label: string;
        value: string;
    }[];
    export { labels_4 as labels };
    const info_4: any[];
    export { info_4 as info };
}
export namespace actualOneD1N {
    const title_5: string;
    export { title_5 as title };
    const subtitle_5: string;
    export { subtitle_5 as subtitle };
    export namespace summary_5 {
        const subtext_3: string;
        export { subtext_3 as subtext };
        const value_3: string;
        export { value_3 as value };
    }
    export { summary_5 as summary };
    const data_5: ({
        label: string;
        value: number;
        color?: undefined;
    } | {
        label: string;
        value: number;
        color: string;
    })[];
    export { data_5 as data };
    const labels_5: {
        label: string;
        value: string;
    }[];
    export { labels_5 as labels };
    const info_5: any[];
    export { info_5 as info };
}
export namespace actualTwoD {
    const title_6: string;
    export { title_6 as title };
    const subtitle_6: string;
    export { subtitle_6 as subtitle };
    export namespace summary_6 {
        const subtext_4: string;
        export { subtext_4 as subtext };
        const value_4: string;
        export { value_4 as value };
        export const widgetName: string;
    }
    export { summary_6 as summary };
    const data_6: {
        label: string;
        low: string;
        medium: string;
        high: string;
        blocker: string;
        easy: string;
    }[];
    export { data_6 as data };
    const labels_6: {
        label: string;
        value: string;
    }[];
    export { labels_6 as labels };
    const info_6: any[];
    export { info_6 as info };
}
export namespace mediaType {
    const title_7: string;
    export { title_7 as title };
    const subtitle_7: string;
    export { subtitle_7 as subtitle };
    export namespace summary_7 {
        const subtext_5: string;
        export { subtext_5 as subtext };
        const value_5: string;
        export { value_5 as value };
        const widgetName_1: string;
        export { widgetName_1 as widgetName };
    }
    export { summary_7 as summary };
    const data_7: {
        label: string;
        broadcast: string;
        print: string;
        online: string;
    }[];
    export { data_7 as data };
    const labels_7: {
        label: string;
        value: string;
        color: string;
    }[];
    export { labels_7 as labels };
    const info_7: any[];
    export { info_7 as info };
}
export namespace actualTwoD2 {
    const title_8: string;
    export { title_8 as title };
    const subtitle_8: string;
    export { subtitle_8 as subtitle };
    export namespace summary_8 {
        const subtext_6: string;
        export { subtext_6 as subtext };
        const value_6: string;
        export { value_6 as value };
        const widgetName_2: string;
        export { widgetName_2 as widgetName };
    }
    export { summary_8 as summary };
    const data_8: ({
        label: string;
        planned: string;
        actual: string;
    } | {
        label: string;
        planned?: undefined;
        actual?: undefined;
    })[];
    export { data_8 as data };
    const labels_8: ({
        label: string;
        value: string;
        color: string;
        enableDash: boolean;
    } | {
        label: string;
        value: string;
        color: string;
        enableDash?: undefined;
    })[];
    export { labels_8 as labels };
    const info_8: any[];
    export { info_8 as info };
}
export namespace actualTwoD3 {
    const title_9: string;
    export { title_9 as title };
    const subtitle_9: string;
    export { subtitle_9 as subtitle };
    export namespace summary_9 {
        const subtext_7: string;
        export { subtext_7 as subtext };
        const value_7: string;
        export { value_7 as value };
        const widgetName_3: string;
        export { widgetName_3 as widgetName };
    }
    export { summary_9 as summary };
    const data_9: {
        label: string;
        low: string;
        medium: string;
        medium1: string;
        high: string;
    }[];
    export { data_9 as data };
    const labels_9: {
        label: string;
        value: string;
    }[];
    export { labels_9 as labels };
    const info_9: any[];
    export { info_9 as info };
}
export namespace actualTwoD4 {
    const title_10: string;
    export { title_10 as title };
    const subtitle_10: string;
    export { subtitle_10 as subtitle };
    export namespace summary_10 {
        const subtext_8: string;
        export { subtext_8 as subtext };
        const value_8: string;
        export { value_8 as value };
        const widgetName_4: string;
        export { widgetName_4 as widgetName };
    }
    export { summary_10 as summary };
    const data_10: {
        label: string;
        low: string;
        medium: string;
        color: string;
    }[];
    export { data_10 as data };
    const labels_10: {
        label: string;
        value: string;
    }[];
    export { labels_10 as labels };
    const info_10: any[];
    export { info_10 as info };
}
export namespace actualTwoD5 {
    const title_11: string;
    export { title_11 as title };
    const subtitle_11: string;
    export { subtitle_11 as subtitle };
    export namespace summary_11 {
        const subtext_9: string;
        export { subtext_9 as subtext };
        const value_9: string;
        export { value_9 as value };
        const widgetName_5: string;
        export { widgetName_5 as widgetName };
    }
    export { summary_11 as summary };
    const data_11: {
        label: string;
        low: string;
        medium: string;
        color: string;
    }[];
    export { data_11 as data };
    const labels_11: {
        label: string;
        value: string;
    }[];
    export { labels_11 as labels };
    const info_11: any[];
    export { info_11 as info };
}
export namespace lineTest {
    const title_12: string;
    export { title_12 as title };
    const subtitle_12: string;
    export { subtitle_12 as subtitle };
    const summary_12: {
        label: string;
        subLabel: string;
    }[];
    export { summary_12 as summary };
    const data_12: ({
        label: string;
        high: number;
        low: string;
        color?: undefined;
    } | {
        label: string;
        high: number;
        low: string;
        color: string;
    })[];
    export { data_12 as data };
    const labels_12: ({
        label: string;
        value: string;
        color: string;
        color1: string;
        enableDash: boolean;
        dashLineColor: string;
        colorOpacity?: undefined;
        colorOpacity1?: undefined;
    } | {
        label: string;
        value: string;
        color: string;
        colorOpacity: number;
        colorOpacity1: number;
        color1?: undefined;
        enableDash?: undefined;
        dashLineColor?: undefined;
    })[];
    export { labels_12 as labels };
    const info_12: any[];
    export { info_12 as info };
}
export namespace lineTest1 {
    const title_13: string;
    export { title_13 as title };
    const subtitle_13: string;
    export { subtitle_13 as subtitle };
    const summary_13: {
        label: string;
        subLabel: string;
    }[];
    export { summary_13 as summary };
    const data_13: {
        label: string;
        high: number;
        low: string;
    }[];
    export { data_13 as data };
    const labels_13: {
        label: string;
        value: string;
    }[];
    export { labels_13 as labels };
    const info_13: any[];
    export { info_13 as info };
}
export namespace heatData {
    const data_14: {
        label: string;
        '12 pm': string;
        '11 pm': string;
        '9 pm': string;
        '8 pm': string;
        '7 pm': string;
        '6 pm': string;
        '5 pm': string;
        '4 pm': string;
        '3 pm': string;
        '2 pm': string;
        '1 pm': string;
        '11 am': string;
        '10 am': string;
        '9 am': string;
        '8 am': string;
        '7 am': string;
        '6 am': string;
        '5 am': string;
        '4 am': string;
        '3 am': string;
        '2 am': string;
        '1 am': string;
        '00 am': string;
    }[];
    export { data_14 as data };
    export namespace summary_14 {
        const value_10: number;
        export { value_10 as value };
    }
    export { summary_14 as summary };
    const info_14: any[];
    export { info_14 as info };
    const labels_14: {
        label: string;
        value: string;
    }[];
    export { labels_14 as labels };
}
export namespace heatData1 {
    const data_15: ({
        label: string;
        '>=50': string;
        '>=25 <50': string;
        '>=10 <25': string;
        '>=5 <10': string;
        '>5': string;
        '>=50DisplayLabel'?: undefined;
    } | {
        label: string;
        '>=50DisplayLabel': string;
        '>=50': string;
        '>=25 <50': string;
        '>=10 <25': string;
        '>=5 <10': string;
        '>5': string;
    })[];
    export { data_15 as data };
    export namespace summary_15 {
        const value_11: number;
        export { value_11 as value };
    }
    export { summary_15 as summary };
    const info_15: any[];
    export { info_15 as info };
    const labels_15: {
        label: string;
        value: string;
    }[];
    export { labels_15 as labels };
}
export namespace heatMapData {
    const data_16: {
        label: string;
        Z: string;
        Y: string;
        X: string;
        W: string;
        V: string;
        U: string;
        T: string;
        S: string;
        R: string;
        Q: string;
        P: string;
        O: string;
        N: string;
        M: string;
        L: string;
        K: string;
        J: string;
        I: string;
        H: string;
        G: string;
        F: string;
        E: string;
        D: string;
        C: string;
        B: string;
        A: string;
    }[];
    export { data_16 as data };
    export namespace summary_16 {
        const value_12: number;
        export { value_12 as value };
    }
    export { summary_16 as summary };
    const info_16: any[];
    export { info_16 as info };
    const labels_16: {
        label: string;
        value: string;
    }[];
    export { labels_16 as labels };
}
export namespace heatMapDataa {
    const data_17: {
        label: string;
        Z: string;
        Y: string;
        X: string;
        W: string;
        V: string;
        U: string;
        T: string;
        S: string;
        R: string;
        Q: string;
        P: string;
        O: string;
        N: string;
        M: string;
        L: string;
        K: string;
        J: string;
        I: string;
        H: string;
        G: string;
        F: string;
        E: string;
        D: string;
        C: string;
        B: string;
        A: string;
    }[];
    export { data_17 as data };
    export namespace summary_17 {
        const value_13: number;
        export { value_13 as value };
    }
    export { summary_17 as summary };
    const info_17: any[];
    export { info_17 as info };
    const labels_17: {
        label: string;
        value: string;
    }[];
    export { labels_17 as labels };
}
export namespace heatDataHuge {
    const data_18: {
        label: string;
        '>=50': string;
        '>=25 <50': string;
        '>=10 <25': string;
        '>=5 <10': string;
        '>5': string;
    }[];
    export { data_18 as data };
    export namespace summary_18 {
        const value_14: number;
        export { value_14 as value };
    }
    export { summary_18 as summary };
    const info_18: any[];
    export { info_18 as info };
    const labels_18: {
        label: string;
        value: string;
    }[];
    export { labels_18 as labels };
}
export namespace temp {
    const label_2: string;
    export { label_2 as label };
    const data_19: {
        label: string;
        value: number;
    }[];
    export { data_19 as data };
}
