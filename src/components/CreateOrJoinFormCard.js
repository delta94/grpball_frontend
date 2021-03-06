import React, { Component } from "react";
import { Segment } from "semantic-ui-react";
import CreateGroup from "./CreateGroup";

export default class CreateOrJoinFormCard extends Component {
  render() {
    return (
      <Segment padded>
        <CreateGroup handleNewGroupSubmit={this.props.handleNewGroupSubmit} />
      </Segment>
    );
  }
}
