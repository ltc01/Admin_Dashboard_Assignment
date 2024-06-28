import React, { useContext } from "react";
import { MainContext } from "../context/TransactionProvider";
const FilterBar = () => {
  const { filterStatus, setFilterStatus } = useContext(MainContext);

  const handleFilter = (e) => {
    setFilterStatus(e.target.value);
  };

  return (
    <div className="flex flex-col">
      <span className="font-semibold text-lg">Filter:</span>
      <select
        name="trans"
        id="trans"
        value={filterStatus}
        onChange={handleFilter}
        className="border h-fit w-28 border-slate-500 mt-1 rounded-xl text-slate-600 px-2"
      >
        <option value="">All</option>
        <option value="Pending">Pending</option>
        <option value="Approved">Approved</option>
        <option value="Rejected">Rejected</option>
      </select>
    </div>
  );
};

export default FilterBar;
