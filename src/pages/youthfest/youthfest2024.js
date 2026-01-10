import React from 'react';
import './youthfest.css';
import { FaCalendarAlt, FaMapMarkerAlt, FaUsers } from 'react-icons/fa';
import { motion } from 'framer-motion';

import Navbar  from "../../components/youthfestNavbar";
const Youthfest = () => {
  // Slideshow images for all pages except Team and Contact
  const slideshowImages = [
    '/highlights/anchoring.webp',
    '/highlights/drama.webp',
    '/highlights/youthfest_team.webp',
  ];
  

  const [slideIndex, setSlideIndex] = React.useState(0);
  React.useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % slideshowImages.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [slideshowImages.length]);
  const Highlights = [
      {id:1,
    title:"Vivekananda Jayanti",
    date: "12 January, 2024",
    location:"Neeti Shabagar",
    description:"Dedicated to the youth icon Swami Vivekananda, this day inspired students to reflect on leadership and service. Faculty and guest speakers shared insights on Vivekananda’s vision.Skits, patriotic songs, and poetry highlighted his teachings.Students expressed how his ideals motivate them in academics, spirituality, and social service.This day reinforced the message of self-belief and responsibility among students."
   ,
      impact: "250+ students attended ", 
  image: "/highlights/swami_vivekananad.webp"
  },
    {
      id: 2,
      title: " Lohri Night",
      date: " January 13, 2024 ",
      location: "VLTC Back Porch",
      description: "Lohri Night ,The festival began with the warmth of Lohri, celebrated with a traditional bonfire. Students circled around the flames, singing Punjabi folk songs, performing bhangra, and enjoying festive delicacies like popcorn, peanuts, and gajak. Lohri night symbolized unity and gratitude for prosperity and new beginnings."
      ,impact: "100+ people attended ",
  image: "/highlights/lohri.webp"
    },
     {
      id: 3,
      title: " Makar Sankranti  ",
      date: "January 14, 2024",
      location: "OAT",
      description: "The skies above MNIT Jaipur filled with colourful kites as students celebrated Makar Sankranti with joy. Kite-flying competitions created a lively spirit of friendly rivalry, while traditional sweets like til-gud laddoos added festive flavour. The day captured the cultural essence of renewal, positivity, and celebration."
  , impact: "70+ teams participated",
      image: "/highlights/kite.webp"
    },
    {
      id: 4,
      title: "Traditional Games & Cultural Activities  ",
      date: "January 13, 2024",
      location: "University Grounds",
      description: "The final day brought back the charm of childhood games like Satoliya, Kho-Kho, Tug of War, and Sack Races. Students laughed, competed, and bonded, rediscovering simple joys and teamwork. The closing ceremony featured cultural performances, where music, dance, and theatre created an atmosphere of celebration and togetherness.",
      impact: "500+ students participated",
  image: "/events/satoliya.webp"
    },
    
 
    
  ];
  

  return (
    
  <div className="youthfest-page-section" style={{ background: 'linear-gradient(135deg, #0a0a1f  )', color: '#fff', minHeight: '100vh' }}>
    {/* Hero Section */}
    <Navbar/>
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
      background: "linear-gradient(180deg, rgba(0,0,0,0.4), rgba(0,0,0,0.8))",
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
        fontSize: window.innerWidth <= 500 ? "3rem" : "4rem", // ✅ smaller size on phones
        fontWeight: 600,
        marginBottom: 19,
        whiteSpace: "nowrap", // ✅ keep in one line
      }}
    >
      Youthfest 2024
    </motion.h4>
    <motion.h2
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.2 }}
      style={{ fontSize: "1.2rem", color: "#d0d0d0", fontWeight: 500 }}
    >
      Youthfest 2024 at MNIT Jaipur was a four-day festival organized by Think India MNIT, blending tradition, inspiration, and entertainment. The event combined cultural festivities, spiritual reflection, intellectual sessions, and recreational activities — making it one of the most memorable campus festivals.
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
{/* <div className="youthfest-card">
            {/* <h3>Dates</h3>
            <p>January 12 - 14, 2025</p>
            <h3>Location</h3>
            <p>MNIT Jaipur Main Campus</p>
          </div> */} */
       
             
             <section className="section highlights">
                    <div className="container">
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                      >
                        <h2 className="section-title">Daywise Highlights</h2>
                        {/* <p className="section-subtitle">Celebrating our successful events and their impact on the community</p>*/}
                      </motion.div> 
            
                      <div className="events-grid">
                        {Highlights.map((event, index) => (
                          <motion.div
                            key={event.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="event-card-past"
                          >
                            <div className="event-image" style={{ position: 'relative', width: '100%', height: '320px', borderRadius: '18px 18px 0 0', overflow: 'hidden', boxShadow: '0 4px 24px rgba(0,0,0,0.10)' }}>
                              <img 
                                src={event.image} 
                                alt={event.title} 
                                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', transition: 'transform 0.3s', filter: 'brightness(0.92)' }} 
                              />
                              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(180deg,rgba(0,0,0,0.18) 40%,rgba(0,0,0,0.45) 100%)', zIndex: 1 }}></div>
                              {/* Removed Completed badge */}
                              <div style={{ position: 'absolute', bottom: 18, left: 18, color: '#fff', zIndex: 2, fontWeight: 600, fontSize: '1.25rem', textShadow: '0 2px 8px rgba(0,0,0,0.25)' }}>{event.title}</div>
                            </div>
                            <div className="event-content" style={{ background: '#fff', borderRadius: '0 0 18px 18px', boxShadow: '0 2px 12px rgba(0,0,0,0.04)', padding: '24px 20px 18px 20px', marginTop: '-8px', position: 'relative', zIndex: 2 }}>
                              <div className="event-details" style={{ display: 'flex', flexWrap: 'wrap', gap: '18px 32px', marginBottom: '10px', color: '#333', fontSize: '1rem' }}>
                                <div className="event-detail" style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
                                  <FaCalendarAlt style={{ color: '#1976d2' }} />
                                  <span>{event.date}</span>
                                </div>
                                <div className="event-detail" style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
                                  <FaMapMarkerAlt style={{ color: '#1976d2' }} />
                                  <span>{event.location}</span>
                                </div>
                                <div className="event-detail" style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
                                  <FaUsers style={{ color: '#1976d2' }} />
                                  <span>{event.impact}</span>
                                </div>
                              </div>
                              <p style={{ color: '#444', fontSize: '1.05rem', marginBottom: 0 }}>{event.description}</p>
                              {/* <button className="btn btn-secondary">View Gallery</button> */}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </section>
       
             
             <section className="section NotableEvents">
               <div className="container">
                 <motion.div
                   initial={{ opacity: 0, y: 30 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.6 }}
                   viewport={{ once: true }}
                 >
                   <h2 className="section-title">Other Notable Events During Youthfest</h2>
                   {/* <p className="section-subtitle">What we aim to achieve through our initiatives and programs</p> */}
                 </motion.div>
       
                 <div className="highlights-grid">
                   <motion.div
                     initial={{ opacity: 0, scale: 0.9 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     transition={{ duration: 0.6, delay: 0.1 }}
                     viewport={{ once: true }}
                     className="goal-item"
                   >
                     <div className="goal-number">01</div>
                     <h3>	Spiritual Gatherings</h3>
                     <p>Daily prayer circles and meditation sessions encouraged mindfulness and balance during the fest.</p>
                   </motion.div>
       
                   <motion.div
                     initial={{ opacity: 0, scale: 0.9 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     transition={{ duration: 0.6, delay: 0.2 }}
                     viewport={{ once: true }}
                     className="goal-item"
                   >
                     <div className="goal-number">02</div>
                     <h3>Cultural Nights</h3>
                     <p>Students performed regional dances, music, and drama, showcasing India’s diversity.</p>
                   </motion.div>
       
                   <motion.div
                     initial={{ opacity: 0, scale: 0.9 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     transition={{ duration: 0.6, delay: 0.3 }}
                     viewport={{ once: true }}
                     className="goal-item"
                   >
                     <div className="goal-number">03</div>
                     <h3>Workshops and Debates</h3>
                     <p>Engaging discussions and interactive workshops nurtured creativity and critical thinking.</p>
                   </motion.div>
       
                   <motion.div
                     initial={{ opacity: 0, scale: 0.9 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     transition={{ duration: 0.6, delay: 0.4 }}
                     viewport={{ once: true }}
                     className="goal-item"
                   >
                     <div className="goal-number">04</div>
                     <h3>	Community Service Initiatives</h3>
                     <p>Students participated in awareness campaigns and volunteering drives, reinforcing the importance of giving back.</p>
                   </motion.div>
       
                  
                 </div>
               </div>
             </section>
  <section className="section impact">
  <div className="container">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="section-title">Impact of Youthfest 2024</h2>
    </motion.div>

    <div className="impact-points">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
      >
        Youthfest 2024 wasn’t just about celebration — it was about creating bonds, reviving traditions, and inspiring change. It
      </motion.p>

      <ul className="impact-list">
        <motion.li
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          United students from diverse backgrounds.
        </motion.li>
        <motion.li
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Revived cultural roots and traditional festivals on campus.
        </motion.li>
        <motion.li
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          Encouraged youth leadership through Vivekananda’s message.
        </motion.li>
        <motion.li
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          Built a sense of belonging and shared memories at MNIT Jaipur.
        </motion.li>
      </ul>
    </div>
  </div>
</section>
<section className="section closing-note">
  <div className="container">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="section-title">Closing Note</h2>
    </motion.div>

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
      className="closing-text"
    >
      Youthfest 2023 left behind a legacy of joy, inspiration, and community spirit. 
      It was a reminder that when young minds come together, they create memories, 
      revive traditions, and spark positive change.
    </motion.p>
  </div>
</section>

      </div>
    
  );
};

export default Youthfest;
