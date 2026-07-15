import "./Derivatives.css";
import { useEffect, useRef, useState } from "react";
import type { DerivativeType } from "../config/derivatives";
import { useDerivatives } from "../hooks/use-derivatives";
import useScreenWidth from "../hooks/use-screen-width";
import DerivativeImage from "./DerivativeImage";
import Button from "./Button";

const MIN_WIDTH = 350;
const PAGE_SIZE = 48;

const Derivatives = () => {
  const width = useScreenWidth();
  const { derivatives, loading, error } = useDerivatives();
  const [artist, setArtist] = useState("");
  const [id, setId] = useState("");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const loadMoreRef = useRef<HTMLDivElement>(null);

  const columns = Math.max(1, Math.round(width / MIN_WIDTH));

  const filtered = derivatives
    .filter(
      (derivative: DerivativeType) =>
        !artist || derivative.artistName?.toLowerCase() === artist
    )
    .filter(
      (derivative: DerivativeType) =>
        !id || (derivative.id && derivative.id.toString() === id)
    );

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [artist, id, derivatives.length]);

  useEffect(() => {
    const node = loadMoreRef.current;
    if (!node || !hasMore) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisibleCount((count) => Math.min(count + PAGE_SIZE, filtered.length));
        }
      },
      { rootMargin: "400px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [filtered.length, hasMore]);

  const artistNames = [
    ...new Set(
      derivatives
        .filter((derivative) => Boolean(derivative.artistName))
        .map((derivative) => derivative.artistName || "")
    ),
  ].sort((a, b) => a.localeCompare(b));

  return (
    <div className="derivatives-styled-derivatives">
      <h1 className="derivatives-title">Art Gallery</h1>
      <h2 className="derivatives-count">
        {loading ? "Loading derivatives..." : `${filtered.length} Total Derivatives`}
      </h2>
      {error && <p className="derivatives-error">{error}</p>}
      <div className="derivatives-grid">
        <div className="derivatives-filters">
          <div className="derivatives-label">Artist:</div>
          <div className="derivatives-filter">
            <select
              className="derivatives-dropdown"
              onChange={(e) => setArtist(e.target.value.toLowerCase())}
              disabled={loading}
            >
              <option className="derivatives-option" value="">
                All
              </option>
              {artistNames.map((artistName) => (
                <option
                  className="derivatives-option"
                  key={artistName}
                  value={artistName.toLowerCase()}
                >
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
              disabled={loading}
            />
          </div>
        </div>
      </div>
      {!loading && (
        <div className="derivatives-images">
          {[...Array(columns).keys()].map((key) => (
            <div className="derivatives-column" key={key}>
              {visible
                .filter((_, index) => index % columns === key)
                .map((derivative, index) => (
                  <DerivativeImage key={`${derivative.image}-${index}`} derivative={derivative} />
                ))}
            </div>
          ))}
        </div>
      )}
      {hasMore && (
        <div ref={loadMoreRef} className="derivatives-load-more">
          <Button
            label="load more"
            action={() =>
              setVisibleCount((count) => Math.min(count + PAGE_SIZE, filtered.length))
            }
          />
        </div>
      )}
    </div>
  );
};

export default Derivatives;
