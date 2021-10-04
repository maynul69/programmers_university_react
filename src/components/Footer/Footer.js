import React from 'react';

const Footer = () => {
    const style={
        color:'white',
        backgroundColor:'blueviolet',
        padding: '10px 0'
    }
    return (
      <div style={style}>
        <h3>Programmers University</h3>
        <h6>
          Road 6, Block B, Ashulia Model Town Savar, Dhaka-1345, Bangladesh.
        </h6>
        <p>+8809602666651, +8809602666652</p>
        <b>info@programmersrnuni.edu</b>
        <p>
          <b>For Admission :</b> +8801844169651, +8801844169659, +8801844169660,
          +8801741300002
        </p>
      </div>
    );
};

export default Footer;