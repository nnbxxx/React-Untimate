import React from "react";

class DisplayInfor extends React.Component {
  render() {
    const { listUsers } = this.props;
    return (
      <div>
        {listUsers.map((item) => {
          return (
            <div>
              <div>My name's {item.name}</div>
            </div>
          );
        })}
      </div>
    );
  }
}
export default DisplayInfor;
