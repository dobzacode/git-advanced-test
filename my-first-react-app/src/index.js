import React, { Component, component } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import reportWebVitals from "./reportWebVitals";

const Link1 = () => {
  return (
    <button>
      <a>Link1</a>
    </button>
  );
};

const Link2 = () => {
  return (
    <button>
      <a>Link2</a>
    </button>
  );
};

const Link3 = () => {
  return (
    <button>
      <a>Link3</a>
    </button>
  );
};

const Link4 = () => {
  return (
    <button>
      <a>Link4</a>
    </button>
  );
};

class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="flex justify-around mt-4">
        <Link1 />
        <Link2 />
        <Link3 />
        <Link4 />
      </div>
    );
  }
}

class ColLeft extends Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {}

  render() {
    return (
      <button onClick={this.props.method}>
        <div className="bg-black p-10">
          <p className="text-white">{this.props.count}</p>
        </div>
      </button>
    );
  }
}

const ColMid = () => {
  return (
    <div className="bg-white p-10" id="2">
      <p className="text-black">bite</p>
    </div>
  );
};

class ColRight extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const [a, b, c] = this.props.mokhtar;
    return (
      <div className="bg-white p-10">
        {this.props.mokhtar.map(function namesIterator(item, i) {
          return (
            <p key={i} className="bg-black text-white p-10 m-4">
              "Ma mère" {item}
            </p>
          );
        })}
      </div>
    );
  }
}

class Body extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    this.count = this.count.bind(this);
  }

  count() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    return (
      <div className="flex justify-around mt-10">
        <ColLeft title="left" method={this.count} count={this.state.count} />
        <ColMid title="mid" />
        <ColRight title="right" />
      </div>
    );
  }
}

class Main extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <Body></Body>
      </div>
    );
  }
}

ColRight.defaultProps = {
  mokhtar: [1, 2, 3],
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
