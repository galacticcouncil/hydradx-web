import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import H2 from "./h2/content-h2.component";
import P from "./content-p/content-p.component";
import { Button } from "./button/button.component";
import Link from "next/link";
import styled, { css } from "styled-components";

export default function Popup() {
  let [showPopup, setShowPopup] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.localStorage.getItem("popup") !== "true") {
        setShowPopup(true);
      }
    }
  }, []);

  //   return null;
  if (!showPopup) return null;

  return createPortal(
    <div
      suppressHydrationWarning={true}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
      }}
    >
      <div
        style={{
          position: "relative",
          width: "96%",
          maxWidth: 606,
          padding: 16,
          backgroundColor: "#111320",
          borderRadius: 8,
        }}
      >
        <img
          src="./assets/close-small.svg"
          alt="close"
          style={{
            position: "absolute",
            top: 16,
            right: 16,
            cursor: "pointer",
          }}
          onClick={() => {
            setShowPopup(false);
          }}
        />
        <div
          style={{
            padding:
              "clamp(1.563rem, 0.134rem + 4.571vi, 3.563rem) clamp(1.563rem, -1.964rem + 11.286vi, 6.5rem)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 12,
          }}
        >
          <img src="./assets/warning.svg" alt="warning" />
          <h2
            style={{
              color: "white",
              fontFamily: "FontOver",
              fontSize: "19px",
              fontWeight: "500",
              lineHeight: "24.7px",
              textAlign: "center",
            }}
          >
            hydradx.io is migrating to Hydration.net
          </h2>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 24,
            }}
          >
            <P
              style={{
                color: "white",
                marginBottom: 0,
                fontWeight: 400,
                fontSize: "16px",
                textAlign: "center",
              }}
            >
              As part of the rebranding, this app has moved to
              app.hydration.net.
            </P>
            <P
              style={{
                color: "white",
                marginBottom: 0,
                fontWeight: 400,
                fontSize: "16px",
              }}
            >
              Open the app to transfer your settings.
            </P>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 16,
            padding: 26,
          }}
        >
          <ButtonLink href="https://hydration.net">GO TO HYDRATION</ButtonLink>
          <a href="https://app.hydration.net">
            <Button>OPEN APP</Button>
          </a>
        </div>
      </div>
    </div>,
    document.body
  );
}

const buttonStyles = css`
  cursor: crosshair;

  background: transparent;
  display: inline-block;

  border-radius: 0.4rem;
  padding: 12px 3.7rem;
  font-family: "Chakra Petch";
  font-style: normal;
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 150%;

  letter-spacing: 0.105em;
  text-transform: uppercase;

  color: #ffffff;

  transition: all 0.3s ease-out;
`;

const ButtonLink = styled.a`
  ${buttonStyles}

  text-align: center;
  text-transform: uppercase;

  background: rgba(76, 213, 243, 0.12);

  border: 1px solid #85d1ff;
  color: #85d1ff;

  &:hover {
    background-color: rgba(1, 107, 172, 0.9);
    color: #ffffff;
  }

  &:active {
    background-color: #3192cd;
    border: 1px solid #a6ddff;
    color: #ffffff;
  }
`;
