import React from 'react';

export default function Contact({isDarkMode}) {
  return (
    <div className={`contact ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className='heading'>
        <h1>Contact Us</h1>
        <p>Created by : Bhargav Sri Ram</p>
        <p>Email Address : kasukurthubhargav@gmail.com</p>
        <p>Github link : <a href="https://github.com/sriram1224">https://github.com/sriram1224</a></p>
      </div>
    </div>
  );
}