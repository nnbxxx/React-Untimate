import React from "react";
import "./DisplayInfor.scss";
import logo from "./../logo.svg";
// class DisplayInfor extends React.Component {
//   render() {
//     const { listUsers } = this.props;
//     return (
//       <div className='display-infor-container'>
//         {true && (
//           <>
//             {listUsers.map((item) => {
//               return (
//                 <div key={item.id} className={+item.age > 18 ? "green" : "red"}>
//                   <div>My name's {item.name}</div>
//                   <div>My age's {item.age}</div>
//                   <button
//                     onClick={() => {
//                       this.props.handleRemoveUserInfor(item.id);
//                     }}
//                   >
//                     {" "}
//                     Delete
//                   </button>
//                   <hr></hr>
//                 </div>
//               );
//             })}
//           </>
//         )}
//       </div>
//     );
//   }
// }
const DisplayInfor = (props) => {
  const { listUsers } = props;
  return (
    <div className='display-infor-container'>
      <div></div>
      {true && (
        <>
          {listUsers.map((item) => {
            return (
              <div key={item.id} className={+item.age > 18 ? "green" : "red"}>
                <div>My name's {item.name}</div>
                <div>My age's {item.age}</div>
                <button
                  onClick={() => {
                    props.handleRemoveUserInfor(item.id);
                  }}
                >
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
};
export default DisplayInfor;
