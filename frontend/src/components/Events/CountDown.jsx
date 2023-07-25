import axios from "axios";
import React, { useEffect, useState } from "react";
import { server } from "../../server";

const CountDown = ({ data }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    if (
      typeof timeLeft.days === 'undefined' &&
      typeof timeLeft.hours === 'undefined' &&
      typeof timeLeft.minutes === 'undefined' &&
      typeof timeLeft.seconds === 'undefined'
    ) {
      axios.delete(`${server}/event/delete-shop-event/${data._id}`);
    }
    return () => clearTimeout(timer);
  });

  function calculateTimeLeft() {
    const difference = +new Date(data.Finish_Date) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  const timerComponents = Object.keys(timeLeft).map(({days, hours, minutes, seconds}, index) => {
    if (!timeLeft) {
      return null;
    }

    return (
      <div class="countdown-box" key={index}>
      <p class="countdown-desc">Hurry Up! Offer ends in:</p>
      <div class="countdown">
      <div class="countdown-content">
        <p class="display-number">{timeLeft.days}</p>

        <p class="display-text">Days</p>
      </div>

      <div class="countdown-content">
        <p class="display-number">{timeLeft.hours}</p>
        <p class="display-text">Hours</p>
      </div>

      <div class="countdown-content">
        <p class="display-number">{timeLeft.minutes}</p>
        <p class="display-text">Min</p>
      </div>

      <div class="countdown-content">
        <p class="display-number">{timeLeft.seconds}</p>
        <p class="display-text">Sec</p>
      </div>
    </div>
    </div>
    );
  });

  const useOne = timerComponents.splice(0, 1);
  return (
    <div>
      {timerComponents.length ? (
        useOne
      ) : (
        <span className="text-[red] text-[25px]">Time's Up</span>
      )}
    </div>
  );
};

export default CountDown;
