import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="E-Commerce Web Application"
              description="Built a full-stack E-Commerce platform using React.js to
                   deliver a responsive, user-friendly interface. Integrated Stripe for secure payments; implemented cart
                   functionality alongside parcel tracking to improve order flow. Designed mobile-optimized layouts
                  while collaborating across teams to achieve project goals"
              ghLink="https://github.com/kodurisaiganesh/E-Commerce"
              //demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Online Quiz Application"
              description="Developed a dynamic quiz app integrating an external API for real-time questions. Implemented asynchronous JavaScript for data fetching,
               DOM manipulation, and event handling. Designed a scoring system with a progress tracker and a responsive UI for an
                engaging,cross-device experience."
              ghLink="https://github.com/kodurisaiganesh/Quiz"
              demoLink="https://quiz-mu-pearl.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Academic Evaluation Platform (GRADE)"
              description="Developed an academic evaluation platform using React.js, Node.js, Tailwind CSS, along with MongoDB to enhance performance insights. Designed secure role-based access for Admins, Faculty, and
Students while enabling real-time data updates through responsive dashboards to improve transparency
in academic decision-making."
              ghLink="https://github.com/Sandeepreddi/GRADE-Grading-and-Reporting-Academic-Development-Evaluation"
              //demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Blog Application"
              description="Developed a full-stack blog platform with secure user authentication and role-based access. Implemented blog creation, editing, deletion, and public viewing with pagination. Utilized SQL for efficient data management and designed a responsive UI using React. Deployed the application on a cloud platform for scalability and accessibility."
              ghLink="https://github.com/kodurisaiganesh/FullStack_Blog"
              demoLink="https://blogappfront.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Calendar Web Application"
              description="Developed an interactive calendar with dynamic month/year navigation, current-date highlighting, and event management from static JSON data. Implemented visual cues for overlapping events and ensured a responsive, user-friendly interface."
              ghLink="https://github.com/kodurisaiganesh/Calendar"
              demoLink="https://kodurisaiganesh.github.io/Calendar/"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
