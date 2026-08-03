import { Link } from 'react-router-dom'
import './App.css'

function App() {
  const notices = [
    'Lab report submission opens every Thursday after class.',
    'Attendance will be recorded at the beginning of each lab session.',
    'Bring your own laptop, charger, and required software setup.',
  ]

  const resources = [
    'Course outline and lab manual',
    'Assignment and report templates',
    'Previous class announcements',
  ]

  const schedule = [
    { day: 'Sun', topic: 'Introduction and setup', time: '10:00 AM - 12:00 PM' },
    { day: 'Tue', topic: 'Practice session and quiz', time: '10:00 AM - 12:00 PM' },
    { day: 'Thu', topic: 'Lab submission and viva', time: '10:00 AM - 12:00 PM' },
  ]

  return (
    <main className="home-page">
      <section className="shell">
        <header className="topbar">
          <div className="brand">
            <div className="brand-mark">RUET</div>
            <div>
              <p className="brand-subtitle">Rajshahi University of Engineering &amp; Technology</p>
              <h1>CSE 3206 Laboratory</h1>
            </div>
          </div>

          <nav className="nav-links" aria-label="Primary">
            <a href="#notices">Notices</a>
            <a href="#resources">Resources</a>
            <a href="#schedule">Schedule</a>
            <Link to="/seat-plan">Seat Plan</Link>
          </nav>
        </header>

        <section className="hero-grid">
          <article className="hero-panel">
            <p className="eyebrow">Department of Computer Science &amp; Engineering</p>
            <h2>Welcome to the CSE 3206 Lab Home Page</h2>
            <p className="subtitle">
              A simple academic portal for lab notices, weekly sessions, report submission,
              and course updates.
            </p>

            <div className="hero-actions">
              <a href="#notices" className="primary-link">
                View notices
              </a>
              <a href="#schedule" className="secondary-link">
                See schedule
              </a>
            </div>
          </article>

          <aside className="status-panel" aria-label="Lab status">
            <div className="status-card status-highlight">
              <span className="status-label">Current session</span>
              <strong>Lab class is active</strong>
              <p>Room: CSE Lab-2</p>
            </div>

            <div className="status-card">
              <span className="status-label">Instructor</span>
              <strong>Course Coordinator</strong>
              <p>Office hours available after class</p>
            </div>

            <div className="status-card">
              <span className="status-label">Submission</span>
              <strong>Weekly report</strong>
              <p>Upload before the deadline</p>
            </div>
          </aside>
        </section>

        <section className="content-grid">
          <article className="panel" id="notices">
            <div className="panel-header">
              <p className="panel-tag">Latest updates</p>
              <h3>Important notices</h3>
            </div>
            <ul className="notice-list">
              {notices.map((notice) => (
                <li key={notice}>{notice}</li>
              ))}
            </ul>
          </article>

          <article className="panel" id="resources">
            <div className="panel-header">
              <p className="panel-tag">Course material</p>
              <h3>Resources</h3>
            </div>
            <div className="resource-list">
              {resources.map((resource) => (
                <div className="resource-item" key={resource}>
                  <span className="resource-dot" />
                  <span>{resource}</span>
                </div>
              ))}
            </div>
          </article>

          <article className="panel wide-panel" id="schedule">
            <div className="panel-header">
              <p className="panel-tag">Weekly plan</p>
              <h3>Lab schedule</h3>
            </div>

            <div className="schedule-table" role="table" aria-label="Lab schedule">
              <div className="schedule-head" role="row">
                <span role="columnheader">Day</span>
                <span role="columnheader">Topic</span>
                <span role="columnheader">Time</span>
              </div>
              {schedule.map((item) => (
                <div className="schedule-row" role="row" key={item.day}>
                  <span role="cell" className="day-cell">{item.day}</span>
                  <span role="cell">{item.topic}</span>
                  <span role="cell">{item.time}</span>
                </div>
              ))}
            </div>
          </article>
        </section>
      </section>
    </main>
  )
}

export default App
