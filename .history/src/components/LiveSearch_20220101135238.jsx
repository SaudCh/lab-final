import React from "react";
import Select from "react-select";

export default function LiveSearch(props) {
  const { val, setVal, data } = props;

  return (
    <div>
      <Select
        options={data}
        isClearable={true}
        placeholder={"Location"}
        value={val}
        onChange={(e) => setVal(e.target.value)}
        id="preference"
        isMulti
        //onChange={(e) => console.log(e.value)}
      />
    </div>
  );
}
