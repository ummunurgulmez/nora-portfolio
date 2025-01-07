import React from "react";

const EducationTimeline = () => {
  const educationData = [
    {
      period: "2019 - 2024",
      institution: "Gazi University",
      program: "Computer Engineering (BSc)",
    },
    {
      period: "2023 - 2027",
      institution: "Istanbul University",
      program: "Business Administration (BSc)",
    },
    {
      period: "2025 - 2027",
      institution: "Ege University",
      program: "Computer Engineering (MSc)",
    },
  ];
  
  return (
    <div style={{ padding: "20px" }}>
      <h3 style={{ textAlign: "center", marginBottom: "40px", color: "#800080" }}>
        Education Timeline
      </h3>
      <div style={{ position: "relative", maxWidth: "800px", margin: "0 auto" }}>
        {/* Vertical Line */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "0",
            transform: "translateX(-50%)",
            width: "4px",
            backgroundColor: "#800080", // Mor renk
            height: "100%",
            zIndex: -1,
          }}
        ></div>

        {educationData.map((item, index) => (
          <div
            key={index}
            style={{
              margin: "40px 0",
              display: "flex",
              justifyContent: index % 2 === 0 ? "flex-start" : "flex-end",
              alignItems: "center",
              position: "relative",
            }}
          >
            {/* Circle */}
            <div
              style={{
                width: "20px",
                height: "20px",
                backgroundColor: "#800080", // Mor renk
                borderRadius: "50%",
                position: "absolute",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            ></div>

            {/* Content */}
            <div
              style={{
                width: "45%",
                textAlign: index % 2 === 0 ? "right" : "left",
                padding: "10px 20px",
                backgroundColor: "#f9f9f9",
                borderRadius: "8px",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            >
              <h4 style={{ margin: "0 0 5px", color: "#333" }}>{item.period}</h4>
              <p style={{ margin: "0", fontSize: "14px", color: "#555" }}>
                {item.institution} <br /> {item.program}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationTimeline;
