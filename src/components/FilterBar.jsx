import React, {useContext} from "react";
import { MainContext } from "../context/TransactionProvider";
const FilterBar = () => {
  const { filterStatus, setFilterStatus } = useContext(MainContext)
  
  const handleFilter = (e) => {
    setFilterStatus(e.target.value);
  };

  
  return (
    <>
      <select name="trans" id="trans" value={filterStatus}
      onChange={handleFilter}
      >
        <option value="">All</option>
        <option value="Pending">Pending</option>
        <option value="Approved">Approved</option>
        <option value="Rejected">Rejected</option>
      </select>
    </>
  );
};

export default FilterBar;
