import React from "react";
import "./leftbar.css";
function leftbar() {
  return (
    <div style={{ width: 202 }}>
      <div className="fa-ul list-group-custom">
        <a className="list-group-item" href="#">
          <i
            className="fa fa-tachometer fa-fw text-secondary"
            aria-hidden="true"
          ></i>
          &nbsp; Dashboard
        </a>
        <a className="list-group-item pt-2" href="#">
          <i
            className="fa fa-bell-o fa-fw text-secondary"
            aria-hidden="true"
          ></i>
          &nbsp; Notification
        </a>
        <a className="list-group-item pt-2" href="#">
          <i
            className="fa fa-sticky-note-o fa-fw text-secondary"
            aria-hidden="true"
          ></i>
          &nbsp; Notes
        </a>
        <a className="list-group-item pt-2" href="#">
          <i
            className="fa fa-tasks fa-fw text-secondary"
            aria-hidden="true"
          ></i>
          &nbsp; Tasks
        </a>
        <a className="list-group-item pt-2" href="#">
          <i
            className="fa fa-envelope-o fa-fw text-secondary"
            aria-hidden="true"
          ></i>
          &nbsp; Email
        </a>
        <a className="list-group-item pt-2" href="#">
          <i
            className="fa fa-calendar fa-fw text-secondary"
            aria-hidden="true"
          ></i>
          &nbsp; Calender
        </a>
      </div>

      <div className="fa-ul list-group-custom pt-3 fs-6">
        <span className="list-group-item pb-2">DATABASE</span>
        <a className="list-group-item" href="#">
          <i
            className="fa fa-line-chart fa-fw text-secondary"
            aria-hidden="true"
          ></i>
          &nbsp; Analysis
        </a>
        <a className="list-group-item pt-2" href="#">
          <i
            className="fa fa-users fa-fw text-secondary"
            aria-hidden="true"
          ></i>
          &nbsp; Contact
        </a>
        <a className="list-group-item pt-2" href="#">
          <i
            className="fa fa-briefcase fa-fw text-secondary"
            aria-hidden="true"
          ></i>
          &nbsp; Componies
        </a>
      </div>

      <div className="fa-ul list-group-custom pt-3 fs-6 pb-5">
        <a className="list-group-item" href="#">
          <i
            className="fa fa-th-large fa-fw text-secondary"
            aria-hidden="true"
          ></i>
          &nbsp; Intergrations
        </a>
        <a className="list-group-item pt-2" href="#">
          <i className="fa fa-cog fa-fw text-secondary" aria-hidden="true"></i>
          &nbsp; Settings
        </a>
      </div>
    </div>
  );
}

export default leftbar;
