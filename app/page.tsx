
import Link from "next/link";
import styles from "./page.module.css";

const categories = [
  {
    name: "Mathematics",
    description: "Numbers, calculations, geometry and problem solving.",
    icon: "M",
  },
  {
    name: "English",
    description: "Reading, writing, grammar and communication skills.",
    icon: "E",
  },
  {
    name: "Kinyarwanda",
    description: "Language, reading, writing and communication.",
    icon: "K",
  },
  {
    name: "Science",
    description: "Science, health, nature and the environment.",
    icon: "S",
  },
  {
    name: "Social Studies",
    description: "History, geography, society and citizenship.",
    icon: "SS",
  },
];

export default function HomePage() {
  return (
    <div className={styles.home}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <Link href="/" className={styles.brand}>
            <div className={styles.logo}>EP</div>
            <div>
              <span className={styles.brandName}>EP APPEC</span>
              <span className={styles.brandSubtitle}>
                Remera Rukoma E-Learning Platform
              </span>
            </div>
          </Link>

          <nav className={styles.nav} aria-label="Main navigation">
            <Link href="/">Home</Link>
            <Link href="/login">Admissions</Link>
            <Link href="#guides">Online Guides</Link>
            <Link href="/student/materials">E-Resources</Link>
            <Link href="/student/courses">Online Courses</Link>
            <Link href="/login" className={styles.loginButton}>
              Log in
            </Link>
          </nav>
        </div>
      </header>

      <main className={styles.main} id="home">
        <div className={styles.container}>
          <div className={styles.layout}>
            <aside className={styles.sidebar}>
              <section className={styles.sideCard}>
                <div className={styles.sideTitle}>Learning Navigation</div>
                <div className={styles.sideBody}>
                  <Link href="/" className={styles.sideLink}>Home</Link>
                  <Link href="/student" className={styles.sideLink}>Student Dashboard</Link>
                  <Link href="/teacher" className={styles.sideLink}>Teacher Dashboard</Link>
                  <Link href="/admin" className={styles.sideLink}>Administration</Link>
                  <Link href="/student/courses" className={styles.sideLink}>All Courses</Link>
                  <Link href="/student/materials" className={styles.sideLink}>Learning Materials</Link>
                </div>
              </section>

              <section className={styles.sideCard}>
                <div className={styles.sideTitle}>Course Categories</div>
                <div className={styles.sideBody}>
                  {categories.map((category) => (
                    <Link
                      key={category.name}
                      href="/student/courses"
                      className={styles.sideLink}
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              </section>

              <section className={styles.sideCard}>
                <div className={styles.sideTitle}>Support Contacts</div>
                <div className={styles.sideText}>
                  EP APPEC Remera Rukoma
                  <br />
                  Email: epappec@gmail.com
                  <br />
                  Phone: 0792441035
                </div>
              </section>

              <section className={styles.sideCard}>
                <div className={styles.sideTitle}>Site News & Forum</div>
                <div className={styles.sideBody}>
                  <Link href="/login" className={styles.sideLink}>
                    School Announcements
                  </Link>
                  <Link href="/login" className={styles.sideLink}>
                    Student Discussions
                  </Link>
                  <Link href="/login" className={styles.sideLink}>
                    Teacher Updates
                  </Link>
                </div>
              </section>

              <section className={styles.sideCard}>
                <div className={styles.sideTitle}>Activities & Resources</div>
                <div className={styles.sideBody}>
                  <Link href="/student/materials" className={styles.sideLink}>
                    Learning Resources
                  </Link>
                  <Link href="/student/courses" className={styles.sideLink}>
                    Online Lessons
                  </Link>
                  <Link href="/login" className={styles.sideLink}>
                    Assignments
                  </Link>
                </div>
              </section>

              <section className={styles.sideCard}>
                <div className={styles.sideTitle}>Upcoming Events</div>
                <div className={styles.sideText}>
                  School announcements and upcoming learning activities will
                  be communicated through the school platform.
                </div>
              </section>

              <section className={styles.sideCard}>
                <div className={styles.sideTitle}>Online Access</div>
                <div className={styles.sideBody}>
                  <Link href="/login" className={styles.sideLink}>Log in</Link>
                  <Link href="/login" className={styles.sideLink}>Calendar & Updates</Link>
                </div>
              </section>
            </aside>

            <div className={styles.content}>
              <section className={styles.hero}>
                <div className={styles.heroLabel}>
                  EP APPEC REMERA RUKOMA · KAMONYI DISTRICT
                </div>

                <h1>
                  Welcome to EP APPEC Remera Rukoma E-Learning Platform
                </h1>

                <p>
                  Discover a better way to learn. Access online courses,
                  lessons, educational resources and assignments in one
                  convenient digital learning environment.
                </p>

                <div className={styles.heroActions}>
                  <Link href="/login" className={styles.primaryButton}>
                    Access Your Account
                  </Link>
                  <Link href="/student/courses" className={styles.secondaryButton}>
                    Explore Courses
                  </Link>
                </div>
              </section>

              <section className={styles.section}>
                <div className={styles.sectionHeading}>
                  <h2>Welcome to Our School</h2>
                  <p>
                    Supporting teaching and learning through accessible
                    digital education.
                  </p>
                </div>

                <div className={styles.sideCard}>
                  <div className={styles.sideText}>
                    EP APPEC Remera Rukoma is located in Rukoma Sector,
                    Kamonyi District, Rwanda. This platform provides learners
                    and teachers with access to digital learning materials,
                    courses and educational activities.
                  </div>
                </div>
              </section>

              <section className={styles.section}>
                <div className={styles.sectionHeading}>
                  <h2>Explore Course Categories</h2>
                  <p>Select a subject to explore available learning content.</p>
                </div>

                <div className={styles.courseGrid}>
                  {categories.map((category) => (
                    <Link
                      href="/student/courses"
                      key={category.name}
                      className={styles.courseCard}
                    >
                      <div className={styles.courseIcon}>
                        {category.icon}
                      </div>
                      <h3>{category.name}</h3>
                      <p>{category.description}</p>
                    </Link>
                  ))}
                </div>
              </section>

              <section className={styles.section} id="guides">
                <div className={styles.sectionHeading}>
                  <h2>Online Guides & Manuals</h2>
                  <p>
                    Helpful guidance for using the school e-learning platform.
                  </p>
                </div>

                <div className={styles.guideGrid}>
                  <Link href="/login" className={styles.guideCard}>
                    <h3>Student Guide</h3>
                    <p>
                      Learn how to access courses, study lessons, find
                      materials and follow assignments.
                    </p>
                    <span>Access student area →</span>
                  </Link>

                  <Link href="/login" className={styles.guideCard}>
                    <h3>Teacher Guide</h3>
                    <p>
                      Learn how to access teaching tools, courses, lessons
                      and learning resources.
                    </p>
                    <span>Access teacher area →</span>
                  </Link>
                </div>
              </section>

              <section className={styles.section}>
                <div className={styles.sectionHeading}>
                  <h2>Quick Access</h2>
                  <p>Choose your learning or administration area.</p>
                </div>

                <div className={styles.quickAccess}>
                  <Link href="/student" className={styles.quickCard}>
                    Student Portal →
                  </Link>
                  <Link href="/teacher" className={styles.quickCard}>
                    Teacher Portal →
                  </Link>
                  <Link href="/admin" className={styles.quickCard}>
                    Admin Portal →
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      <section className={styles.contact} id="contact">
        <div className={styles.container}>
          <div className={styles.sectionHeading}>
            <h2>Contact Our School</h2>
            <p>Get in touch with EP APPEC Remera Rukoma.</p>
          </div>

          <div className={styles.contactGrid}>
            <div className={styles.contactItem}>
              <strong>School Location</strong>
              <span>Rukoma Sector, Kamonyi District, Rwanda</span>
            </div>

            <div className={styles.contactItem}>
              <strong>Email Address</strong>
              <span>epappec@gmail.com</span>
            </div>

            <div className={styles.contactItem}>
              <strong>Telephone</strong>
              <span>0792441035</span>
            </div>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={`${styles.container} ${styles.footerInner}`}>
          <div>
            <strong>EP APPEC Remera Rukoma</strong>
            <div className={styles.footerMuted}>E-Learning Platform</div>
          </div>

          <div className={styles.footerMuted}>
            Kamonyi District · Rukoma Sector · Rwanda
          </div>

          <div className={styles.footerMuted}>
            © 2026 EP APPEC Remera Rukoma
            <br />
            Developed by NDORIMANA Gilbert
          </div>
        </div>
      </footer>
    </div>
  );
}
