import React from "react";
import { formatDistanceToNow, differenceInDays } from "date-fns";

const Task = ({ taskObj, onComplete }) => {
  const teslimTarihi = new Date(taskObj.deadline);

  const bugun = new Date();

  const fark = differenceInDays(teslimTarihi, bugun);

  const ayarlama =
    fark > 0
      ? `${fark} gün sonra`
      : formatDistanceToNow(teslimTarihi, { addSuffix: true });

  return (
    <div className="task">
      <h3>{taskObj.title}</h3>
      <div className={`deadline ${fark <= 1 ? "urgent" : ""}`}>
        son teslim: <span>{ayarlama}</span>
      </div>
      <p>{taskObj.description}</p>
      <div>
        {taskObj.people.map((p) => (
          <span className="pill" key={p}>
            {p}
          </span>
        ))}
      </div>
      {onComplete && (
        <button onClick={() => onComplete(taskObj.id)}>Tamamlandı</button>
      )}
    </div>
  );
};

export default Task;
