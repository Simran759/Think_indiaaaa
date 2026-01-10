import React from 'react';
import { motion } from 'framer-motion';
import { FaLightbulb, FaTrophy } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import './Home.css';

const Home = () => {


  return (
    
  <div className="home"  style={{ background: 'linear-gradient(135deg, #0a0a1f 60%, #232a36 100%)', color: '#fff', minHeight: '100vh' }}>
      {/* Welcome Section */}
       <Navbar />
      <section className="hero">
        <div className="hero-background">
          <div className="hero-overlay"></div>
        </div>
        <div className="container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="hero-title">
              Think India MNIT Jaipur
            </h1>
            <p className="hero-subtitle">
              At MNIT, we are more than students—we are dreamers, doers, and changemakers. Through learning, dialogue, and community service, we strive to shape a future where India leads with innovation and compassion.
            </p>
            <div className="hero-buttons">
              <a href="/youthfest/event" className="btn btn-highlight"> Explore YouthFest</a>
            </div>
          </motion.div>
        </div>
        <div className="scroll-indicator">
          <div className="scroll-arrow"></div>
        </div>
      </section>

      {/* About MNIT Jaipur Section */}
      <section id="about-mnit" className="section about-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">About MNIT Jaipur</h2>
            <div className="about-grid">
              <div className="about-card">
                <div className="about-icon" style={{background: 'linear-gradient(135deg, #3f51b5, #2196f3)'}}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7v2c0 5.25 3.75 10.74 10 13 6.25-2.26 10-7.75 10-13V7l-10-5z" fill="#fff"/>
                  </svg>
                </div>
                <h3>Malaviya National Institute of Technology (MNIT) Jaipur</h3>
                <p>MNIT Jaipur is more than an institute it’s a journey of growth. Every corner of the campus carries stories of dreams, hard work, and friendships that last a lifetime. Known for academic rigor and an unshakable spirit of innovation, MNIT gives its students more than degrees; it gives them purpose. Here, young minds evolve into responsible citizens and changemakers for India’s tomorrow.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Think India Section */}
      <section id="about" className="section about-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">About Think India</h2>
            <div className="about-grid">
              <div className="about-card">
        
                <p> Think India is a national student organization dedicated to fostering leadership, innovation, and social responsibility. Founded in 2006, we have grown into a pan-India movement that empowers students to contribute meaningfully to nation-building through various initiatives and programs.</p>
              </div>
            </div>
           
          </motion.div>

          <div className="about-grid">
            <motion.div 
              className="about-card"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="about-icon">
                <FaLightbulb />
              </div>
              <h3>Vision</h3>
              <p>To be the leading student organization that nurtures future leaders who are committed to India's development and progress, combining traditional values with modern innovation. We envision a united India where young minds drive positive change through leadership and innovation.</p>
            </motion.div>

            <motion.div 
              className="about-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="about-icon">
                <FaTrophy />
              </div>
              <h3>Goals</h3>
                <p>
                  Our primary goals include developing leadership skills, promoting social responsibility, and creating platforms for meaningful dialogue. We aim to connect students with opportunities for growth, learning, and making a positive impact on society.
                </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="section events-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Events</h2>
            <p className="section-subtitle">
              Join us in our exciting events and activities that bring together students, professionals, and community leaders.
            </p>
          </motion.div>

          
          <div className="timeline-flex-fix" style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', marginTop: 40, position: 'relative', minHeight: 400 }}>
            {/* Upcoming Events (Left) */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 32 }}>
              <div style={{ fontWeight: 700, fontSize: '1.2rem', color: '#1976d2', marginBottom: 16, alignSelf: 'flex-end' }}>Upcoming Events</div>
              {/* Leadership Summit 2024 */}
              <motion.div className="timeline-event" initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.1 }} viewport={{ once: true }} style={{ width: 300, background: '#f7faff', borderRadius: 18, boxShadow: '0 2px 12px rgba(0,0,0,0.07)', padding: 20, marginBottom: 0, position: 'relative' }}>
                <div style={{ color: '#1976d2', fontWeight: 700, fontSize: '1.1rem', marginBottom: 6 }}>  Ethnic Dress Competition</div>
                <div style={{ color: '#444', fontSize: '0.98rem', marginBottom: 4 }}>May 2025, OAT Main Stage/Online</div>
                <div style={{ color: '#555', fontSize: '0.97rem', marginBottom: 8 }}>A cultural walk celebrating India’s diversity through traditional attire. Judged on creativity, cultural authenticity, confidence, and presentation.</div>
                {/* <a href="#contact" className="btn btn-primary" style={{ width: '100%' }}>Register Now</a> */}
              </motion.div>
              {/* Innovation Workshop */}
              <motion.div className="timeline-event" initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2 }} viewport={{ once: true }} style={{ width: 300, background: '#f7faff', borderRadius: 18, boxShadow: '0 2px 12px rgba(0,0,0,0.07)', padding: 20, marginBottom: 0, position: 'relative' }}>
                <div style={{ color: '#1976d2', fontWeight: 700, fontSize: '1.1rem', marginBottom: 6 }}>Technical Workshop</div>
                <div style={{ color: '#444', fontSize: '0.98rem', marginBottom: 4 }}>March 2025, VLTC Room</div>
                <div style={{ color: '#555', fontSize: '0.97rem', marginBottom: 8 }}>A knowledge-driven workshop featuring expert speakers on cutting-edge topics like Web Development, AI, and Machine Learning. Students gain practical, real-world insights.</div>
                {/* <a href="#contact" className="btn btn-primary" style={{ width: '100%' }}>Register Now</a> */}
              </motion.div>
            </div>
            {/* Center Line */}
            <div className="timeline-center-line" style={{ width: 4, background: '#1976d2', height: '100%', minHeight: 940, margin: '0 32px', borderRadius: 2 }}></div>
            {/* Previous Events (Right) */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 32 }}>
              <div style={{ fontWeight: 700, fontSize: '1.2rem', color: '#C19A6B', marginBottom: 16, alignSelf: 'flex-start' }}>Past Events</div>
              {/* Ganesh Chaturthi 2025 */}
              <motion.div className="timeline-event" initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.3 }} viewport={{ once: true }} style={{ width: 300, background: '#fff', borderRadius: 18, boxShadow: '0 2px 12px rgba(0,0,0,0.07)', padding: 20, marginBottom: 0, position: 'relative' }}>
                <div style={{ color: '#C19A6B', fontWeight: 700, fontSize: '1.1rem', marginBottom: 6 }}>Ganesh Chaturthi 2025</div>
                <div style={{ color: '#444', fontSize: '0.98rem', marginBottom: 4 }}>26-27 August 2025, OAT, MNIT Jaipur</div>
                <img src="/events/Ganesh_Chaturthi.webp" alt="Ganesh Chaturthi 2025" style={{ width: '100%', maxHeight: '120px', objectFit: 'cover', borderRadius: 8, margin: '10px 0' }} />
                <div style={{ color: '#555', fontSize: '0.97rem' }}>Students celebrated Ganesh Chaturthi with rituals, music, and cultural performances, fostering unity and devotion on campus.</div>
              </motion.div>
              {/* Youthfest 2023 */}
              <motion.div className="timeline-event" initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.4 }} viewport={{ once: true }} style={{ width: 300, background: '#fff', borderRadius: 18, boxShadow: '0 2px 12px rgba(0,0,0,0.07)', padding: 20, marginBottom: 0, position: 'relative' }}>
                <div style={{ color: '#C19A6B', fontWeight: 700, fontSize: '1.1rem', marginBottom: 6 }}>Youthfest 2024</div>
                <div style={{ color: '#444', fontSize: '0.98rem', marginBottom: 4 }}>12-15 January 2024, MNIT Jaipur</div>
                <img src="/events/youthfest.webp" alt="Youthfest 2023" style={{ width: '100%', maxHeight: '120px', objectFit: 'cover', borderRadius: 8, margin: '10px 0' }} />
                <div style={{ color: '#555', fontSize: '0.97rem', marginBottom: '10px' }}>Youthfest 2024 at MNIT Jaipur was a four-day festival featuring Lohri Night, Makar Sankranti, Vivekananda Jayanti, and traditional childhood games. The event brought students together for cultural celebrations, inspiring talks, and fun activities, creating lasting memories and fostering unity on campus.</div>
                {/* <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <a href="/youthfest" className="btn btn-primary" style={{ marginTop: '6px' }}>See More Youthfest Highlights</a>
                </div> */}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      
      

      
    </div>
  );
};

export default Home; 