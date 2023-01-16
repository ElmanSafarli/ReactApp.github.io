import React from "react";
import "./groups.css";

const Groups = () => {
  return (
    <div className="groups">
      <div className="groups-content">
        <div className="groups-title">
          <h1>
            Integrate <span>Antic Groups</span> <br /> within minutes
          </h1>
          <p>
            Add co-ownership capabilities that unlock new revenue <br /> models
            with just a few lines of code.
          </p>
        </div>
        <div className="groups-adittional-info">
          <div className="groups-left">
            <input className="input-code" type="text"></input>
          </div>
          <div className="groups-right">
            <div>
              <h3>Get your credentials</h3>
              <p>
                To start integrating, hit the Get API key button below and
                contact us.
              </p>
            </div>
            <div>
              <h3>Install the NPM package</h3>
              <p>This should take less than a minute.</p>
            </div>
            <div>
              <h3>Integrate the React snippet and customize it</h3>
              <p>
                After embedding the snippet, you can easily customize it. Check
                out our documentation for instructions.
              </p>
            </div>
            <div className="groups-btn">
              <button className="group-api-btn">Get API key</button>
              <button className="group-documentation-btn">
                Read documentation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Groups;
