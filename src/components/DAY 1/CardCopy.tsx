// import editIcon from "../../assets/icons8-1edit-64.png";
// import deleteIcon from "../../assets/icons8-delete-100.png";

import { Component } from "react";

interface typeCard {
  description: string;
}

interface typeFunction {
  status: Boolean;
}

export class CardCopy extends Component<typeCard> {
  state: typeFunction = {
    status: false,
  };

  changeStatus = () => {
    const { status } = this.state;
    this.setState({ status: !status });
  };

  render() {
    const { description } = this.props;
    return (
      <div className="flex justify-evenly items-start p-4">
        <div className="flex items-center justify-evenly gap-2 p-4 w-[92vw] bg-slate-200 rounded-md">
          <div className="left w-4/5">
            <p className="text-slate-600 text-sm">{description}</p>
          </div>
          <div className="right w-[35%] flex-col justify-center items-center gap-2 ">
            <button onClick={this.changeStatus} className={`${!this.state.status ? `bg-yellow-400` : `bg-green-500`} w-full text-white flex justify-center items-center`}>
              {!this.state.status ? "Process" : "Completed"}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default CardCopy;
