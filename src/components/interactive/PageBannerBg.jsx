import React from "react";

export default function PageBannerBg() {
  return (
    <>
      <div className="absolute inset-0 bg-slate-950 pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(55,114,255,0.25),transparent)] pointer-events-none z-0" />
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none z-0 circuit-banner" 
        style={{ 
          maskImage: "linear-gradient(to bottom, black 0%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 0%, transparent 100%)"
        }} 
      />
      <style>{`
        .circuit-banner {
          background-image: url("data:image/svg+xml,%3Csvg width='800' height='800' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%233772FF' stroke-width='2.5' stroke-opacity='0.5'%3E%3Cpath d='M50 50h100l50 50v200l100 100h200 M0 300h150l50-50v-100l100-100 M400 800v-150l150-150h200l50-50 M800 800v-100l-100-100h-100 M800 400h-150l-150 150v100l-100 100 M200 600h100l50 50v100 M600 200h-100l-50-50v-100 M700 0v100l-50 50h-100 M0 600h100l50 50v100 M0 100h50l50 50v100l100 100 M300 0v100l50 50h100 M500 600h100l50-50v-100l-100-100 M100 100h50v50h-50z M600 600l50-50h50v50h-50z M200 200v100l50 50h100 M400 400h-100v100l-50 50 M700 300v-100l-50-50h-100 M300 700h100v-50l50-50 M50 750h100l50-50v-50 M750 50v100l-50 50h-50 M150 450h100 M450 150v100 M550 450h100 M150 700h50 M700 150v50 M350 350l50-50l50 50l-50 50z M650 650l-30-30 M250 250l30 30 M200 500h50v50 M500 200v50h50'/%3E%3Crect x='300' y='200' width='40' height='40'/%3E%3Crect x='500' y='500' width='30' height='30'/%3E%3Ccircle cx='150' cy='650' r='15'/%3E%3Ccircle cx='650' cy='150' r='20'/%3E%3Cpolygon points='400,200 420,240 380,240'/%3E%3Cpolygon points='200,400 240,420 240,380'/%3E%3C/g%3E%3Cg fill='%233772FF' stroke='none'%3E%3Ccircle cx='50' cy='50' r='5'/%3E%3Ccircle cx='500' cy='400' r='6'/%3E%3Ccircle cx='400' cy='650' r='4'/%3E%3Ccircle cx='700' cy='550' r='5'/%3E%3Ccircle cx='400' cy='150' r='4'/%3E%3Ccircle cx='300' cy='250' r='4'/%3E%3Ccircle cx='600' cy='750' r='5'/%3E%3Ccircle cx='200' cy='750' r='4'/%3E%3Ccircle cx='750' cy='100' r='5'/%3E%3Ccircle cx='100' cy='350' r='4'/%3E%3Ccircle cx='250' cy='150' r='3'/%3E%3Ccircle cx='650' cy='300' r='4'/%3E%3Ccircle cx='350' cy='500' r='4'/%3E%3Ccircle cx='100' cy='100' r='4'/%3E%3Ccircle cx='150' cy='100' r='4'/%3E%3Ccircle cx='100' cy='150' r='4'/%3E%3Ccircle cx='150' cy='150' r='4'/%3E%3Ccircle cx='600' cy='600' r='3'/%3E%3Ccircle cx='700' cy='600' r='3'/%3E%3Ccircle cx='200' cy='300' r='5'/%3E%3Ccircle cx='400' cy='400' r='5'/%3E%3Ccircle cx='300' cy='400' r='5'/%3E%3Ccircle cx='700' cy='200' r='5'/%3E%3Ccircle cx='300' cy='700' r='5'/%3E%3Ccircle cx='50' cy='750' r='5'/%3E%3Ccircle cx='150' cy='750' r='5'/%3E%3Ccircle cx='150' cy='700' r='5'/%3E%3C/g%3E%3C/svg%3E");
          background-size: 800px 800px;
          background-position: center 0;
        }
      `}</style>
    </>
  );
}
