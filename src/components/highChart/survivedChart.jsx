import React, { Component } from "react";
import Highcharts from "highcharts/highstock";

class SurvivedChart extends Component {
  state = {
    showChart: false,
    series: [
      {
        name: "Survived",
        data: [
          {
            name: "Yes",
            y: this.props.data.filter(s => s === "Yes").length
          },
          {
            name: "No",
            y: this.props.data.filter(s => s === "No").length
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
        renderTo: "Passengers-Survived"
      },
      title: {
        text: "Survived",
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

  openChart() {
    let showChart = !this.state.showChart;
    this.setState({ showChart });
  }
  componentDidMount() {
    this.highChartsRender();
  }
  render() {
    return (
      <div>
        <div id="Passengers-Survived" />
      </div>
    );
  }
}

export default SurvivedChart;
