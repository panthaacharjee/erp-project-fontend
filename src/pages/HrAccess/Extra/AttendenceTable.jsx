import React, { useState } from "react";

const AttendenceTable = ({ data, setData, val, ind }) => {
  const [status, setStatus] = useState("Absent");
  const [active, setActive] = useState(false);

  return (
    <tr className="">
      <td className="py-2 border-2 border-cyan-900">{ind + 1}</td>
      <td className="py-2 border-2 border-cyan-900">{val.name}</td>
      <td className="py-2 border-2 border-cyan-900">
        <select
          className="px-5 py-2 rounded-lg text-white"
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="Absent">Absent</option>
          <option value="Present">Present</option>
        </select>
      </td>
      <td className="py-2 border-2 border-cyan-900">
        {active ? (
          <button>Done</button>
        ) : (
          <button
            onClick={() => {
              setData([...data, { id: val._id, status: status }]),
                setActive(true);
            }}
          >
            Press
          </button>
        )}
      </td>
    </tr>
  );
};

export default AttendenceTable;
