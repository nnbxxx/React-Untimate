import React from "react";

class DisplayInfor extends React.Component {
  const {name,age} = this.props;
  render() {
    return (
      <div>
        <div>My name is nnb</div>
        <div>My age is 19</div>
      </div>
    );
  }
}
export default DisplayInfor;
