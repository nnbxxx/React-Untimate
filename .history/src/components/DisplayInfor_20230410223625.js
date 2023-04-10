import React from "react";
import "./DisplayInfor.scss";
import logo from "./../logo.svg";
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
      <div className='display-infor-container'>
        {/* <img src={logo} /> */}
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
          <>
            {listUsers.map((item) => {
              return (
                <div key={item.id} className={+item.age > 18 ? "green" : "red"}>
                  <div>My name's {item.name}</div>
                  <div>My age's {item.age}</div>
                  <button onClick={this.props.handleRemoveUserInfor(item.id)}>
                    {" "}
                    Delete
                  </button>
                  <hr></hr>
                </div>
              );
            })}
          </>
        )}
      </div>
    );
  }
}
export default DisplayInfor;
