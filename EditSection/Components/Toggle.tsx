import { useData } from "@/store/useData";
import React from "react";

type tp = "search"
const Toggle = ({ type }: any) => {
    const {data,selectedSection,setData}=useData()
  return (
    <div className="form-control">
      <label className="label cursor-pointer">
        <span className="label-text">Show search</span>
        <input
          onClick={() =>
            setData(
              data.map((s, i) =>
                i == selectedSection
                  ? {
                      ...s,
                      props: { ...s.props, [type]: !s.props.[type] },
                    }
                  : s
              )
            )
          }
          checked={data[selectedSection || 0].props.[type]}
          type="checkbox"
          className="toggle toggle-primary"
        />
      </label>
    </div>
  );
};

export default Toggle;
