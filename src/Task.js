import React from "react";
import { formatDistanceToNow, differenceInDays } from "date-fns";

const Task = ({ taskObj, onComplete }) => {
  const teslimTarihi = new Date(taskObj.deadline);
  const bugun = new Date();
  const fark = differenceInDays(teslimTarihi, bugun);

  const deadlineStyle = {
    backgroundColor: fark <= 3 ? "#ffd9d4" : "#f0abfc",
  };

  const ayarlama =
    fark > 0
      ? `${fark} gün sonra`
      : formatDistanceToNow(teslimTarihi, { addSuffix: true });

  return (
    <div className="px-5 py-5 bg-white rounded leading-6 mt-16 shadow-md">
      <h3 className="text-lg text-amber-500 mb-5">{taskObj.title}</h3>
      <div>
        son teslim:{" "}
        <span className="text-xs pt-4 " style={deadlineStyle}>
          {ayarlama}
        </span>
      </div>
      <p className="text-sm py-3 text-indigo-900">{taskObj.description}</p>
      <div>
        {taskObj.people.map((p) => (
          <span
            className="inline-block p-2 text-sm border border-black mr-4 mb-6 rounded-3xl"
            key={p}
          >
            {p}
          </span>
        ))}
      </div>
      {onComplete && (
        <button
          className="p-2 block ml-auto bg-amber-500 shadow-md rounded cursor-pointer"
          onClick={() => onComplete(taskObj.id)}
        >
          Tamamlandı
        </button>
      )}
    </div>
  );
};

export default Task;
