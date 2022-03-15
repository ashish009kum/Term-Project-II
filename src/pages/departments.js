import React from "react";
import "../css/App.css";

const Departments = () => {
  return (
    <main>
      <div className="d-flex departments">
        <div className="first">
          <ul className="allDepart px-2">
            <li className="active">
              <a href="#computer">Computer Science & Engineering</a>
            </li>
            <li>
              <a href="#ece">Electronics & Communication Engineering</a>
            </li>
            <li>
              <a href="#mechanical">Mechanical Engineering</a>
            </li>
            <li>
              <a href="#eee">Electrical & Electronics Engineering</a>
            </li>
            <li>Chemical Engineering</li>
            <li>Civil Engineering</li>
            <li>Material Science & Engineering</li>
          </ul>
        </div>
        <div className="w-100 data-section mt-3">
          <div className="mt-2">
            <h2 className="text-center" id="computer">
              Computer Science & Engineering <i class="fa-solid fa-desktop"></i>
            </h2>
            <h4 className="mt-2">
              At Present, the Department offers following academic programmes:
            </h4>
            <ul className="dep-prop">
              <li>B.Tech. in Computer Science & Engineering (Four Years)</li>
              <li>
                Dual Degree in Computer Science & Engineering [B.Tech. +
                M.Tech.] (Five Years)
              </li>
              <li>M.Tech. in Computer Science & Engineering (Two Years)</li>
              <li>M.Tech. in Mobile Computing (Two Years)</li>
              <li>Ph.D. in Computer Science & Engineering</li>
            </ul>
            <p>
              At Present, the Department offers following academic programmes:
              The aim of these programmes is to enable students to acquire
              specialized knowledge for various subjects in computer science &
              information technology, as well as to enrich the students
              personal, social and cognitive development to meet challenges of
              today and tomorrow. The Department is well equipped with high end
              computers, latest software & state-of-the-art IT infrastructure
              and all these computing resources are inter-connected with high
              speed intranet. Our students are exposed to up-to-date curriculum,
              technology and techniques. The Department has well experienced &
              dedicated faculty members with different specializations. Our
              curriculum is modified, enhanced and updated regularly as we
              introduce new courses to reflect current topics in this
              fast-changing discipline. Our faculty is involved in cutting-edge
              research areas,including computer networks, mobile computing,
              mobile ad hoc networks, wireless sensor networks, security, image
              processing, data mining, artificial intelligence, computer
              architecture and reconfigurable computing. The Department prides
              itself on good career opportunities for students. Our students
              graduate with more than 100% placement through campus. Many
              companies of repute show their interest to visit our Institute for
              campus recruitment.
            </p>
            <div className="buttons mt-2">
              <button className="btn btn-success">
                Add time table to calender
              </button>
              <button className="btn btn-info mx-2">Notes/Papers</button>
            </div>
          </div>
          <div className="mt-3">
            <h2 className="text-center" id="ece">
              Electronics & Communication Engineering{" "}
              <i class="fa-solid fa-robot"></i>
            </h2>
            <p>
              Established in the year 1988, the Electronics & Communication
              Engineering (E&CE) Department NIT Hamirpur HP, has built an
              international reputation for excellence in teaching, research and
              service. Electronics engineers are changing the world to a
              comfortable global home. The information and technology revolution
              has been built on the advances of Electronics. The E&CE Department
              takes pride in its high national rankings and the international
              recognition its faculty has received from their peers.
            </p>
            <p style={{ textIndent: "20em" }}>
              E&CED is making exhilarating progress in areas ranging from
              microelectronics, mobile communications to VLSI Design Automation.
              In labs and classrooms, students draw on the expertise and
              knowledge of our able faculty, integrating practical, hands-on
              research experience with challenging and interesting course-work.
            </p>
            <p style={{ textIndent: "10em" }}>
              The team approach is very warm in the Department of E&CE. A
              palpable excitement surrounds the Department of E&CE, an
              enthusiasm pervades every classroom and lab, invigorating our
              students and spurring on our faculty to fresh innovations. In an
              age when electronics play a major role in daily life and the
              promise of nanotechnology is coming to fruition, it truly is a
              great time to be a part of E&C engineering. The pollution free
              aura of the state surrounded by snow-clad Dauladhar ranges,
              technological strength and increasing national prominence has
              presented us with unmatched opportunities for research, education,
              and service to society. We have grown into a most sought after
              departments in NIT Hamirpur, adding more faculty and branching
              into new projects and research areas. Our department maintains
              close affiliations and has a joint project with CSED. At B.Tech
              Level, 15th batch of E&CE passed out in 2006. M.Tech. in VLSI
              Design Automation & Techniques has started from 2006.
            </p>
            <div className="buttons mt-2">
              <select
                class="form-select btn-success d-inline"
                onChange={(event) => {
                  window.location.href = event.target.value;
                }}
              >
                <option selected>Add time table to calender</option>
                <option value="https://mail.google.com/">1st Year</option>
                <option value="2">2nd Year</option>
                <option value="3">3rd Year</option>
                <option value="4">4th Year</option>
              </select>
              <button className="btn btn-info mx-2">Notes/Papers</button>
            </div>
          </div>
          <div>
            <h2 className="text-center" id="mechanical">
              Mechanical Engineering <i className="fa-solid fa-gear"></i>
            </h2>
            <p>
              The Department of Mechanical Engineering came into its existence
              right from the inception of the then Regional Engineering College
              Hamirpur (now National Institute of Technology Hamirpur) in the
              year 1986 and served as catering department to other disciplines.
              The discipline of Mechanical Engineering started offering
              undergraduate programme leading to four year Bachelor of
              Technology (B.Tech) degree in Mechanical Engineering in the year
              1994. The first batch was started with an intake of 30 students
              which has now been enhanced to 60 students by the Ministry of HRD,
              Government of India from the session 2006-2007 which has further
              been enhanced to 90 students. Since its existence, 21 Batches of
              Undergraduate students with B.Tech Degree in Mechanical
              Engineering, 14 batches of Postgraduate programme i.e.
              M.Tech.(Thermal Engineering) and 7 batches of M.Tech. (CAD CAM
              Engineering) have passed. Apart from this about 20 students have
              got their PhD in various areas of specialisation i.e. Thermal,
              Production, Materials and Design. The department has a separate
              building housing the various laboratories viz : Strength of
              Materials, Theory of Machines, Dynamics of Machinery, Mechanical
              Measurements and Control, Heat Transfer, Refrigeration & Air
              Conditioning, Turbo Machines, Production, CAD/CAM, Metrology &
              Heat Engines, lecture rooms, seminar room, faculty chambers and
              office. The major advanced equipments available in these labs are:
              Computerized two stroke petrol engine test rig, Gas analyzer,
              Vibration exciter, Dynamometer, Four ball tester (computerized),
              Sound level meter, Hardness tester (Rockwell & Brinell), Impact
              tester,Sophisticated metrology equipment, FFT analyzer machine
              condition monitoring equipment, Journal bearing test rig,
              Refrigeration tutor, Air conditioning tutor, Ice plant tutor,
              Various hydraulic turbines (Kaplan, Francis, Pelton wheel) and
              pumps, Centrifugal blower & Heat transfer equipments, Universal
              Testing Machine (Computerized), Plasma cutting machine, Pollution
              checking equipments, Projection manometer, Flaw detector,
              Computerized vertical machining centre, Robot etc.Projection
              manometer, Flaw detector, Computerized vertical machining centre,
              Robot etc.Projection manometer, Flaw detector, Computerized
              vertical machining centre, Robot etc.
            </p>
          </div>
          <i class="fa-duotone fa-transformer-bolt"></i>
          <div id="eee">
            <h2 className="text-center">
              Electrical & Electronics Engineering{" "}
              <i class="fa-solid fa-charging-station"></i>
            </h2>
            <p>
              The Department of Electrical Engineering, established in the year
              1986, is one of the oldest Departments of National Institute of
              Technology Hamirpur. The Department has been imparting quality
              education at undergraduate and post-graduate level. The faculty
              members have been active in teaching and research activities. The
              course curriculum is being revised from time to time so as to keep
              students abreast with latest developments and emerging
              technologies. Various departmental laboratories have been
              strengthened and modernized by procuring state of art equipment.
              The department is also equipped with latest experimental and
              computational facilities for taking up R&D and consultancy
              activities in different areas of Electrical Engineering. Alumni of
              the department are well placed in various reputed government /
              non-government administrative,academic, research, engineering
              organizations in the country. Many of them are well settled in
              various reputed organization in abroad. Department produces not
              only knowledgeable, skilled, trained employable engineers but also
              a good citizen having concern with society, environment and
              ethical issues.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Departments;
