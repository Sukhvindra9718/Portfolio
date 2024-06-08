import React from "react";
import { FiBookOpen } from "react-icons/fi";
import "../../Component/Resume.css";
function Resume() {
  return (
    <section className="Main-Content">
      <div className="resume-title">
        <h1>Resume</h1>
      </div>
      <div className="timeline-container">
        <section>
          <div className="timeline-line"></div>
          <div className="icon-box">
            <FiBookOpen />
          </div>
          <div className="dot-container">
            <div className="outer-dot">
              <div className="inner-dot"></div>
            </div>
            <div className="outer-dot">
              <div className="inner-dot"></div>
            </div>
            <div className="outer-dot">
              <div className="inner-dot"></div>
            </div>
          </div>
        </section>
        <section className="resume-timeline">
          <div className="title-wrapper">
            <h3>Education</h3>
          </div>

          <ul className="timeline-list">
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">
                University school of the arts
              </h4>

              <span>2007 — 2008</span>

              <p className="timeline-text">
                Nemo enims ipsam voluptatem, blanditiis praesentium voluptum
                delenit atque corrupti, quos dolores et quas molestias exceptur.
              </p>
            </li>

            <li className="timeline-item">
              <h4 className="h1 timeline-item-title">
                New york academy of art
              </h4>

              <span>2006 — 2007</span>

              <p className="timeline-text">
                Ratione voluptatem sequi nesciunt, facere quisquams facere menda
                ossimus, omnis voluptas assumenda est omnis..
              </p>
            </li>

            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">
                High school of art and design
              </h4>

              <span>2002 — 2004</span>

              <p className="timeline-text">
                Duis aute irure dolor in reprehenderit in voluptate, quila
                voluptas mag odit aut fugit, sed consequuntur magni dolores eos.
              </p>
            </li>
          </ul>
        </section>
      </div>

      <div className="timeline-container">
        <section>
          <div className="timeline-line"></div>
          <div className="icon-box">
            <FiBookOpen />
          </div>
          <div className="dot-container">
            <div className="outer-dot">
              <div className="inner-dot"></div>
            </div>
            <div className="outer-dot">
              <div className="inner-dot"></div>
            </div>
            <div className="outer-dot">
              <div className="inner-dot"></div>
            </div>
          </div>
        </section>
        <section className="timeline">
          <div className="title-wrapper">
            <h3 className="h3">Experience</h3>
          </div>

          <ul className="timeline-list">
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">Creative director</h4>

              <span>2015 — Present</span>

              <p className="timeline-text">
                Nemo enim ipsam voluptatem blanditiis praesentium voluptum
                delenit atque corrupti, quos dolores et qvuas molestias
                exceptur.
              </p>
            </li>

            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">Art director</h4>

              <span>2013 — 2015</span>

              <p className="timeline-text">
                Nemo enims ipsam voluptatem, blanditiis praesentium voluptum
                delenit atque corrupti, quos dolores et quas molestias exceptur.
              </p>
            </li>

            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">Web designer</h4>

              <span>2010 — 2013</span>

              <p className="timeline-text">
                Nemo enims ipsam voluptatem, blanditiis praesentium voluptum
                delenit atque corrupti, quos dolores et quas molestias exceptur.
              </p>
            </li>
          </ul>
        </section>
      </div>
    </section>
  );
}

export default Resume;
