import React, { Component } from 'react';
import { connect } from "react-redux";
import './index.css';

class TeachersPage extends Component {
  render() {
    const {students:{name}} = this.props
    return (
      <div className="App">
        TeachersPage{name}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { students } = state;
  return { students };
};

export default connect(mapStateToProps)(TeachersPage);
