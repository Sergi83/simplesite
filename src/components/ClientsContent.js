import React, { useState } from "react";

// import array with clients data (id, names, avatar, birth, gender, country, email, job, company, message)
import clients from "../content/clients_avatar_job.json";

// icons
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

// rafc
export const ClientsContent = () => {
  // create state
  const [clientsData, setClientsData] = useState(clients);

  // get index
  const [index, setIndex] = useState(0);

  // get data from a client object
  const {
    first_name,
    last_name,
    gender,
    date_of_birth,
    job_title,
    company_name,
    avatar,
    email,
    country,
    message,
  } = clientsData[index];

  // clg
  //   console.log(clientsData);

  const checkNumber = (number) => {
    if (number > clientsData.length - 1) {
      return 0;
    }
    if (number < 0) {
      return clientsData.length - 1;
    }
    return number;
  };

  //   nfn
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  //
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const randomPerson = () => {
    //   random index between 0 and last element in an array
    let randomNumber = Math.floor(Math.random() * clientsData.length);

    // prevent repetition of numbers
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };

  return (
    <article className="review">
      <div className="client-info">
        <div className="img-container">
          <img
            src={avatar}
            alt={`avatar of ${first_name} ${last_name}`}
            className="client-img"
          />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>

        <div className="info-container">
          <h3 className="author">
            {first_name} {last_name}
          </h3>
          
          <h4 className="job">
            {job_title} at "{company_name}" ({country})
          </h4>
          <div className="info-p">
            <p>{gender}</p>
            <p>{date_of_birth}</p>
            <p className="email">{email}</p>
          </div>

          
        </div>
      </div>

      <div className="client-message">
        <p className="info">{message}</p>
      </div>

      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>

      <button className="random button" onClick={randomPerson}>
        Random
      </button>

    </article>
  );
};
