import React, { useState } from 'react';

const UseState = () => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload
    console.log(name);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name</label><br />
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter the name"
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UseState;