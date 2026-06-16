import React from "react";

export default function PageBannerBg() {
  return (
    <>
      <div className="absolute inset-0 bg-slate-950 pointer-events-none z-0" />
      <div 
        className="absolute inset-0 opacity-90 pointer-events-none z-0 banner-img-bg" 
      />
      <style>{`
        .banner-img-bg {
          background-image: url("/assets/images/backgrounds/tech-banner-bg.png");
          background-size: cover;
          background-position: center 20%;
        }
      `}</style>
    </>
  );
}
