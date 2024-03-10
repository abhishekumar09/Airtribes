import React, { useState, useRef } from "react";
import { addList, addCard } from "../store/listSlice";
import { useDispatch } from "react-redux";
const AddNew = ({ type, parentId }) => {
  const [inputVal, setInputVal] = useState("");
  const [isFormVisible, setIsFormVisible] = useState(false);
  // console.log("type", type);

  const dispatch = useDispatch();
  const forminput = useRef(null);
  const submitHandler = (e) => {
    e.preventDefault();
    if (!inputVal) {
      forminput.current.focus();
      return;
    }
    if (type) {
      dispatch(
        addCard({ id: Math.random(), title: inputVal, parentId: parentId })
      );
    } else {
      dispatch(addList({ id: Math.random(), title: inputVal }));
    }
    hideForm();
    setInputVal("");
  };

  const updateInput = (e) => {
    setInputVal(e.target.value);
  };

  const openForm = () => {
    setIsFormVisible(true);
  };

  const hideForm = () => {
    setIsFormVisible(false);
  };
  return (
    <div>
      <button onClick={openForm}>+ Add {type ? "a card" : " list"}</button>
      {isFormVisible && (
        <form onSubmit={submitHandler} className="mt-3">
          <input
            autoFocus
            ref={forminput}
            value={inputVal}
            onChange={updateInput}
            className="w-full h-10 p-2"
            placeholder={type ? "Enter a title for this card..." : "Enter list title..."}
          />
          {/* <span></span> */}
          <div className="mt-3">
            <button type="button" onClick={hideForm} className="mr-3 ">
              Cancel
            </button>
            <button type="submit" className="px-3 py-1 bg-blue-500 text-white">
              Save
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default AddNew;
