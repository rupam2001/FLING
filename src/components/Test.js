import React, { useState, useEffect } from "react";

function Test() {
  const [name, updateName] = useState({ firstName: "", lastName: "" });

  useEffect(() => {
    console.log(name);
    console.log(name.firstName);
  });
  return (
    <div>
      <input
        value={name.firstName}
        onChange={e => updateName({ ...name, firstName: e.target.value })}
      />
      <input
        value={name.lastName}
        onChange={e => updateName({ ...name, lastName: e.target.value })}
      />
    </div>
  );
}

export default Test;
