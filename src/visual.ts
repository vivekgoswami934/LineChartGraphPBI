"use strict";

import powerbi from "powerbi-visuals-api";

import VisualConstructorOptions = powerbi.extensibility.visual.VisualConstructorOptions;
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import IVisual = powerbi.extensibility.visual.IVisual;

import ISelectionManager = powerbi.extensibility.ISelectionManager;
import IVisualHost = powerbi.extensibility.visual.IVisualHost;

import { VisualFormattingSettingsModel } from "./settings";

import VisualComponent from "./components/VisualComponent"

import { visualTransform, emptyLineGraphData } from "./transform";

import * as React from "react";
import * as ReactDOM from "react-dom";
import * as d3 from "d3";
import { useStore } from "@nanostores/react";

import { $height, $lineGraphData, $renderTheGraph, $width } from "./store/store";

import "./../style/visual.less";

export class Visual implements IVisual {
  private target: HTMLElement;
  private updateCount: number;
  private reactRoot: JSX.Element;
  private host: IVisualHost;
  private selectionManager: ISelectionManager;

  private textNode: Text;
  private formattingSettings: VisualFormattingSettingsModel;

  constructor(options: VisualConstructorOptions) {
    this.host = options.host;
    this.selectionManager = options.host.createSelectionManager();
    this.reactRoot = React.createElement(VisualComponent, {});
    this.target = options.element;

    ReactDOM.render(this.reactRoot, this.target);
  }

  public update(options: VisualUpdateOptions) {
    let width: number = options.viewport.width;
    let height: number = options.viewport.height;
    $width.set(width);
    $height.set(height);

    if (options.dataViews && options.dataViews[0]) {
      const transformedData: any = visualTransform(options, this.host);

        // console.log(transformedData);

      $lineGraphData.set(transformedData);
      $renderTheGraph.set(!$lineGraphData.get());

    } else {
      // this.clear();
    }
  }

  /**
   * Returns properties pane formatting model content hierarchies, properties and latest formatting values, Then populate properties pane.
   * This method is called once every time we open properties pane or when the user edit any format property.
   */
}
