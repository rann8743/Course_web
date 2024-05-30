import React from 'react';
import './style.css';
import Nav from './Nav';
import Section from './Section';
import Footer from './Footer';

function App() {
  return (
    <div className="container">
      <Nav />
      <div className="content">
        <div>
          <h1 className="title">CSCB63: Design and Analysis of Data Structures</h1>
        </div>
        <Section id="syllabus" title="Syllabus">
          <p>Design, analysis, implementation and comparison of efficient data structures for common abstract data types. Priority queues: heaps and mergeable heaps. Dictionaries: balanced binary search trees, B-trees, hashing. Amortization: data structures for managing dynamic tables and disjoint sets. Data structures for representing graphs. Graph searches.</p>
          <p><span className="strong">Exclusion</span> CSC263H, CSC265H, (CSCC78H)</p>
          <p><span className="strong">Prerequisite</span> CSCB36H or (CSCB38H) & [CGPA 2.75 or enrolment in a CSC subject POSt]</p>
          <p><span className="strong">Syllabus</span> Assignment: 5% *3, Term Test: 15% *3, Final Exam: 35%</p>
          <p><span className="strong">Lectures</span> Wednesdays 3-4pm <a href="https://utoronto.zoom.us/j/89553548645#success">ZOOM LINK</a>, Thursdays 9:10-11:00 <a href="https://utoronto.zoom.us/j/83378932991">ZOOM LINK</a></p>
          <p><span className="strong">Office Hours</span> Usually Mondays 11:00-12:30, Friday 10:40-11:30. Please see the calendar for weekly changes.</p>
          <p><span className="strong">Calendar</span> You can view the calendar <a href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf">here</a>!</p>
        </Section>
        {/* Add more sections as needed */}
      </div>
      <Footer />
    </div>
  );
}

export default App;
