import * as d3 from 'd3';

export const getGraphUtils = (config, data) => {
  let maxX = 0;
  let minX = 0;
  let maxY = 0;
  let minY = 0;
  const graphAreaL = config.yLabelAlignment + config.padding.left;
  const graphAreaH =
    config.height -
    (config.xLabelAlignment + config.padding.bottom + config.padding.top);
  const graphAreaW =
    config.width -
    (config.yLabelAlignment + config.padding.left + config.padding.right);

  if (config.xAxisType !== 'text') {
    maxX = +d3.max(data, function (d) {
      return +d.label;
    });

    minX = +d3.min(data, function (d) {
      return +d.label;
    });
  }
  maxY = +d3.max(data, function (d) {
    return +d.value;
  });

  minY = +d3.min(data, function (d) {
    return +d.value;
  });

  if (config.percentage) {
    minY = 0;
    maxY = 100;
  }

  return {
    graphAreaL,
    graphAreaW,
    graphAreaH,
    maxX,
    minX,
    maxY,
    minY,
  };
};

export const TextLength = (function () {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');

  /**
   * Measures the rendered width of arbitrary text given the font size and font face
   * @param {string} text The text to measure
   * @param {number} fontSize The font size in pixels
   * @param {string} fontFace The font face ("Arial", "Helvetica", etc.)
   * @returns {number} The width of the text
   **/
  function getWidth(text, fontSize, fontFace) {
    context.font = fontSize + 'px ' + fontFace;
    return context.measureText(text).width;
  }

  return {
    getWidth,
  };
})();

export function debounce(func) {
  let timer;
  return function (event) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(func, 100, event);
  };
}
