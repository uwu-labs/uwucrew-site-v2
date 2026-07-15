import { useEffect, useRef, useState } from "react";
import "./Kusari.css";
import UwucrewFooter from "./UwucrewFooter";

import kittiesImg from "../assets/kusari-popup/kitties.png";
import bunnyImg from "../assets/kusari-popup/bunny.png";
import assetUrl from "../utils/assetUrl";

const KUSARI_MARK_PATHS = [
  "M171.07,142.46c4.72.92,9.05,3.2,12.52,6.67,6.17,6.17,15.05,31.7,21.75,56.18-23.16-6.36-49.76-15.28-56.21-21.73-8.01-8.01-9.24-20.24-3.74-29.58,0,0-2.7-16.06-3.01-22.86-11.52,8.14-15.02,18.06-15.02,18.06,0,0-29.56-1.39-49.83,3.53-20.67,5.02-23.81,24.09-23.81,24.09,0,0,26.18-18.72,70.27-14.78,0,0-3.59,17.81,12.24,34.42,13.09,13.73,68.84,27.81,79.65,30.4l14.45,3.46-3.46-14.44c-2.59-10.81-16.22-65.47-30.4-79.65-7.38-7.38-17.54-11.81-27.36-12.36.52,12.11,1.95,18.58,1.95,18.58Z",
  "M59.27,87.88c-4.72-.92-9.05-3.2-12.52-6.67-6.17-6.17-15.05-31.7-21.75-56.18,23.16,6.36,49.76,15.28,56.21,21.73,8.01,8.01,9.24,20.24,3.74,29.58,0,0,2.7,16.06,3.01,22.86,11.52-8.14,15.02-18.06,15.02-18.06,0,0,29.56,1.39,49.83-3.53,20.67-5.02,23.81-24.09,23.81-24.09,0,0-26.18,18.72-70.27,14.78,0,0,3.59-17.81-12.24-34.42C81,20.12,25.26,6.05,14.45,3.46L0,0l3.46,14.44c2.59,10.81,16.22,65.47,30.4,79.65,7.38,7.38,17.54,11.81,27.36,12.36-.52-12.11-1.95-18.58-1.95-18.58Z",
  "M87.88,171.07c-.92,4.72-3.2,9.05-6.67,12.52-6.17,6.17-31.7,15.05-56.18,21.75,6.36-23.16,15.28-49.76,21.73-56.21,8.01-8.01,20.24-9.24,29.58-3.74,0,0,16.06-2.7,22.86-3.01-8.14-11.52-18.06-15.02-18.06-15.02,0,0,1.39-29.56-3.53-49.83-5.02-20.67-24.09-23.81-24.09-23.81,0,0,18.72,26.18,14.78,70.27,0,0-17.81-3.59-34.42,12.24-13.73,13.09-27.81,68.84-30.4,79.65l-3.46,14.45,14.44-3.46c10.81-2.59,65.47-16.22,79.65-30.4,7.38-7.38,11.81-17.54,12.36-27.36-12.11.52-18.58,1.95-18.58,1.95Z",
  "M142.46,59.27c.92-4.72,3.2-9.05,6.67-12.52,6.17-6.17,31.7-15.05,56.18-21.75-6.36,23.16-15.28,49.76-21.73,56.21-8.01,8.01-20.24,9.24-29.58,3.74,0,0-16.06,2.7-22.86,3.01,8.14,11.52,18.06,15.02,18.06,15.02,0,0-1.39,29.56,3.53,49.83,5.02,20.67,24.09,23.81,24.09,23.81,0,0-18.72-26.18-14.78-70.27,0,0,17.81,3.59,34.42-12.24,13.73-13.09,27.81-68.84,30.4-79.65L230.34,0l-14.44,3.46c-10.81,2.59-65.47,16.22-79.65,30.4-7.38,7.38-11.81,17.54-12.36,27.36,12.11-.52,18.58-1.95,18.58-1.95Z",
];

const slotClass = (slot: "back" | "mid" | "front", inView: boolean) =>
  [
    "kusari-window-slot",
    `kusari-window-slot--${slot}`,
    inView ? "kusari-window-slot--in-view" : "",
  ]
    .filter(Boolean)
    .join(" ");

const KusariMarkIcon = () => (
  <svg viewBox="0 0 230.34 230.34" aria-hidden="true">
    <g>
      {KUSARI_MARK_PATHS.map((d) => (
        <path key={d.slice(0, 12)} d={d} />
      ))}
    </g>
  </svg>
);

const CloseIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3.5"
    strokeLinecap="square"
    strokeLinejoin="miter"
    aria-hidden="true"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const DiscordIcon = () => (
  <svg viewBox="0 0 127.14 96.36" aria-hidden="true">
    <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07Z" />
    <circle className="discord-eye" cx="42.45" cy="59.35" r="11.43" />
    <circle className="discord-eye" cx="84.69" cy="59.35" r="11.44" />
  </svg>
);

