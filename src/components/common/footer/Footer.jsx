import React from "react";
import { footer } from "../../data/Data";
import "./footer.css";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <section className='footerContact'>
        <div className='container'>
          <div className='send flex'>
            <Grid container spacing={2}>
              <Grid item sm={12} md={7}>
                <div className='text'>
                  <h1>Do You Have Questions ?</h1>
                  <p>We'll help you to grow your career and growth.</p>
                </div>
              </Grid>
              <Grid item sm={12} md={5}>
                <Link to='/contact'><button className='btn5 unique-btn contact-btn'>Contact Us</button></Link>
              </Grid>
            </Grid>
          </div>
        </div>
      </section>

      <footer className='responsive-footer'>
        <div className='container'>
          <div className='box'>
            <div className='logo'>
              <img src='../images/logo-light.png' alt='' />
              <h2>Do You Need Help With Anything?</h2>
              <p>Receive updates, hot deals, tutorials, discounts sent straight to your inbox every month.</p>

              <div className='input flex'>
                <input type='text' placeholder='Email Address' />
                <button className='subscribe-btn unique-subscribe-btn'>Subscribe</button>
              </div>
            </div>
          </div>

          {footer.map((val) => (
            <div className='box' key={val.title}>
              <h3>{val.title}</h3>
              <ul>
                {val.text.map((items, index) => (
                  <Link to={items.path}><li key={index}>{items.list}</li></Link>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
      <div className='legal'>
        <span>© 2024 Arena. Designed By Power Rangers.</span>
      </div>
    </>
  );
};

export default Footer;
