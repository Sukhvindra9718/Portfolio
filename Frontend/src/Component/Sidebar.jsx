import React from "react";
import "./Sidebar.css";
import { CgMail } from "react-icons/cg";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { IoLocationOutline } from "react-icons/io5";
import { MdFacebook } from "react-icons/md";
import { IoLogoTwitter } from "react-icons/io5";
import { LuInstagram } from "react-icons/lu";

function Sidebar() {
  return (
    <section className="sidebar">
      <div class="sidebar-info">
        <div class="avatar-box">
          <img src="/images/my-avatar.png" alt="" />
        </div>
        <div class="info-content">
          <h1 class="name" title="Prateek Pandey">
            Prateek Pandey
          </h1>
          <p className="title">Web Developer</p>
        </div>
        <div className="seprator"></div>
      </div>

      <div class="sidebar-info_more">
        <ul class="contacts-list">
          <li class="contact-item">
            <div class="icon-box">
              <CgMail />
            </div>
            <div class="contact-info">
              <p class="contact-title">Email</p>
              <a href="mailto:prateekpandey736@gmail.com" class="contact-link">
                prateekpandey@gma...
              </a>
            </div>
          </li>

          <li class="contact-item">
            <div class="icon-box">
              <IoPhonePortraitOutline />
            </div>
            <div class="contact-info">
              <p class="contact-title">Phone</p>
              <a href="tel:+918687767493" class="contact-link">
                +918687767493
              </a>
            </div>
          </li>

          <li class="contact-item">
            <div class="icon-box">
              <SlCalender />
            </div>
            <div class="contact-info">
              <p class="contact-title">Birthday</p>
              <time datetime="1982-06-23">October 13, 1995</time>
            </div>
          </li>

          <li class="contact-item">
            <div class="icon-box">
              <IoLocationOutline />
            </div>
            <div class="contact-info">
              <p class="contact-title">Location</p>
              <address>Maruti nagar Varanasi</address>
            </div>
          </li>
        </ul>
        {/* <div class="seprator"></div> */}

        <ul class="social-list">
          <li class="social-item">
            <a href="#" class="social-link">
              <MdFacebook />
            </a>
          </li>

          <li class="social-item">
            <a href="#" class="social-link">
              <IoLogoTwitter />
            </a>
          </li>

          <li class="social-item">
            <a href="#" class="social-link">
              <LuInstagram />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Sidebar;
