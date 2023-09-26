export function debounce(func: any): (event: any) => void;
export function getGraphUtils(config: any, data: any): {
    graphAreaL: any;
    graphAreaW: number;
    graphAreaH: number;
    maxX: number;
    minX: number;
    maxY: number;
    minY: number;
};
export namespace TextLength {
    export { getWidth };
}
/**
 * Measures the rendered width of arbitrary text given the font size and font face
 * @param {string} text The text to measure
 * @param {number} fontSize The font size in pixels
 * @param {string} fontFace The font face ("Arial", "Helvetica", etc.)
 * @returns {number} The width of the text
 **/
declare function getWidth(text: string, fontSize: number, fontFace: string): number;
export {};
