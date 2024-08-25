import React, { useEffect, useState } from "react";
import "./index.css";

const Tabledata = ({ data, filtered }) => {
  const dataTable = data?.data || [];
  const filteredData = filtered || [];
  const [tableData, setTableData] = useState([]);


  useEffect(() => {
    setTableData(filtered ? filteredData : dataTable);
  }
    , [filteredData]);

  return (
    <>
      {dataTable.length === 0 ? (
        <p>No Result Found</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Place Name</th>
              <th>Country</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.city}</td>
                <td>
                    <div className="groupData">
                  <img
                    src={`https://flagsapi.com/${item.countryCode}/flat/32.png`}
                    alt={`${item.country} flag`}
                  />
                  {item.country}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Tabledata;
