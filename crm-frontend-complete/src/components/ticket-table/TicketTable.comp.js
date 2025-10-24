import React from "react";
import { useSelector } from "react-redux";

import { Table } from "react-bootstrap";

import { Link } from "react-router-dom";

export const TicketTable = ({ tickets = null }) => {
  const { searchTicketList, isLoading, error } = useSelector(
    (state) => state.tickets
  );
  
  // Use passed tickets prop or fallback to searchTicketList
  const displayTickets = tickets || searchTicketList;
  
  if (error) return (
    <div className="alert alert-danger text-center">
      <i className="fas fa-exclamation-triangle me-2"></i>
      {error}
    </div>
  );

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Subjects</th>
          <th>Status</th>
          <th>Opened Date</th>
        </tr>
      </thead>
      <tbody>
        {displayTickets && displayTickets.length ? (
          displayTickets.map((row) => (
            <tr key={row._id}>
              <td>{row._id}</td>
              <td>
                <Link to={`/ticket/${row._id}`}>{row.subject}</Link>
              </td>
              <td>{row.status}</td>
              <td>{row.openAt && new Date(row.openAt).toLocaleString()}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="4" className="text-center py-4">
              <div className="text-dark">
                No tickets
              </div>
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};
