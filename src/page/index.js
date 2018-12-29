import React, { Component } from "react";
import Link from "umi/link";

class Index extends Component {
  state = {};
  render() {
    return (
      <ul>
        <li>
          <Link to="/puzzlecards">/puzzlecards</Link>
        </li>
      </ul>
    );
  }
}

export default Index;
