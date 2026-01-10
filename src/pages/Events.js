import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaMapMarkerAlt, FaClock, FaUsers } from 'react-icons/fa';
import './Event.css';
import Navbar from '../components/Navbar';
const Events = () => {
  // Slideshow images for Our Events
  const slideshowImages = [
    '/photos/hcverma.webp',
    '/events/satoliya.webp',
    '/events/discoverhunt.webp',
  ];
  const [slideIndex, setSlideIndex] = React.useState(0);
  React.useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % slideshowImages.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [slideshowImages.length]);
  const upcomingEvents = [
        {
      id: 1,
      title: "Holi Donation Drive",
      date: "March 2025",
      time: "9:00 AM - 6:00 PM",
      location: "College Main Gate, OAT, Hostel Lobbies",
      description: "A meaningful initiative to collect clothes, books, food items, and stationery, spreading light and hope beyond campus walls.",
      participants: "200+",
  image: "/events/Donation_drive.webp"
    },
  


  //   {
  //     id: 2,
  //     title: " Badi Diwali – Ethnic Dress Competition",
  //     date: "October 2025",
  //     time: "7:30 PM – 9:30 PM",
  //     location: "OAT Main Stage",
  //     description: "A cultural walk celebrating India’s diversity through traditional attire. Judged on creativity, cultural authenticity, confidence, and presentation.",
  //     participants: "50",
  // image: "/events/ethinc_wear.webp"
  //   },
  
    {
      id: 2,
      title: " November Technical Workshop",
      date: "March 2026",
      time: "10:00 AM - 8:00 PM",
      location: "VLTC Classrooms",
      description: "A knowledge-driven workshop featuring expert speakers on cutting-edge topics like Web Development, AI, and Machine Learning. Students gain practical, real-world insights.",
      participants: "75+",
  image: "/events/technical.webp"
    }
  ];

  const pastEvents = [
      {id:1,
    title:"Ganesh Chaturthi Celebration",
    date: "27-28 August, 2025",
    location:"Mnit Oat ",
    description:"The day began with a vibrant procession of Lord Ganesha from Prabha Marg Circle to the Open Air Theatre, filled with dhol-tasha beats, chants of “Ganpati Bappa Morya!”, and energetic student participation. At OAT, celebrations included a dance performance by Level X, Maha Puja and installation, soulful aarti with prasad, and an evening aarti with large student gatherings. With overwhelming participation from students and faculty, the event became a festival of unity, devotion, and cultural harmony, concluding with heartfelt chants as MNIT Jaipur bid farewell to Bappa."
   ,
      impact: "500+ students attended , 100+ faculty members , Director Sir and Deans graced the event", 
  image: "/events/Ganesh_Chaturthi.webp"
  },
  {
    id:2,
    titlw:"Self-Defense Awareness & Training Workshop",
    date:"19 November 2025",
    location:"Deeksha Shabagar",
    description:"The Self-Defense Awareness & Training Workshop was a significant initiative aimed at empowering students with essential life skills, personal safety awareness, and confidence-building techniques. The workshop combined expert-led guidance with practical demonstrations and hands-on training. Expert Trainers Rtn. Dr. Pallavi Singhvi (Chairperson, Rotary Self Defense Academy) , Shihan Hemant Kumar (Chief Instructor & Technical Director, 5th Dan Black Belt) Joined us for teaching about the defense.",
    impact:"Expert Trainers , 100+Student Joined",
    image:"/events/defence.webp"
  },
    {
      id: 3,
      title: " Discover India – The Puzzle Hunt",
      date: " February 7, 2025 ",
      location: "VLTC L-008, MNIT Jaipur ",
      description: "As part of the Blitz events, Think India MNIT organized an exciting puzzle-based treasure hunt, where teams raced to solve riddles, collect pieces, and complete the map of India. The event brilliantly combined logical reasoning, speed, and cultural awareness in a lively competitive spirit.Participants showcased their problem-solving skills while engaging in an intense yet fun-filled race across departments. The creative format and energetic atmosphere made the event a memorable experience, receiving immense appreciation from all."
      ,impact: "250+ people participated ",
  image: "/events/discoverhunt.webp"
    },
     {
      id: 4,
      title: " Tug of War ",
      date: "January 12, 2025",
      location: "University Grounds",
      description: "The Tug of War event at Youth Fest 2025 witnessed an electrifying atmosphere as 18 teams battled it out in high-energy knockout rounds. The roaring crowds amplified the thrill of each match, making the competition even more intense. The final showdown between Purwanchal ke Sher and Danav kept everyone on the edge of their seats, with Purwanchal ke Sher emerging as the ultimate champions."
  , impact: "15+ teams participated",
      image: "/events/Tug_of_war.webp"
    },
    {
      id: 5,
      title: "Satoliya - Reliving Childhood Games ",
      date: "January 12, 2025",
      location: "University Grounds",
      description: "Satoliya 2025 brought back the charm of the traditional game Seven Stones. With 15+ teams battling it out through rounds, semis, and the grand finale, the event turned into a perfect mix of nostalgia and competition. Students from across departments showcased strategy, teamwork, and sportsmanship, making Satoliya one of the most fun and loved highlights of YouthFest 2024.",
      impact: "15+ teams participated",
  image: "/events/satoliya.webp"
    },
    
  { id: 6, 
    title: "Ace Your Career in Civil Services – A Power-Packed UPSC Seminar", 
    date: "April 8, 2025 ", 
    location: "APJ Abdul Kalam Hall, VLTC, MNIT Jaipur ", 
 description: "Think India MNIT organized an impactful seminar featuring Mr. Sunil Oberoi (Ex-IAS, Former UPSC Examiner) and Mr. Kapil Jain (Vajiram & Ravi IAS), bringing invaluable guidance to aspiring civil servants. The session provided insider insights and mentorship for UPSC preparation.At the seminar, the speakers shared inspiring journeys, highlighted effective preparation methods, and engaged in an interactive Q&A session. The event also created meaningful networking opportunities for aspirants.With the hall brimming with enthusiastic participants, the seminar emerged as a resounding success, leaving students motivated and better equipped to pursue their UPSC dreams.",

    impact: "250+ students benefited", 
  image: "/events/civilservices.jpg.webp" },

    
  ];

  return (
  <div className="events-page-root">


   <Navbar/>
    {/* Hero Section */}
<section className="events-page-hero">

    
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
      background: "linear-gradient(90deg, rgba(0,0,0,0.4), rgba(0,0,0,0.5))",
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
        fontSize: window.innerWidth <= 500 ? "3rem" : "4rem", 
        fontWeight: 600,
        marginBottom: 19,
        whiteSpace: "nowrap",
      }}
    >
      Our Events
    </motion.h4>
    <motion.h2
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.2 }}
      style={{ fontSize: "1.2rem", color: "#d0d0d0", fontWeight: 500 }}
    >
      Join us in our exciting events and activities that bring together students,
      professionals, and community leaders.
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
              borderRadius: "50%", 
              background: idx === slideIndex ? "#fbc02d" : "#fff",
              opacity: idx === slideIndex ? 1 : 0.5,
              border: idx === slideIndex ? "2px solid #fff" : "2px solid #fbc02d",
              transition: "all 0.3s",
              display: "inline-block", 
              margin: "0 0px", 
            }}
      />
    ))}
  </div>
