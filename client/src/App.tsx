import axios from "axios";
import React from "react";
import "./App.css";

function App() {
  const [type, setType] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [datashow, setDatashow] = React.useState({ type: "", description: "" });

  const newdata = async (data: any) => {
    if (type && description) {
      const response = await axios.post(`http://localhost:8001/store`, data);
      setDatashow(response.data);
      setType("");
      setDescription("");
      return response.data;
    }
  };

  return (
    <div className="App">
      {datashow && (
        <div className="app-head">
          <h1>
            <span>Type: </span>
            {datashow.type}
          </h1>
          <h1>
            <span>Description: </span>
            {datashow.description}
          </h1>
        </div>
      )}

      <div className="details-form">
        <div className="form-row">
          <label>Type</label>
          <input
            type="text"
            value={type}
            required={true}
            onChange={(e) => setType(e.target.value)}
          />
        </div>
        <div className="form-row">
          <label>Description</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button
          disabled={!type && !description}
          onClick={() => newdata({ type, description })}
        >
          Send
        </button>

        {/* <button
          // eslint-disable-next-line no-restricted-globals
          onClick={() => handleChange(event)}
        >
          Send
        </button> */}
      </div>
    </div>
  );
}

export default App;
