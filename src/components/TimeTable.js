import React from "react";
import "bulma/css/bulma.min.css";
class TimeTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      offset: props.offset,
    };
    this.time = setInterval(() => {
      this.tick(this.props.offset, 1000);
    });
  }

  tick(offset) {
    const d = new Date();
    const utc = d.getTime() + d.getTimezoneOffset() * 60000;
    const newDate = new Date(utc + 3600000 * offset);
  }
  render() {
    return (
      <div className="card">
        <div className="card-header">
          <h1 className="card-header-title subtitle">{this.props.city}</h1>
        </div>
        <div className="card-content">
          <p>
            L'orario di {this.props.offset} ({this.props.offset}) è{" "}
            {new Date().toLocaleTimeString()}
          </p>
        </div>
      </div>
    );
  }
}

export default TimeTable;
