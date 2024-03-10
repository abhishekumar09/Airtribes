import React from "react";
import Card from "./Card";
import AddNew from "./AddNew";
import { useSelector } from "react-redux";
import { deleteList } from "../store/listSlice";
import { useDispatch } from "react-redux";

const List = () => {
  const listItem = useSelector((store) => store.listSlice.list);
  const dispatch = useDispatch();
  const deleteListFn = (id) => {
    console.log("id", id);
    dispatch(deleteList({id}));
  };
  return (
    <>
      {listItem.map((list) => (
        <div className="p-3 w-full md:w-1/3" key={list.id}>
          <div
            className={`p-3 bg-gray-100`}
          >
            <div className="mb-4">
              {list.title}
              <button
                title="Delete List"
                onClick={() => deleteListFn(list.id)}
                className="text-red-600 float-right font-bold"
              >
                x
              </button>
            </div>
            {list?.children?.length > 0 &&
              list.children.map((children) => (
                <Card key={children.id} cardInfo={children} />
              ))}
            <div className="mt-3">
              <AddNew type="card" parentId={list.id} />
            </div>
          </div>
        </div>
      ))}

      <div className="p-3 w-full md:w-1/3">
        <div className={`p-3 bg-gray-100 `}>
          <AddNew />
        </div>
      </div>
    </>
  );
};

export default List;
