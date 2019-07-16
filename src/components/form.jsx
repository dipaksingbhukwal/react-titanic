import React, { Component } from "react";
import Input from "./input";
import Select from "./select";

class Form extends Component {
  state = {
    passenger: {
      name: "",
      survived: "",
      sex: "",
      age: "",
      pclass: "",
      parch: "",
      ticket: "",
      fare: ""
    }
  };

  handleChange = e => {
    let passenger = this.state.passenger;
    if (e.currentTarget.nodeName === "SELECT") {
      passenger[e.currentTarget.id] = e.currentTarget.value;
    } else {
      passenger[e.currentTarget.name] = e.currentTarget.value;
    }
    this.setState({ passenger });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state.passenger);
    const { onSubmit } = this.props;
    // console.log(this.props);
    onSubmit(this.state.passenger);
  };
  render() {
    return (
      <form
        className="border rounded bg-secondary text-white"
        onSubmit={this.handleSubmit}
      >
        <h3 className="m-2">Add Passenger</h3>
        <div className="row m-2">
          {/* <div className="col col-md-3 m-6" /> */}
          <div className="col">
            <Input
              label="Passenger Name"
              name="name"
              type="text"
              placeholder="Enter Passenger Name"
              onChange={this.handleChange}
            />

            <Select
              label="Survived"
              name="survived"
              options={["Yes", "No"]}
              onChange={this.handleChange}
            />
            <Select
              label="Sex"
              name="sex"
              options={["male", "female"]}
              onChange={this.handleChange}
            />
            <Input
              label="Age"
              name="age"
              type="number"
              placeholder="Enter Passenger Age"
              onChange={this.handleChange}
            />
            <input type="submit" value="Submit" />
          </div>
          <div className="col ">
            <Select
              label="Pclass"
              name="pclass"
              options={[1, 2, 3]}
              onChange={this.handleChange}
            />
            <Select
              label="Parch"
              name="parch"
              options={[1, 2, 3, 4, 5, 6]}
              onChange={this.handleChange}
            />
            <Input
              label="Ticket"
              name="ticket"
              type="text"
              placeholder="Enter Passenger Ticket Details"
              onChange={this.handleChange}
            />
            <Input
              label="Fare"
              name="fare"
              type="float"
              placeholder="Enter Passenger Age"
              onChange={this.handleChange}
            />
          </div>
          {/* <div className="col col-md-3 m-6" /> */}
        </div>
      </form>
    );
  }
}

export default Form;
