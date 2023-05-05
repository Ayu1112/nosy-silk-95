import React from "react";
import logo from "../../Assets/logo.png";
import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";

export const Footer = () => {
  return (
    <div style={{ backgroundColor: "#ffffff" }}>
      <div
        style={{
          height: "350px",
          display: "flex",
          justifyContent: "space-evenly",
          paddingTop: "70px",
        }}
      >
        <div>
          <p
            style={{
              marginBottom: "20px",
              fontSize: "17px",
              fontFamily: "'Playfair Display', serif",
              color: "rgba(0, 0, 0, 0.75)",
            }}
          >
            YOGA STYLE
          </p>
          <p>Anusara</p>
          <p>Ashtanga</p>
          <p>Bikram</p>
          <p>Hatha</p>
        </div>
        <div style={{ marginRight: "30px" }}>
          <p>Hot Yoga</p>
          <p>Lyenger</p>
          <p>Restorative</p>
          <p>Vinyasa</p>
        </div>
        <div
          style={{
            textAlign: "center",
            marginLeft: "50px",
            color: "rgba(0, 0, 0, 0.75)",
          }}
        >
          <img
            src={logo}
            style={{ margin: "auto", marginBottom: "20px" }}
            width={"150px"}
            alt=""
          />
          <p>With a huge range of yoga styles to</p>
          <p>choose from and a beautiful and</p>
          <p>welcoming yoga studio to practice in,</p>
          <p>we’re sure you’ll love your MilleYoga</p>
          <p>experience.</p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              marginTop: "30px",
            }}
          >
            <AiFillFacebook size={"18px"} />
            <AiOutlineTwitter size={"18px"} />
            <AiFillInstagram size={"18px"} />
            <AiFillYoutube size={"18px"} />
          </div>
        </div>
        <div style={{ color: "rgba(0, 0, 0, 0.75)" }}>
          <p
            style={{
              marginBottom: "20px",
              fontSize: "17px",
              fontFamily: "'Playfair Display', serif",
              color: "rgba(0, 0, 0, 0.75)",
            }}
          >
            CONTACT INFO
          </p>
          <p>123 5th Avenue, New York,NY</p>
          <p>120004, USA.</p>
          <p>+91 8709330353</p>
          <p>lovkumar120169@gmail.com</p>
        </div>
      </div>
      <div
        style={{
          borderTop: "1px solid rgba(0, 0, 0, 0.05)",
          height: "80px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: "18px",
          padding: "0px 120px",
          fontSize: "16px",
          color: "rgba(0, 0, 0, 0.75)",
        }}
      >
        <div>
          <p>Copyright © 2023 Immortal Yoga</p>
        </div>
        <div>
          <p>Powered by ImmortalYoga</p>
        </div>
      </div>
    </div>
  );
};
