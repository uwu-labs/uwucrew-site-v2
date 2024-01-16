import "./Derivatives.css";
import { useState } from "react";
import derivatives, { DerivativeType } from "../config/derivatives";
import useScreenWidth from "../hooks/use-screen-width";
import DerivativeImage from "./DerivativeImage";

const MIN_WIDTH = 350;

const Derivatives = () => {
  const width = useScreenWidth();
  const [artist, setArtist] = useState("");
  const [id, setId] = useState("");

  const columns = Math.round(width / MIN_WIDTH);

  const filtered = derivatives
    .filter(
      (derivative: DerivativeType) =>
        !artist || derivative.artistName === artist
    )
    .filter(
      (derivative: DerivativeType) =>
        !id || (derivative.id && derivative.id.toString() === id)
    );

  return (
    <div className="derivatives-styled-derivatives">
      <h1 className="derivatives-title">Art Gallery</h1>
      <h2 className="derivatives-count">{`${filtered.length} Total Derivatives`}</h2>
      <div className="derivatives-grid">
        <div className="derivatives-filters">
          <div className="derivatives-label">Artist:</div>
          <div className="derivatives-filter">
            <select
              className="derivatives-dropdown"
              onChange={(e) => setArtist(e.target.value)}
            >
              <option className="derivatives-option" value="">
                All
              </option>
              {[
                ...new Set(
                  derivatives
                    .filter((derivative) => Boolean(derivative.artistName))
                    .map((derivative) => derivative.artistName.toLowerCase() || "")
                ),
              ]
                .sort((a, b) => a.localeCompare(b))
                .map((artistName, index) => (
                  <option className="derivatives-option" key={index}>
                    {artistName}
                  </option>
                ))}
            </select>
          </div>
        </div>
        <div className="derivatives-filters">
          <div className="derivatives-label">uwu id:</div>
          <div className="derivatives-filter">
            <input
              className="derivatives-input"
              value={id}
              placeholder="e.g. 123"
              type="number"
              onChange={(e) => setId(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="derivatives-images">
        {[...Array(columns).keys()].map((key) => (
          <div className="derivatives-column" key={key}>
            {filtered
              .filter(
                (d, index) =>
                  index % columns === key + (d.id || 0) - (d.id || 0)
              )
              .reverse()
              .map((derivative, index) => (
                <DerivativeImage key={index} derivative={derivative} />
              ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Derivatives;
