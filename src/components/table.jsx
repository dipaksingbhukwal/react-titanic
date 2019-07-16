import React, { Component } from "react";

class Table extends Component {
  state = {
    passengers: []
  };
  render() {
    const { data } = this.props;
    let headings = Object.keys(data[0]).filter(h => h !== "_id" && h !== "__v");

    return (
      <div>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              {headings.map(h => (
                <th scope="col" key={h}>
                  {h}
                </th>
              ))}
              <th scope="col" />
            </tr>
          </thead>
          <tbody>
            {data.map(d => (
              <tr key={d[0] + 123}>
                {headings.map(h => (
                  <td key={d[0] + 1234}>{d[h]}</td>
                  // <td scope="col">{h}</td>
                ))}
                <td>
                  <i className="fas fa-edit">Edit</i>
                  <i className="fas fa-trash-alt" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