const ScrollbarColumn = () => (
  <div className="kusari-scrollbar-col">
    <div className="kusari-scroll-btn">
      <svg
        viewBox="0 0 24 24"
        stroke="#ffffff"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <polyline points="18 15 12 9 6 15" />
      </svg>
    </div>
    <div className="kusari-scroll-track">
      <div className="kusari-scroll-thumb" />
    </div>
    <div className="kusari-scroll-btn">
      <svg
        viewBox="0 0 24 24"
        stroke="#ffffff"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <polyline points="6 9 12 15 18 9" />
      </svg>
    </div>
  </div>
);

const WindowContent = ({
  interactive = false,
  inView = false,
}: {
  interactive?: boolean;
  inView?: boolean;
}) => (
  <div className="kusari-window-body">
    <div className="kusari-content-area">
      <div className="kusari-content-stack">
        <p className="kusari-content-eyebrow">If you like uwucrew, check us out!</p>
        <div className="kusari-content-title-wrap">
          <h3 className="kusari-content-title">Discover Kusari</h3>
        </div>
        <a
          className="kusari-cta-button"
          href="https://kusari.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit our website!
        </a>
        {interactive && (
          <div className="kusari-social-links">
            <a
              className="kusari-social-link"
              href="https://discord.gg/cKWpT7HGam"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Discord"
            >
              <DiscordIcon />
            </a>
            <a
              className="kusari-social-link"
              href="https://twitter.com/bykusari"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M23.953 4.57a10 10 0 0 1-2.825.775 4.958 4.958 0 0 0 2.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 0 0-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 0 0-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 0 1-2.228-.616v.06a4.923 4.923 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.212.085 4.936 4.936 0 0 0 4.604 3.417 9.867 9.867 0 0 1-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0 0 7.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0 0 24 4.59l-.047-.02z" />
              </svg>
            </a>
            <a
              className="kusari-social-link"
              href="https://www.instagram.com/bykusari"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12c0 3.259.013 3.668.072 4.948.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24c3.259 0 3.668-.013 4.948-.072 1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.689.072-4.948 0-3.259-.013-3.667-.072-4.947-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.259 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227a3.81 3.81 0 0 1-.899 1.382 3.744 3.744 0 0 1-1.38.896c-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421a3.716 3.716 0 0 1-1.379-.899 3.644 3.644 0 0 1-.9-1.38c-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 1 0 0-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 0 1-2.88 0 1.44 1.44 0 0 1 2.88 0z" />
              </svg>
            </a>
          </div>
        )}
      </div>
      {interactive && (
        <>
          <img
            className={`kusari-char-kitties${inView ? " kusari-char--in-view" : ""}`}
            src={assetUrl(kittiesImg)}
            alt=""
          />
          <img
            className={`kusari-char-bunny${inView ? " kusari-char--in-view" : ""}`}
            src={assetUrl(bunnyImg)}
            alt=""
          />
        </>
      )}
    </div>
    <ScrollbarColumn />
  </div>
);

const TitleBarContent = ({ interactive = false }: { interactive?: boolean }) => {
  const scrollToTop = () => {
    const container = document.getElementById("home-scroll-root");
    container?.scrollTo({ top: 0, behavior: "smooth" });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="kusari-title-bar">
      <div className="kusari-title-bar-left">
        <div className="kusari-title-bar-icon">
          <KusariMarkIcon />
        </div>
        <span className="kusari-title-bar-name">kusari.exe</span>
      </div>
      <div className="kusari-title-bar-right">
        <div className="kusari-chrome-btn-static kusari-minimize-btn" />
        {interactive ? (
          <button
            type="button"
            className="kusari-chrome-btn kusari-maximize-btn"
            aria-label="Open kusari.org"
            onClick={() =>
              window.open("https://kusari.org/", "_blank", "noopener,noreferrer")
            }
          />
        ) : (
          <div className="kusari-chrome-btn-static kusari-maximize-btn" />
        )}
        {interactive ? (
          <button
            type="button"
            className="kusari-chrome-btn kusari-close-btn"
            aria-label="Scroll to top"
            onClick={scrollToTop}
          >
            <CloseIcon />
          </button>
        ) : (
          <div className="kusari-chrome-btn-static kusari-close-btn">
            <CloseIcon />
          </div>
        )}
      </div>
    </div>
  );
};

const PopupWindow = ({
  slot,
  interactive = false,
  inView = false,
}: {
  slot: "back" | "mid" | "front";
  interactive?: boolean;
  inView?: boolean;
}) => (
  <div className={slotClass(slot, inView)}>
    <div className="kusari-window-outer">
      <div className="kusari-window-frame">
        <TitleBarContent interactive={interactive} />
        <WindowContent interactive={interactive} inView={inView} />
      </div>
    </div>
  </div>
);

const Kusari = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="team-scroll" className="kusari-section">
      <div className="kusari-popups-area">
        <div className="kusari-windows-stack">
          <PopupWindow slot="back" inView={inView} />
          <PopupWindow slot="mid" inView={inView} />
          <PopupWindow slot="front" interactive inView={inView} />
        </div>
      </div>

      <UwucrewFooter />
    </section>
  );
};

export default Kusari;
