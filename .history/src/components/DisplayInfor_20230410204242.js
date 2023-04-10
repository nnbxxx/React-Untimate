import React from "react";

class DisplayInfor extends React.Component {
  state = {
    isShowListUser: true,
  };
  handleHideShow = () => {
    this.setState({ isShowListUser: !this.state.isShowListUser });
  };
  render() {
    const { listUsers } = this.props;
    return (
      <div>
        <div
          onClick={() => {
            this.handleHideShow();
          }}
        >
          {this.state.isShowListUser === true
            ? "Hide list users"
            : "Show list users"}
        </div>
        {this.state.isShowListUser && (
          <div>
            {listUsers.map((item) => {
              return (
                <div key={item.id} className={item.age < 18 ? "red" : "green"}>
                  <div>My name's {item.name}</div>
                  <div>My age's {item.age}</div>
                  <hr></hr>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}
export default DisplayInfor;
