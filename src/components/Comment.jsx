import { useState, useEffect } from "react";
import produce from "immer";

const Comment = (props) =>
  props.data.map((comment) => <div>{comment.text}</div>);

export default () => {
  const initialData = [
    // {
    //   text: "Hey"
    // },
    // {
    //   text: "there"
    // },
    { text: "Loading Notes ... " }
  ];
  const [data, setData] = useState(initialData);

  const handleCLick = () => {
    const text = document.querySelector("#commentinput").value.trim();
    if (text) {
      const nextState = produce(data, (draftState) => {
        draftState.push({ text });
      });
      document.querySelector("#commentinput").value = "";

      if (typeof window !== "undefined") {
        localStorage.setItem("data", JSON.stringify(nextState));
      }
      setData(nextState);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const getData = localStorage.getItem("data");
      if (getData !== "" && getData !== null) {
        return setData(JSON.parse(getData));
      }
      return setData([]);
    }
  }, 0);

  return (
    <>
      <Comment data={data} />
      <input
        id="commentinput"
        style={{ width: "80%", height: "10em" }}
        type="text"
        placeholder="Masukkan komentar..."
      />
      <button onClick={() => handleCLick()}>Tambah komentar</button>
    </>
  );
};
