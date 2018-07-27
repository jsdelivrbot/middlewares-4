import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions/index";

class UserList extends React.Component {
  componentWillMount() {
    this.props.fetchUsers();
  }
  render() {
    return (
      <div className="card card-block">
        {console.log("props", this.props)}
        {this.props.users.map((user, index) => {
          return (
            <div key={index}>
              <h4 className="card-title">{user.name}</h4>
              <p className="card-text">Choose Factory</p>
              <a className="btn btn-primary">Email</a>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { users: state.users };
};

export default connect(
  mapStateToProps,
  actions
)(UserList);
