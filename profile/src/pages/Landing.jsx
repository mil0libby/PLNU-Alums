import React, { useEffect, useState } from "react";
import Logo from "../assets/logo.png";
import Profile from "../components/Profile";
import RightArrow from "../assets/right-arrow.png";
import LeftArrow from "../assets/left-arrow.png";
import SearchBar from "../components/SearchBar";
import data from "../data.json";

export default function Landing() {
  const [index, setIndex] = useState(1);
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(3);
  const [profiles, setProfiles] = useState(data);

  useEffect(() => {
    console.log(index);
  }, [index]);

  const handleRightArrow = () => {
    index < max && setIndex((prev) => prev + 1);
  };

  const handleLeftArrow = () => {
    index > min && setIndex((prev) => prev - 1);
  };

  return (
    <div className="container">
      <div className="top"></div>
      <div className="row">
        <nav>
          <span className="img__span">
            <img src={Logo} alt="" className="logo" />
          </span>
          <span className="title__span">Health Science Alumni</span>
        </nav>
        <SearchBar profiles={profiles} setIndex={setIndex}></SearchBar>
        <div className="profile__wrapper">
          <Profile profile={profiles[index]} key={index}></Profile>
        </div>
        <div className="arrows__wrapper">
          {index > min ? (
            <button onClick={handleLeftArrow} className="left__arrow">
              <img src={LeftArrow} alt="" className="arrow__btn" />
            </button>
          ) : (
            <button className="arrow--hidden">{"<-"}</button>
          )}
          {index < max ? (
            <button onClick={handleRightArrow} className="right__arrow">
              <img src={RightArrow} alt="" className="arrow__btn" />
            </button>
          ) : (
            <button className="arrow--hidden">{"<-"}</button>
          )}
        </div>
      </div>
    </div>
  );
}
