import React from "react";

// All of the props passed to this component are spread onto the input element
const Input = props => (
  <div className="input-group input-group-lg">
    <input className="form-control" type="text" {...props} />
  </div>
);

export default Input;
