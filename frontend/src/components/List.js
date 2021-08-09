import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
// import { Table, Button } from "react-bootstrap";
// import { Link } from "react-router-dom";
import "../index.css";
// import EmployeeService from "./Services";
import ReactTable from "./ReactTable";

function List() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    loadApi();
  }, []);

  const loadApi = async () => {
    const result = await axios.get("http://localhost:3022/employees");
    setEmployees(result.data);
    console.log(result.data);
  };

  const columns = useMemo(
    () => [
      {
        Headers: "#",
        accessor: "i",
      },
      {
        Header: "firstName",
        accessor: "firstName",
      },
      {
        Header: "lastName",
        accessor: "lastName",
      },
      {
        Header: "E-mail",
        accessor: "email",
      },
      {
        Header: "Phone",
        accessor: "phone",
      },
    ],
    []
  );

  return (
    <div>
      <ReactTable columns={columns} data={employees} />
    </div>
  );
}

export default List;