</section>


      {/* Upcoming Events Section */}
      <section className="events-page-section events-page-section--upcoming">


        <div className="events-page-container">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title" style={{ color: '#C19A6B', fontWeight: 700, fontSize: '2.2rem', textAlign: 'center', marginBottom: 8, letterSpacing: '-0.5px' }}>Upcoming Events</h2>
            <p className="section-subtitle" style={{ color: '#232a36', textAlign: 'center', fontSize: '1.15rem', marginBottom: 32 }}>Don't miss out on these exciting opportunities to learn, network, and grow</p>
          </motion.div>

          <div className="events-page-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 36, marginTop: 24 }}>
            {upcomingEvents.map((event, index) => (
             <motion.div
  key={event.id}
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: index * 0.1 }}
  viewport={{ once: true }}
  className="event-card-upcoming"
>
  <div
    className="event-image"
    style={{
      position: 'relative',
      width: '100%',
      height: '320px',
      borderRadius: '18px 18px 0 0',
      overflow: 'hidden',
      boxShadow: '0 4px 24px rgba(0,0,0,0.10)',
    }}
  >
    <img
      src={event.image}
      alt={event.title}
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        objectPosition: 'center',
        transition: 'transform 0.3s',
        filter: 'brightness(0.92)',
      }}
    />
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background:
          'linear-gradient(180deg,rgba(0,0,0,0.18) 40%,rgba(0,0,0,0.45) 100%)',
        zIndex: 1,
      }}
    ></div>
    <div
      style={{
        position: 'absolute',
        bottom: 18,
        left: 18,
        color: '#fff',
        zIndex: 2,
        fontWeight: 600,
        fontSize: '1.25rem',
        textShadow: '0 2px 8px rgba(0,0,0,0.25)',
      }}
    >
      {event.title}
    </div>
  </div>

  <div
    className="event-content"
    style={{
      background: '#fff',
      borderRadius: '0 0 18px 18px',
      boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
      padding: '24px 20px 18px 20px',
      marginTop: '-8px',
      position: 'relative',
      zIndex: 2,
    }}
  >
    <div
      className="event-details"
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '18px 32px',
        marginBottom: '10px',
        color: '#333',
        fontSize: '1rem',
      }}
    >
      <div className="event-detail" style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
        <FaCalendarAlt style={{ color: '#1976d2' }} />
        <span>{event.date}</span>
      </div>
      <div className="event-detail" style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
        <FaClock style={{ color: '#1976d2' }} />
        <span>{event.time}</span>
      </div>
      <div className="event-detail" style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
        <FaMapMarkerAlt style={{ color: '#1976d2' }} />
        <span>{event.location}</span>
      </div>
      <div className="event-detail" style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
        <FaUsers style={{ color: '#1976d2' }} />
        <span>{event.participants} participants</span>
      </div>
    </div>
    <p style={{ color: '#444', fontSize: '1.05rem', marginBottom: 0 }}>
      {event.description}
    </p>
  </div>
</motion.div>

            ))}
          </div>
        </div>
      </section>

      {/* Past Events Section */}
      <section className="events-page-section events-page-section--past">
       <div className="events-page-container">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Past Events</h2>
            <p className="section-subtitle">Celebrating our successful events and their impact on the community</p>
          </motion.div>

         <div className="events-page-grid">

            {pastEvents.map((event, index) => (
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

    </div>
  );
};

export default Events; 
