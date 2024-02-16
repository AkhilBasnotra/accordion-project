import data from "./data";
import { useState } from "react";
import "./styles.css";

let Accordian = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  let handleSingleSelection = (getCurrentId) => {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  };

  let handleMultiSelection = (getCurrentId) => {
    let copyMultiple = [...multiple];
    let findIndexOfCurrentId = copyMultiple.indexOf(getCurrentId);
    if (findIndexOfCurrentId === -1) copyMultiple.push(getCurrentId);
    else copyMultiple.splice(findIndexOfCurrentId, 1);

    setMultiple(copyMultiple);
  };

  console.log(selected);
  return (
    <div className="wrapper">
      <button onClick={() => setMultiSelection(!enableMultiSelection)}>
        Enable Multi-Selection
      </button>
      <div className="accordian">
        {data && data.length > 0
          ? data.map((dataItem) => (
              <div key={dataItem.id} className="item">
                <div
                  onClick={
                    enableMultiSelection
                      ? () => handleMultiSelection(dataItem.id)
                      : () => handleSingleSelection(dataItem.id)
                  }
                  className="title"
                >
                  <h3>{dataItem.question}</h3>
                  <span>+</span>
                </div>
                {selected === dataItem.id ||
                multiple.indexOf(dataItem.id) !== -1 ? (
                  <div className="content">{dataItem.answer}</div>
                ) : null}
              </div>
            ))
          : "No Data Found"}
      </div>
    </div>
  );
};

export default Accordian;
