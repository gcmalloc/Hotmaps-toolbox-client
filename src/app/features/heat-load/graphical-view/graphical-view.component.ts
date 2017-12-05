import {Component, Input, OnInit, OnChanges} from '@angular/core';

import * as d3 from 'd3-selection';
import * as d3Scale from 'd3-scale';
import * as d3Shape from 'd3-shape';
import * as d3Array from 'd3-array';
import * as d3Axis from 'd3-axis';

import { Stocks } from './shared/data';
import { Stock } from './shared/data';
import {SummaryResultClass} from '../../summary-result/summary-result.class';
import {Logger} from '../../../shared/services/logger.service';
import {HeatLoadClass, Value} from '../heat-load.class';

@Component({
  selector: 'htm-graphical-view',
  templateUrl: './graphical-view.component.html',
  styleUrls: ['./graphical-view.component.css']
})
export class GraphicalViewComponent implements OnInit, OnChanges {
  @Input() expanded: boolean;

  @Input() poiTitle;
  @Input('heatLoadResult') heatLoadResult: HeatLoadClass;
  subtitle: string = 'Heat load profil';

  private heatloads: Stock[];
  width_const = 600;
  height_const = 200;

  private margin = {top: 20, right: 100, bottom: 30, left: 50};
  private width: number;
  private height: number;
  private x: any;
  private y: any;
  private svg: any;
  private line: d3Shape.Line<[number, number]>;
  constructor(private logger: Logger) {

    this.width = 600 - this.margin.left - this.margin.right;
    this.height = 200 - this.margin.top - this.margin.bottom;
  }

  ngOnInit() {

    //const nuts_id = this.summaryResult['nuts_id'];
   // this.logger.log('nuts_id ' + nuts_id);


    if (this.heatLoadResult) {
      console.log('GraphicalViewComponent/ngOnInit ' + JSON.stringify(this.heatLoadResult.values));
    }

  }
  ngOnChanges() {
    this.logger.log('GraphicalViewComponent/ngOnChanges');
    if (this.heatLoadResult) {
      this.heatloads = [];
      for (const value of this.heatLoadResult.values) {
        this.logger.log('entry =' + JSON.stringify(value) );
        const result = JSON.stringify(value)
        const s: Stock = {
          date : this.getDate(value),
          value : value.value,
        };
        this.heatloads.push(s);
      }
      this.logger.log('heatloads/ngOnChanges' + JSON.stringify(this.heatloads));
      this.logger.log('Stocks/ngOnChanges' + JSON.stringify(Stocks));

    }
    this.initSvg();
    this.initAxis();
    this.drawAxis();
    this.drawLine();
     //
    }
  private initSvg() {
    this.svg = d3.select("#charts")
      .append("g")
      .attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")");
  }

  private initAxis() {
    this.x = d3Scale.scaleTime().range([0, this.width]);
    this.y = d3Scale.scaleLinear().range([this.height, 0]);
    this.x.domain(d3Array.extent(Stocks, (d) => d.date));
    this.logger.log('this.x.domain' + this.x.domain());
    this.y.domain(d3Array.extent(Stocks, (d) => d.value ));
    this.logger.log('this.x.domain' + this.y.domain());

  }
  private getDate(heatload: any): Date {
    const date = new Date(heatload.year + '-' + heatload.month + '-01');
    this.logger.log('getDate/date = '+ date );
    return date;

  }


  private drawAxis() {

    this.svg.append("g")
      .attr("class", "axis axis--x")
      .attr("transform", "translate(0," + this.height + ")")
      .call(d3Axis.axisBottom(this.x));

    this.svg.append("g")
      .attr("class", "axis axis--y")
      .call(d3Axis.axisLeft(this.y))
      .append("text")
      .attr("class", "axis-title")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Price ($)");
  }

  private drawLine() {
    this.line = d3Shape.line()
      .x( (d: any) => this.x(d.date) )
      .y( (d: any) => this.y(d.value) );

    this.svg.append("path")
      .datum(Stocks)
      .attr("class", "line")
      .attr("d", this.line);
  }
}