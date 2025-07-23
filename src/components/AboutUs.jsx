import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "./Navbar.jsx";
import "./AboutUs.css";
export default function AboutUs() {
  return (
    <>
      <div className="aboutus">
        <div className="about-us-container">
          <Helmet>
            <title>About SN-Watch | Premium Smart Watches</title>
            <meta
              name="description"
              content="Learn about SN-Watch, our mission, and our founder Shakeel Ahmad. Discover why we create premium smart watches."
            />
          </Helmet>

          <header className="about-header">
            <h1>About SN-Watch</h1>
            <p className="subtitle">Innovation on Your Wrist</p>
          </header>

          <section className="about-content">
            <div className="founder-section">
              <div className="founder-image">
                {/* Replace with actual image path */}
                <img
                  src="src/assets/images/developer.jpeg"
                  alt="Shakeel Ahmad, Founder of SN-Watch"
                />
              </div>
              <div className="founder-info">
                <h2>--Founder--</h2>
                <h3>Shakeel Ahmad</h3>
                <p>
                  Shakeel Ahmad, a visionary in wearable technology, founded
                  SN-Watch with a mission to blend cutting-edge technology with
                  elegant design. With over years of experience in electronics
                  and software development, Shakeel has led SN-Watch to become a
                  recognized name in smart wearable innovation.
                </p>
              </div>
            </div>

            <div className="mission-section">
              <h2>Our Mission</h2>
              <p>
                At SN-Watch, we believe technology should seamlessly integrate
                into your lifestyle. Our mission is to create smart watches that
                not only provide advanced functionality but also complement your
                personal style. We combine precision engineering with thoughtful
                design to deliver products that keep you connected, healthy, and
                on time.
              </p>
            </div>

            <div className="values-section">
              <h2>Our Core Values</h2>
              <div className="values-grid">
                <div className="value-card">
                  <div className="value-icon">💡</div>
                  <h3>Innovation</h3>
                  <p>
                    We constantly push boundaries to bring you the latest in
                    wearable technology.
                  </p>
                </div>
                <div className="value-card">
                  <div className="value-icon">🎯</div>
                  <h3>Precision</h3>
                  <p>
                    Every component is crafted with meticulous attention to
                    detail.
                  </p>
                </div>
                <div className="value-card">
                  <div className="value-icon">❤️</div>
                  <h3>Customer Focus</h3>
                  <p>Your needs and feedback drive our product development.</p>
                </div>
                <div className="value-card">
                  <div className="value-icon">🌱</div>
                  <h3>Sustainability</h3>
                  <p>
                    We're committed to eco-friendly practices in manufacturing
                    and packaging.
                  </p>
                </div>
              </div>
            </div>

            <div className="history-section">
              <h2>Our Journey</h2>
              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-year">2018</div>
                  <div className="timeline-content">
                    <h3>Foundation</h3>
                    <p>
                      SN-Watch was founded by Shakeel Ahmad with a small team of
                      engineers and designers.
                    </p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-year">2019</div>
                  <div className="timeline-content">
                    <h3>First Product Launch</h3>
                    <p>
                      Released our first smart watch model, the SN-1, featuring
                      basic fitness tracking and notifications.
                    </p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-year">2021</div>
                  <div className="timeline-content">
                    <h3>Breakthrough Innovation</h3>
                    <p>
                      Introduced the SN-Pro with advanced health monitoring and
                      10-day battery life.
                    </p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-year">2023</div>
                  <div className="timeline-content">
                    <h3>Global Recognition</h3>
                    <p>
                      SN-Watch products now available in over 30 countries with
                      1 million+ devices sold.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="team-cta">
            <h2>Join Our Team</h2>
            <p>
              We're always looking for passionate individuals to join our
              growing team of innovators. If you share our vision for wearable
              technology, we'd love to hear from you.
            </p>
            <button className="cta-button">View Career Opportunities</button>
          </section>
        </div>
      </div>
    </>
  );
}
