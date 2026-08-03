import { Link } from 'react-router-dom'

function SeatPlanPage() {
  const students = [
    {
      column: 'Column 1',
      roll: '2203068',
      name: 'Noushad Jaman Raj',
      note: 'Your assigned seat',
      accent: 'student-one',
    },
    {
      column: 'Column 2',
      roll: '2203067',
      name: 'Rafi',
      note: 'Lab partner',
      accent: 'student-two',
    },
    {
      column: 'Column 3',
      roll: '2203068',
      name: 'Tanjid',
      note: 'Lab teammate',
      accent: 'student-three',
    },
  ]

  return (
    <main className="seat-plan-page">
      <section className="seat-shell">
        <Link className="back-link" to="/">
          ← Back to home
        </Link>

        <header className="seat-header">
          <p className="eyebrow">CSE 3206 • Lab Seat Plan</p>
          <h1>3 Student Lab Table</h1>
          <p className="seat-subtitle">
            A polished view of the current lab group seating arrangement for the session.
          </p>
        </header>

        <section className="seat-card" aria-label="Seat plan table">
          <div className="seat-card-header">
            <div>
              <p className="panel-tag">Live arrangement</p>
              <h2>Lab seating overview</h2>
            </div>
            <span className="seat-badge">3 seats</span>
          </div>

          <div className="seat-table" role="table" aria-label="Student seat plan">
            <div className="seat-table-head" role="row">
              <span role="columnheader">Column</span>
              <span role="columnheader">Roll</span>
              <span role="columnheader">Name</span>
              <span role="columnheader">Note</span>
            </div>

            {students.map((student) => (
              <div className="seat-table-row" role="row" key={student.column}>
                <span role="cell" className={`seat-column ${student.accent}`}>
                  {student.column}
                </span>
                <span role="cell" className="seat-roll">
                  {student.roll}
                </span>
                <span role="cell" className="seat-name">
                  {student.name}
                </span>
                <span role="cell" className="seat-note">
                  {student.note}
                </span>
              </div>
            ))}
          </div>
        </section>
      </section>
    </main>
  )
}

export default SeatPlanPage
