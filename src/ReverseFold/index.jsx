import { useState } from "react";
import { Table } from "react-bootstrap";

const ReverseDetail = () => {
  const handleReverse = () => {
    console.log("clicked");
  };

  return (
    <>
      <div className="container">
        <h3>This is a demostration</h3>

        <div className="tableData">
          <Table>
            <th>Entry Id</th>
            <th> Type</th>
            <th> Account</th>
            <tbody>
              <tr>
                <td>1001</td>
                <td>Liability</td>
                <td>Savings</td>
              </tr>
              <tr>
                <td>1002</td>
                <td>Assets</td>
                <td>Fixed</td>
              </tr>
            </tbody>
          </Table>
        </div>

        <div className="btn btn-primary" onClick={handleReverse}>
          Reverse
        </div>
      </div>
    </>
  );
};

export default ReverseDetail;
