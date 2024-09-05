import { Button, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import axios from '../../utils/axios';

import './docslot.css';

const Docslot = () => {
  const [appointments, setAppointments] = useState([]);
  const doctorId = localStorage.getItem('id');

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get(`/appointment/doctor/${doctorId}`);
        setAppointments(response.data);
      } catch (error) {
        console.error('Error fetching appointments:', error);
      }
    };

    fetchAppointments();
  }, [doctorId]);
  const handleStatusChange = async (appointmentId, status) => {
    try {
      await axios.patch(`/appointment/update/${appointmentId}`, { status });
      setAppointments(prev =>
        prev.map(appt =>
          appt._id === appointmentId ? { ...appt, status } : appt
        )
      );
    } catch (error) {
      console.error('Error updating appointment status:', error);
    }
  };

  const columns = [
    {
      title: 'Patient Name',
      dataIndex: 'fullname',
      key: 'fullname',
    },
    {
      title: 'Mobile number',
      dataIndex: 'mobilenumber',
      key: 'number',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      render: text => new Date(text).toLocaleDateString(),
    },
    {
      title: 'Time',
      dataIndex: 'time',
      key: 'time',
    },
    {
      title: 'Message',
      dataIndex: 'reason',
      key: 'reason',
    },
    {
      title: 'Status',
      key: 'status',
      render: (_, record) => (
        <div>
          <Button
            type="primary"
            onClick={() => handleStatusChange(record._id, 'Accepted')}
            disabled={record.status === 'Accepted'}
            style={{ marginRight: 8 }}
          >
            Accept
          </Button>
          <Button
            type="danger"
            onClick={() => handleStatusChange(record._id, 'Rejected')}
            disabled={record.status === 'Rejected'}
          >
            Reject
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div className="doc-home">
      <div className="doc-contents">
        <h2>Appointments</h2>
        <div className="appointment-table">
          <Table dataSource={appointments} columns={columns} rowKey="_id" />
        </div>
      </div>
    </div>
  );
};
export default Docslot;
