import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col, Button } from "react-bootstrap";
import { TicketTable } from "../../components/ticket-table/TicketTable.comp";
import tickets from "../../assets/data/dummy-tickets.json";
import { PageBreadcrumb } from "../../components/breadcrumb/Breadcrumb.comp";
import { Link } from "react-router-dom";

import { fetchAllTickets } from "../ticket-list/ticketsAction";

export const Dashboard = () => {
  const dispatch = useDispatch();
  const { tickets } = useSelector((state) => state.tickets);

  useEffect(() => {
    if (!tickets.length) {
      dispatch(fetchAllTickets());
    }
  }, [tickets, dispatch]);

  const pendingTickets = tickets.filter((row) => row.status !== "Closed");
  const closedTickets = tickets.filter((row) => row.status === "Closed");
  const totalTickets = tickets.length;
  const highPriorityTickets = tickets.filter((row) => row.priority === "High").length;

  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page="Dashboard" />
        </Col>
      </Row>
      
      {/* Modern Stats Cards */}
      <Row className="mb-4">
        <Col md={3} className="mb-3">
          <div className="stats-card">
            <div className="stats-number">{totalTickets}</div>
            <div className="stats-label">Total Tickets</div>
          </div>
        </Col>
        <Col md={3} className="mb-3">
          <div className="stats-card">
            <div className="stats-number">{pendingTickets.length}</div>
            <div className="stats-label">Pending</div>
          </div>
        </Col>
        <Col md={3} className="mb-3">
          <div className="stats-card">
            <div className="stats-number">{closedTickets.length}</div>
            <div className="stats-label">Resolved</div>
          </div>
        </Col>
        <Col md={3} className="mb-3">
          <div className="stats-card">
            <div className="stats-number">{highPriorityTickets}</div>
            <div className="stats-label">High Priority</div>
          </div>
        </Col>
      </Row>

      {/* Quick Actions */}
      <Row className="mb-4">
        <Col className="text-center">
          <Link to="/add-ticket">
            <Button className="btn-modern" size="lg">
              <i className="fas fa-plus me-2"></i>
              Create New Ticket
            </Button>
          </Link>
        </Col>
      </Row>

      {/* Recent Tickets */}
      <Row>
        <Col>
          <div className="modern-card">
            <h4 className="mb-3">
              <i className="fas fa-ticket-alt me-2"></i>
              Recent Tickets
            </h4>
            <TicketTable tickets={tickets.slice(0, 5)} />
            <div className="text-center mt-3">
              <Link to="/tickets">
                <Button variant="outline-primary">View All Tickets</Button>
              </Link>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
