import axios from "axios";
import React, { Component } from "react";

import Table from "./table";
import Form from "./form";
// import Grid from "./grid/grid";
import GenderChart from "./highChart/genderChart";
import SurvivedChart from "./highChart/survivedChart";
import AgeGroupChart from "./highChart/ageGroupChart";

class Home extends Component {
  state = {
    passengers: "",
    survived: "",
    sex: "",
    age: "",
    pclass: "",
    parch: "",
    addPassenger: false,
    showStatistics: false
  };

  addp = e => {
    let flag = e.currentTarget.name;
    let value = this.state[flag];
    this.setState({ [flag]: !value });
    // return;
  };

  async componentDidMount() {
    const { data } = await axios.get(
      "https://nxlspjck8i.execute-api.us-east-1.amazonaws.com/production/api"
    );

    const passengers = [...data];
    let survived = [],
      sex = [],
      age = [],
      pclass = [],
      parch = [];
    passengers.map(passenger => {
      if (passenger.Survived) {
        passenger["Survived"] = "Yes";
        survived.push(passenger["Survived"]);
      } else {
        passenger["Survived"] = "No";
        survived.push(passenger["Survived"]);
      }
      sex.push(passenger["Sex"]);
      age.push(passenger["Age"]);
      pclass.push(passenger["Pclass"]);
      parch.push(passenger["Parch"]);
      return;
    });

    this.setState({ passengers, survived, sex, age, pclass, parch });
  }

  onFormSubmit = passenger => {
    console.log("clicked on submit");
    console.log(passenger);
  };

  render() {
    const { passengers } = this.state;

    return (
      <div>
        <div
          className=""
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          {/* <Grid /> */}
          {/* <button
            className="border bg-warning rounded m-2 "
            onClick={this.addp}
            name="showStatistics"
          >
            Show Statistics
          </button>
          <button
            className="border bg-warning rounded m-2"
            onClick={this.addp}
            name="addPassenger"
          >
            Add Passenger
          </button> */}

          <div className="row border mb-2">
            <div className="col border-dark rounded">
              {this.state.sex.length !== 0 ? (
                <GenderChart data={[...this.state.sex]} />
              ) : null}
            </div>
            <div className="col border-dark rounded">
              {this.state.survived.length !== 0 ? (
                <SurvivedChart data={[...this.state.survived]} />
              ) : null}
            </div>
            <div className="col">
              {this.state.age.length !== 0 ? (
                <AgeGroupChart data={[...this.state.age]} />
              ) : null}
            </div>
            <div className="col md-4">
              <Form onSubmit={() => this.onFormSubmit()} />
            </div>
          </div>
          {/* {this.state.addPassenger ? <Form /> : null} */}
        </div>

        {passengers ? <Table data={passengers} /> : null}
      </div>
    );
  }
}

export default Home;
