import React from 'react';
import './Loading.css';

const Loading = ({ loading }) => {
  if (!loading) return null;

  return (
    <div className="loading-overlay">
      <div className="loading-spinner">
        <p>Loading...</p>
      </div>
    </div>
  );
};

export default Loading;


.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.8);  /* Light blur effect */
  backdrop-filter: blur(5px);  /* Apply background blur */
  z-index: 9999;  /* High z-index to stay on top of everything */
  display: flex;
  align-items: center;
  justify-content: center;
}

.loading-spinner {
  text-align: center;
  font-size: 1.5rem;
  color: #333;
  animation: fadeInOut 2s infinite;
}

@keyframes fadeInOut {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}
