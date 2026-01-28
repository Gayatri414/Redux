import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTabs } from "../redux/features/searchSlice";

const Tabs = () => {
  const tabs = ['photos', 'videos'];
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.search.activeTab);

  return (
    <div className="flex gap-10 p-10">
      {tabs.map((elem, idx) => (
        <button 
          key={idx}
          onClick={() => dispatch(setActiveTabs(elem))}
          className={`
            ${activeTab === elem ? 'bg-blue-700' : 'bg-gray-600'}
            cursor-pointer transition active:scale-95 px-5 py-2 rounded text-white capitalize
          `}
        >
          {elem}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
