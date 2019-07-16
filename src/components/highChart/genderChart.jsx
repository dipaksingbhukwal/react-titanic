import React, { Component } from "react";
import Highcharts from "highcharts/highstock";

class GenderChart extends Component {
  state = {
    showChart: false,
    series: [
      {
        name: "Sex",
        data: [
          {
            name: "male",
            y: this.props.data.filter(sex => sex === "male").length
          },
          {
            name: "female",
            y: this.props.data.filter(sex => sex === "female").length
          }
        ]
      }
    ]
  };

  highChartsRender() {
    Highcharts.chart({
      chart: {
        type: "pie",
        height: 300,
        renderTo: "Passengers-Gender"
      },
      title: {
        text: "Gender",
        style: {
          fontSize: "20px"
        }
      },
      credits: {
        enabled: false
      },
      plotOptions: {
        pie: {
          dataLabels: {
            enabled: true,
            format: "{point.name}: {point.percentage:.1f} %"
          },
          showInLegend: true
        }
      },
      series: this.state.series
    });
  }

  componentDidMount() {
    this.highChartsRender();
  }
  render() {
    return (
      <div>
        <div id="Passengers-Gender" />
      </div>
    );
  }
}

export default GenderChart;
