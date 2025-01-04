import React from "react";

const DynamicPercentageSVG = ({ value }) => {
  // Ensure proper scaling of text based on the value
  const fontSize = value === "∞" ? "48" : value.length > 3 ? "32" : "36";

  return (
    <div>
        <svg width="204" height="110" viewBox="0 0 204 204" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M187.639 69.9021C193.092 67.8586 199.226 70.6143 200.696 76.2484C206.238 97.4863 204.802 120.051 196.436 140.546C186.737 164.31 168.435 183.543 145.182 194.409C121.928 205.275 95.4333 206.975 70.9821 199.169C46.5309 191.364 25.9211 174.628 13.2642 152.299C0.607328 129.97 -3.16618 103.69 2.6965 78.7016C8.55918 53.7134 23.627 31.854 44.8941 17.4842C66.1612 3.11439 92.0641 -2.7094 117.435 1.17464C139.317 4.52444 159.415 14.8827 174.791 30.5466C178.869 34.702 178.083 41.3805 173.529 45.009C168.975 48.6374 162.385 47.8272 158.195 43.7832C146.212 32.2155 130.877 24.5642 114.244 22.0179C94.1181 18.9368 73.5701 23.5566 56.6994 34.9558C39.8288 46.355 27.8758 63.6955 23.2251 83.518C18.5744 103.34 21.5679 124.188 31.6082 141.901C41.6486 159.614 57.9979 172.89 77.3943 179.082C96.7908 185.274 117.809 183.925 136.255 175.305C154.701 166.686 169.219 151.429 176.914 132.578C183.273 116.999 184.584 99.9117 180.815 83.688C179.497 78.0164 182.187 71.9457 187.639 69.9021Z"
            fill="url(#paint0_linear)"
        />
        <defs>
            <linearGradient id="paint0_linear" x1="-12.4348" y1="91.2145" x2="228.124" y2="92.098" gradientUnits="userSpaceOnUse">
            <stop stopColor="#AA367C" />
            <stop offset="1" stopColor="#4A2FBD" />
            </linearGradient>
        </defs>
        <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" fill="white" fontSize={fontSize} fontFamily="cursive" fontWeight="bold" >
            {value}
        </text>
        </svg>
    </div>
  );
};

export default DynamicPercentageSVG;
