import React from "react";

class DisplayInfor extends React.Component {
  state = {
    isHide: true;
  }
  render() {
    const { listUsers } = this.props;
    return (
      <div>
        <div onClick={() => {}}>Hide list users</div>
        <div>
          {listUsers.map((item) => {
            return (
              <div key={item.id} className={item.age >= 30 ? "red" : "green"}>
                <div>My name's {item.name}</div>
                <div>My age's {item.age}</div>
                <hr></hr>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default DisplayInfor;
