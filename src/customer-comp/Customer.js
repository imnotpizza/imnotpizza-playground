import React from "react";
import TableRow from "@material-ui/core/TableRow"
import TableCell from "@material-ui/core/TableCell";


class Customer extends React.Component {
  render() {
    return (
      <TableRow>
        <TableCell>{this.props.userInfo.id}</TableCell>
        <TableCell><img src={this.props.userInfo.image}></img></TableCell>
        <TableCell>{this.props.userInfo.name}</TableCell>
        <TableCell>{this.props.userInfo.birthday}</TableCell>
        <TableCell>{this.props.userInfo.gender}</TableCell>
        <TableCell>{this.props.userInfo.job}</TableCell>
      </TableRow>
    );
  }
}

class CustomerProfile extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.image} alt="image"></img>
        <h2>
          {this.props.name} ({this.props.id})
        </h2>
      </div>
    );
  }
}

class CustomerInfo extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.birthday}</p>
        <p>{this.props.gender}</p>
        <p>{this.props.job}</p>
      </div>
    );
  }
}

export default Customer;
