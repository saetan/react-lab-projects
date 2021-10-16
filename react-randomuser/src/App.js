import React from 'react';
import { useState, useEffect } from 'react';
import './styles.css';

export default function App() {

  const [user, setUser] = useState({});
  const [getNewTrigger, setGetNewTrigger] = useState(false);
  const [currentActiveIcon, setCurrentActiveIcon] = useState({
    iconType: 'name',
    iconValue: 'LalaDemacia Tan'
  });

  useEffect(() => {
    async function makeApiCall() {
      const res = await fetch('https://randomuser.me/api/');
      const data = await res.json();
      setUser(data.results[0]);
      setCurrentActiveIcon({
        iconType: 'name',
        iconValue: `${data.results[0].name.first} ${data.results[0].name.last}`
      })
    }

    makeApiCall();
  }, [getNewTrigger]);


  const handleClick = (event) => {
    switch (event.target.id) {
      case "name":
        setCurrentActiveIcon({
          iconType: "name",
          iconValue: `${user.name.first} ${user.name.last}`
        });
        break;

      case "email":
        setCurrentActiveIcon({
          iconType: "email",
          iconValue: `${user.email}`
        });
        break;

      case "birthdate":
        setCurrentActiveIcon({
          iconType: "birthdate",
          iconValue: `${(user.dob.date).substring(0, 10)}`
        });
        break;
      case "city":
        setCurrentActiveIcon({
          iconType: "city",
          iconValue: `${(user.location.city)}`
        });
        break;
      case "phone":
        setCurrentActiveIcon({
          iconType: "phone",
          iconValue: `${(user.phone)}`
        });
        break;

      default:
        setCurrentActiveIcon({
          iconType: "UWU",
          iconValue: "GIVE ME BUBBLE TEA"
        });
    }

  };

  const styles = {
    backgroundImage: user.picture ? `url(${user.picture.large})` : '',
  };
  return (
    <>
      <button onClick={() => setGetNewTrigger(!getNewTrigger)}>Pull Another Random User</button>
      <div id="container">
        <div style={styles} id="photo"></div>
        <div id="content">
          <span id="smalltext">My {currentActiveIcon.iconType} is</span>
          <span id="bigtext">{currentActiveIcon.iconValue}</span>
        </div>
        <div onClick={handleClick} className="attribute">
          <span id="name" role="img" aria-labelledby="face">
            😀
          </span>
        </div>
        <div onClick={handleClick} className="attribute">
          <span id="email" role="img" aria-labelledby="email">
            📧
          </span>
        </div>
        <div onClick={handleClick} className="attribute">
          <span id="birthdate" role="img" aria-labelledby="confetti">
            🎉
          </span>
        </div>
        <div onClick={handleClick} className="attribute">
          <span id="city" role="img" aria-labelledby="city">
            🌆
          </span>
        </div>
        <div onClick={handleClick} className="attribute">
          <span id="phone" role="img" aria-labelledby="tele">
            📞
          </span>
        </div>
      </div>
    </>
  );
}
