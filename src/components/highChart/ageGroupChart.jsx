import React, { Component } from "react";
import Highcharts from "highcharts/highstock";

class AgeGroupChart extends Component {
  state = {
    showChart: false,
    series: [
      {
        name: "Age Group",
        data: [
          {
            name: "Children",
            y: this.props.data.filter(age => age >= 0 && age <= 14).length
          },
          {
            name: "Youth",
            y: this.props.data.filter(age => age > 15 && age <= 24).length
          },
          {
            name: "Adult",
            y: this.props.data.filter(age => age > 25 && age <= 64).length
          },
          {
            name: "Seniors",
            y: this.props.data.filter(age => age > 65).length
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
        renderTo: "Passengers-Age-Group"
      },
      title: {
        text: "Age Group",
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
        <div id="Passengers-Age-Group" />
      </div>
    );
  }
}

export default AgeGroupChart;
