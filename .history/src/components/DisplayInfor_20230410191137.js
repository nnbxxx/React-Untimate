import React from "react";

class DisplayInfor extends React.Component {
  render() {
    const { listUsers } = this.props;
    return (
      <div>
        {listUsers.forEach((item) => {
          return;
        })}
      </div>
    );
  }
}
export default DisplayInfor;
