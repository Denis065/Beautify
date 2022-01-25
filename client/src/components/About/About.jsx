import React from 'react';

import './About.css';

function About() {
  return (
    <>
      <div className="about-block">
        <div className="about-text">
          <h2>Наша философия</h2>
          <p >Цель beautifier - раскрывать нестандартность и индивидуальность внешнего вида каждого посетителя.</p>
          <p >Желания каждого гостя мы воплощаем в высоком классе исполнения.</p>
          <p >Наши квалифицированные специалисты оказывают услуги высокого качества с применением профессиональной косметики элитных производителей.</p>
          <p >Мы обращаем внимание на детали и полностью отвечаем за результат.</p>
        </div>
        <div className="about-img">
          <img src="https://thumb.tildacdn.com/tild6439-3831-4664-a337-346233653330/-/cover/910x1224/center/center/-/format/webp/IMG_6945_1.jpg" alt="" />
        </div>
      </div>
    </>
  );
}

export default About;
