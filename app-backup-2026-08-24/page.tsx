"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <main className="professional-home">

      {/* ================= HEADER ================= */}

      <header className="professional-header">

        <div className="professional-container header-inner">

          <Link href="/" className="professional-brand">
            <div className="brand-mark">EP</div>

            <div className="brand-text">
              <strong>EP APPEC</strong>
              <span>Remera Rukoma</span>
            </div>
          </Link>


          <nav className="professional-navigation">

            <a href="#home">Home</a>

            <a href="#learning">Learning</a>

            <a href="#about">About</a>

            <a href="#contact">Contact</a>

            <Link
              href="/login"
              className="professional-login"
            >
              Student Login
            </Link>

          </nav>

        </div>

      </header>


      {/* ================= HERO ================= */}

      <section
        id="home"
        className="professional-hero"
      >

        <div className="professional-container hero-grid">

          <div className="hero-content">

            <div className="hero-label">
              EP APPEC REMERA RUKOMA
            </div>

            <h1>
              Learn today.
              <br />
              <span>Build your future.</span>
            </h1>

            <p>
              A modern digital learning platform designed to
              help students access lessons, learning materials,
              assignments and academic progress in one place.
            </p>

            <div className="hero-actions">

              <Link
                href="/student/courses"
                className="hero-primary-button"
              >
                Explore Courses
                <span>→</span>
              </Link>

              <a
                href="#about"
                className="hero-secondary-button"
              >
                Discover Our Platform
              </a>

            </div>

            <div className="hero-trust">

              <div className="trust-item">
                <strong>14+</strong>
                <span>Lessons</span>
              </div>

              <div className="trust-divider"></div>

              <div className="trust-item">
                <strong>Primary 6</strong>
                <span>Learning</span>
              </div>

              <div className="trust-divider"></div>

              <div className="trust-item">
                <strong>Online</strong>
                <span>Anytime</span>
              </div>

            </div>

          </div>


          {/* HERO VISUAL */}

          <div className="hero-dashboard">

            <div className="dashboard-window">

              <div className="dashboard-top">

                <div className="dashboard-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <div className="dashboard-title">
                  Student Learning
                </div>

              </div>


              <div className="dashboard-body">

                <div className="dashboard-welcome">
                  <div>
                    <small>WELCOME BACK</small>
                    <h3>Continue Learning</h3>
                  </div>

                  <div className="dashboard-avatar">
                    G
                  </div>
                </div>


                <div className="progress-card">

                  <div className="progress-header">

                    <div>
                      <small>MATHEMATICS</small>
                      <strong>Primary 6</strong>
                    </div>

                    <span>72%</span>

                  </div>

                  <div className="progress-track">
                    <div className="progress-value"></div>
                  </div>

                  <p>
                    Keep going — you are making good progress.
                  </p>

                </div>


                <div className="dashboard-cards">

                  <div className="mini-learning-card">

                    <div className="mini-icon mathematics">
                      M
                    </div>

                    <div>
                      <strong>Mathematics</strong>
                      <span>14 Lessons</span>
                    </div>

                  </div>


                  <div className="mini-learning-card">

                    <div className="mini-icon assignment">
                      A
                    </div>

                    <div>
                      <strong>Assignments</strong>
                      <span>Practice Work</span>
                    </div>

                  </div>

                </div>


                <div className="continue-card">

                  <div className="continue-icon">
                    →
                  </div>

                  <div>
                    <small>CONTINUE</small>
                    <strong>Numbers in Words</strong>
                  </div>

                  <span>›</span>

                </div>

              </div>

            </div>


            <div className="floating-stat stat-one">
              <strong>72%</strong>
              <span>Progress</span>
            </div>

            <div className="floating-stat stat-two">
              <strong>14</strong>
              <span>Lessons</span>
            </div>

          </div>

        </div>

      </section>


      {/* ================= LEARNING PLATFORM ================= */}

      <section
        id="learning"
        className="learning-section"
      >

        <div className="professional-container">

          <div className="section-heading">

            <span>LEARNING PLATFORM</span>

            <h2>
              Everything you need to learn
            </h2>

            <p>
              A simple and organized learning environment
              created to support students throughout their
              educational journey.
            </p>

          </div>


          <div className="learning-grid">

            {/* COURSES */}

            <div className="learning-card">

              <div className="learning-number">
                01
              </div>

              <div className="learning-icon">
                📚
              </div>

              <h3>
                Quality Courses
              </h3>

              <p>
                Access structured courses with organized
                lessons and educational content prepared
                to support your studies.
              </p>

              <Link href="/student/courses">
                Explore courses →
              </Link>

            </div>


            {/* ASSIGNMENTS */}

            <div className="learning-card">

              <div className="learning-number">
                02
              </div>

              <div className="learning-icon">
                ✓
              </div>

              <h3>
                Exercises & Assignments
              </h3>

              <p>
                Practice what you learn through exercises,
                assignments and academic activities.
              </p>

              <Link href="/student/courses">
                Start practicing →
              </Link>

            </div>


            {/* PROGRESS */}

            <div className="learning-card">

              <div className="learning-number">
                03
              </div>

              <div className="learning-icon">
                ↗
              </div>

              <h3>
                Track Your Progress
              </h3>

              <p>
                Follow your academic progress and see how
                far you have progressed through your courses.
              </p>

              <Link href="/student/courses">
                View learning →
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* ================= ABOUT ================= */}

      <section
        id="about"
        className="professional-about"
      >

        <div className="professional-container about-grid">

          <div className="about-visual">

            <div className="about-main-card">

              <div className="about-card-header">
                <span>EP APPEC</span>

                <div className="about-card-status">
                  ONLINE
                </div>
              </div>

              <div className="about-school-title">
                <div className="school-symbol">
                  EP
                </div>

                <div>
                  <strong>
                    Remera Rukoma
                  </strong>

                  <span>
                    E-Learning Platform
                  </span>
                </div>
              </div>

              <div className="about-stat-row">

                <div>
                  <strong>Learning</strong>
                  <span>Resources</span>
                </div>

                <div>
                  <strong>Lessons</strong>
                  <span>Organized</span>
                </div>

                <div>
                  <strong>Progress</strong>
                  <span>Tracked</span>
                </div>

              </div>

            </div>

          </div>


          <div className="about-content">

            <span className="section-small-title">
              ABOUT OUR PLATFORM
            </span>

            <h2>
              Making learning
              <br />
              <span>simpler and accessible.</span>
            </h2>

            <p>
              EP APPEC Remera Rukoma E-Learning Platform
              provides students with a modern digital
              environment where they can access courses,
              lessons, assignments and educational resources.
            </p>

            <p>
              Our platform is designed to make learning
              organized, accessible and easier to follow,
              while helping students build confidence in
              their academic journey.
            </p>


            <div className="about-check-list">

              <div>
                <span>✓</span>
                Organized learning materials
              </div>

              <div>
                <span>✓</span>
                Easy access to lessons
              </div>

              <div>
                <span>✓</span>
                Student progress monitoring
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}

      <section className="professional-cta">

        <div className="professional-container">

          <div className="cta-box">

            <div>

              <span>
                START YOUR LEARNING JOURNEY
              </span>

              <h2>
                Ready to continue learning?
              </h2>

              <p>
                Access your courses and continue
                your studies with EP APPEC Remera Rukoma.
              </p>

            </div>

            <Link
              href="/student/courses"
              className="cta-button"
            >
              View My Courses →
            </Link>

          </div>

        </div>

      </section>


      {/* ================= CONTACT ================= */}

      <section
        id="contact"
        className="professional-contact"
      >

        <div className="professional-container">

          <div className="section-heading">

            <span>CONTACT US</span>

            <h2>
              EP APPEC Remera Rukoma
            </h2>

            <p>
              Have a question or need assistance?
              Contact the school administration.
            </p>

          </div>


          <div className="contact-grid">

            <div className="contact-item">

              <div className="contact-icon">
                L
              </div>

              <div>
                <small>LOCATION</small>
                <strong>Remera Rukoma, Rwanda</strong>
              </div>

            </div>


            <div className="contact-item">

              <div className="contact-icon">
                @
              </div>

              <div>
                <small>EMAIL</small>
                <strong>
                  info@epappec.edu.rw
                </strong>
              </div>

            </div>


            <div className="contact-item">

              <div className="contact-icon">
                P
              </div>

              <div>
                <small>PHONE</small>
                <strong>
                  +250 XXX XXX XXX
                </strong>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer className="professional-footer">

        <div className="professional-container footer-inner">

          <div className="footer-brand">

            <div className="footer-brand-mark">
              EP
            </div>

            <div>
              <strong>
                EP APPEC Remera Rukoma
              </strong>

              <span>
                Modern digital learning for better education.
              </span>
            </div>

          </div>


          <div className="footer-links">

            <a href="#home">
              Home
            </a>

            <a href="#learning">
              Learning
            </a>

            <a href="#about">
              About
            </a>

            <a href="#contact">
              Contact
            </a>

          </div>

        </div>


        <div className="professional-container footer-bottom">

          <span>
            © 2026 EP APPEC Remera Rukoma.
            All Rights Reserved.
          </span>

          <span>
            District Kamonyi · Sector Rukoma
          </span>

        </div>

      </footer>

    </main>
  );
}