import React from 'react';
import { FaBell } from 'react-icons/fa';

const Notify= ({ count }) => {
  return (
    <div className="notification-icon">
      <FaBell size={24} />
      {count > 0 && <span className="badge">{count}</span>}
    </div>
  );
}

export default Notify;
