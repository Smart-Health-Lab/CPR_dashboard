import { Component } from "react";
import { Input, Button } from "antd";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div style={{ margin: 20, fontSize: 20 }}>
          CPR dashboard socket test
        </div>
        <div style={{ display: "flex", margin: 10 }}>
          <Input placeholder="재세동 " style={{ width: "20vw" }} />
          <Button>submit</Button>
        </div>
        <div style={{ display: "flex", margin: 10 }}>
          <Input placeholder="nonSustainedROSC" style={{ width: "20vw" }} />
          <Button>submit</Button>
        </div>
        <div style={{ display: "flex", margin: 10 }}>
          <Input placeholder="epinephrine" style={{ width: "20vw" }} />
          <Button>submit</Button>
        </div>
        <div style={{ display: "flex", margin: 10 }}>
          <Input placeholder="amiodarone" style={{ width: "20vw" }} />
          <Button>submit</Button>
        </div>
      </div>
    );
  }
}

export default App;
