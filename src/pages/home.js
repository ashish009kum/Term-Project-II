import React, { useEffect } from "react";
import "../css/App.css";
import admin from "../images/Admin.jpg";
import hostel from "../images/Hostel.jpg";
import ground from "../images/grnd.jpg";

const Home = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div className="home">
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={admin} className="d-block w-100" alt="" />
            <div className="carousel-caption d-none d-md-block">
              <h5>National Institute of Technology Hamirpur</h5>
              <p>
                National Institute of Technology Hamirpur is a public technical
                university located in Hamirpur, Himachal Pradesh, India. It is
                one of the thirty one National Institutes of Technology
                established, administered and funded by MHRD.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={ground} className="d-block w-100" alt="" />
          </div>
          <div className="carousel-item">
            <img src={hostel} className="d-block w-100" alt="" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <section>
        <h2>About NIT Hamirpur</h2>
        <p>
          National Institute of Technology Hamirpur is one of the thirty-one
          NITs of the country, which came into existence on 7th August 1986 as
          Regional Engineering College, a joint and cooperative enterprise of
          the Govt. of India and Govt. of Himachal Pradesh. At the time of
          inception, Institute had only two departments i.e, Civil and
          Electrical Engineering having an intake of 30 students in each.
        </p>
        <p style={{ textIndent: "30em" }}>
          On 26th June 2002, REC Hamirpur was awarded the status of Deemed
          University and upgraded to National Institute of Technology. NIT
          Hamirpur is an institute of National importance set up by an act of
          Parliament namely the National Institute of Technology Act 2007 which
          received the accent of the President of India on 5th June, 2007. The
          provisions of Act came into force with effect from 15th August, 2007
          as per notification S.O. 1384 (E) dated 9th August, 2007 of the
          Department of Higher Education, MHRD, New Delhi. As per provisions of
          the said Act, the Institute runs on non-profit basis.
        </p>
        <p style={{ textIndent: "10em" }}>
          The goals of the Institute as embodied in logo are truly remarkable in
          their scope and vision. The Institute offers Bachelor, Master and
          Doctoral programmes in Engineering, Sciences, Architecture, Management
          and Humanities. The Institute spares no effort to foster the spirit of
          national integration among students, a close interaction with industry
          and laying strong emphasis on research. The institute has the
          flexibility to evolve and change in response to requirements of the
          Industry and happenings in technical world. Various programmes serve
          the purpose of building a comprehensive foundation of knowledge and of
          enhancing confidence, creativity and innovation in its students.
        </p>
      </section>
      <section>
        <h2>Connectivity</h2>
        <p>
          The NIT Hamirpur campus is situated at Anu in Hamirpur district of
          Himachal Pradesh and is nearly 4 Kms away from main bus stand of
          Hamirpur on Hamirpur-Tauni Devi road. The city of Hamirpur is well
          connected with the rest of the country by road. Hamirpur is at a
          distance of about 450 Kms from Delhi and 200 Kms from Chandigarh.
        </p>
        <p style={{ textIndent: "10em" }}>
          {" "}
          Nearest broad gauge railway junction is at Una (Himachal Pradesh), at
          a distance of around 80 Kms from Hamirpur. Una is well linked to all
          parts of country and journey is of nine hours from Old Delhi Railway
          Station. Taxi/Bus services are available from Hamirpur to Una. To find
          details about train service from different cities towards Una, one can
          visit http://www.indianrail.gov.in/
        </p>
        <p>
          The nearest airport is at Dharamshala (Gaggal, District Kangra) which
          is about 75 Kms (02 Hours) from Hamirpur, Chandigarh International
          Airport is at about 200 Kms (About 04 Hours) from here.
        </p>
      </section>
    </div>
  );
};

export default Home;
