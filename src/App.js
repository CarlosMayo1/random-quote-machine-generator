import React, { useState } from "react";
// import { NavLink } from "react-router-dom";

import classes from "./App.module.css";

import { quotes } from "./Quotes";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faChevronRight,
  faHeart,
  faCoffee,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(faTwitter, faGithub, faChevronRight, faCoffee, faHeart);

const chooseRandomNumber = (arr) => {
  return Math.floor(Math.random() * arr.length);
};

const QuoteMachine = () => {
  const [randomNumber, setRandomNumber] = useState(chooseRandomNumber(quotes));

  const onNewQuoteHandler = () => {
    setRandomNumber(chooseRandomNumber(quotes));
  };

  return (
    <React.Fragment>
      <div className={classes.container}>
        <div id="quote-box" className={classes["quote-box"]}>
          <h2>Need a quote? Give it a try</h2>
          <div id="text" className={classes.text}>
            {quotes[randomNumber].text}
            <p id="author" className={classes.author}>
              {`- ${quotes[randomNumber].author} -`}
            </p>
          </div>
          <div className={classes.actions}>
            <button className={classes["actions_buttons"]}>
              <a
                href={`https://twitter.com/intent/tweet?text=${quotes[randomNumber].text} -${quotes[randomNumber].author}-`}
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "twitter"]} />
              </a>
            </button>
            {/* <NavLink
              className={classes["actions_buttons"]}
              id="tweet-quote"
              formTarget="_blank"
              to="/"
            >
              <FontAwesomeIcon icon={["fab", "twitter"]} />
            </NavLink> */}
            <button className={classes["actions_buttons"]}>
              <FontAwesomeIcon icon={["fab", "github"]} />
            </button>
            <button
              className={classes["actions_buttons"]}
              id="new-quote"
              onClick={onNewQuoteHandler}
            >
              <FontAwesomeIcon icon="chevron-right" />
            </button>
          </div>
        </div>
        <div className={classes.about}>
          <p>
            Made with <FontAwesomeIcon icon="heart" /> and{" "}
            <FontAwesomeIcon icon="coffee" /> by Carlos Mayo
          </p>
          <p>This is the first FCC project</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default QuoteMachine;
