import React from 'react';
import { motion } from 'framer-motion';
import { FaHandshake, FaTrophy, FaChartLine } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import './Work.css';

const Work = () => {
  // Slideshow images for all pages except Team and Contact
  const slideshowImages = [
      '/photos/iit_roorkee.webp',
      '/photos/team_iit_roorkee.webp',
      '/events/discoverhunt.webp',
    ];
    const [slideIndex, setSlideIndex] = React.useState(0);
    React.useEffect(() => {
      const interval = setInterval(() => {
        setSlideIndex((prev) => (prev + 1) % slideshowImages.length);
      }, 2500);
      return () => clearInterval(interval);
    }, [slideshowImages.length]);
  return (
   <div className="work-page" style={{ background: 'linear-gradient(135deg, #0a0a1f  )', color: '#fff', minHeight: '100vh' }}>
    <Navbar/>
      {/* Hero Section */}
  <section style={{ position: "relative", width: "100%", height: "730px", overflow: "hidden" }}>
    {/* Slide background */}
    <motion.div
      key={slideIndex} // important for fade animation
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundImage: `url(${slideshowImages[slideIndex]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        filter: "brightness(0.8)",
      }}
    />
  
    {/* Overlay */}
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "linear-gradient(90deg, rgba(0, 0, 0, 0.4), rgba(0,0,0,0.5))",
        zIndex: 1,
      }}
    />
  
    {/* Hero Text */}
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        textAlign: "center",
        zIndex: 2,
        color: "#fff",
        padding: "0 20px",
        maxWidth: 700,
      }}
    >
      <motion.h4
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  style={{
    fontSize: window.innerWidth <= 500 ? "3rem" : "4rem", //
    fontWeight: 600,
    marginBottom: 19,
    whiteSpace: "nowrap", //
  }}
>
  Our Work
</motion.h4>

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        style={{ fontSize: "1.3rem", color: "#d0d0d0", fontWeight: 500 }}
      >
       Discover the impact we've made through our various initiatives and collaborations.
      </motion.h2>
    </div>
  
    {/* Dots */}
    <div
      style={{
        position: "absolute",
        bottom: 20,
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        gap: 12,
        zIndex: 2,
      }}
    >
      {slideshowImages.map((_, idx) => (
          <span
            key={idx}
            style={{
              width: 14,
              height: 14,
              borderRadius: "50%", // <-- Make dot a circle
              background: idx === slideIndex ? "#fbc02d" : "#fff",
              opacity: idx === slideIndex ? 1 : 0.5,
              border: idx === slideIndex ? "2px solid #fff" : "2px solid #fbc02d",
              transition: "all 0.3s",
              display: "inline-block", // Ensure it's inline-block
              margin: "0 0px", // Optional: add spacing between dots
            }}
        />
      ))}
    </div>
  </section>

            
      {/* Activities Overview Section */}
      <section className="section activities-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Detailed Overview of Activities</h2>
            <p className="section-subtitle">Comprehensive programs and initiatives that drive our mission</p>
          </motion.div>

          <div className="activities-grid">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="activity-card"
            >
              <div className="activity-icon">
                <FaHandshake />
              </div>
              <h3>Industry Connect Programs</h3>
              <p>Partnerships with industry leaders, career development programs, and networking opportunities for students.</p>
              <ul>
                <li>Carrer Counselling</li>
                <li>Workshops and Convention</li>
                <li>Guest Lectures</li>
                <li>Internship Programs(Vidhi, Niti, Anubhooti etc.)</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="activity-card"
            >
              <div className="activity-icon">
                <FaTrophy />
              </div>
              <h3>Cultural & Social Events</h3>
              <p>Diverse cultural celebrations, social gatherings, and events that promote inclusivity and community bonding.</p>
              <ul>
                <li>Cultural Fest</li>
                <li>Social Gatherings</li>
                <li>Cultural Workshops</li>
                <li>Diversity Programs</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="activity-card"
            >
              <div className="activity-icon">
                <FaChartLine />
              </div>
              <h3>Skill Enhancement Programs</h3>
              <p>Comprehensive skill development programs covering both technical and soft skills essential for professional growth.</p>
              <ul>
                <li>Communication Skills</li>
                <li>DIY Coding</li>
                <li>Design Workshops</li>
                <li>Entrepreneurship discussions</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Impact & Achievements Section */}
      <section className="section impact-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Impact & Achievements</h2>
            <p className="section-subtitle">Quantifying our success and measuring the positive change we've created</p>
          </motion.div>

          <div className="impact-grid">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="impact-card"
            >
              <div className="impact-number">5000+</div>
              <h3>Students Impacted</h3>
              <p>Direct and indirect impact on students through our various programs and initiatives.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="impact-card"
            >
              <div className="impact-number">50+</div>
              <h3>Successful Events</h3>
              <p>Major events and programs successfully organized with high participant satisfaction.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="impact-card"
            >
              <div className="impact-number">100+</div>
              <h3>Industry Connections</h3>
              <p>Strong network of industry professionals and organizations supporting our mission.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="impact-card"
            >
              <div className="impact-number">25+</div>
              <h3>Awards & Recognitions</h3>
              <p>Prestigious awards and recognitions received for our contributions to student development.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="impact-card"
            >
              <div className="impact-number">10+</div>
              <h3>Community Projects</h3>
              <p>Successful community service projects completed with measurable social impact.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="impact-card"
            >
              <div className="impact-number">95%</div>
              <h3>Participant Satisfaction</h3>
              <p>High satisfaction rate among participants in our programs and events.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Work; 