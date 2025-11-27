import React, { useState, useEffect } from 'react';

const Toast = ({ message, show, onClose, type = 'info' }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div className={`toast-notification ${type}`}>
      <div className="toast-content">
        <span className="toast-icon">⚠️</span>
        <div className="toast-message">{message}</div>
      </div>
    </div>
  );
};

export default Toast;