import React from 'react';
import './Certifications.css';

const certifications = [
  {
    title: 'Python Full Stack Development',
    provider: 'Your Institute Name',
    date: 'October 2024',
  },
  {
    title: 'Cloud Security and Machine Learning',
    provider: 'Coursera',
    date: 'September 2024',
  },
  {
    title: 'ReactJS Advanced',
    provider: 'Udemy',
    date: 'August 2024',
  },
];

const Certifications = () => {
  return (
    <section className="certifications">
      <h2 className="certifications-title">Certifications</h2>
      <ul className="certifications-list">
        {certifications.map((cert, index) => (
          <li key={index} className="cert-item">
            <h3 className="cert-title">{cert.title}</h3>
            <p className="cert-provider">{cert.provider}</p>
            <p className="cert-date">{cert.date}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Certifications;
