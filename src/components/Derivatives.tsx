import React, { useState } from "react";
import derivatives, { DerivativeType } from "../config/derivatives";
import useScreenWidth from "../hooks/use-screen-width";
import styled from "styled-components";
import DerivativeImage from "./DerivativeImage";

const MIN_WIDTH = 350;

const StyledDerivatives = styled.div`
  padding: 5rem;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  @media (max-width: 720px) {
    padding: 1rem;
    padding-top: 2rem;
  }
`;

const Title = styled.h1`
  color: black;
  font-size: 6.4rem;
  font-weight: 800;
  margin: 0 auto;
  margin-bottom: 2rem;

  @media (max-width: 720px) {
    margin-bottom: 1rem;
  }
`;

// const Count = styled.div`
//   color: black;
//   font-size: 2rem;
//   font-weight: 600;
//   margin: 0 auto;
//   margin-bottom: 2rem;

//   @media (max-width: 720px) {
//     margin-bottom: 1rem;
//   }
// `;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(15rem, 1fr));
  grid-gap: 2rem;
  width: 40vw;
  margin: auto;
  @media (max-width: 800px) {
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    width: 100%;
  }
`;

const Filters = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3rem;

  @media (max-width: 720px) {
    flex-direction: column;
    margin-bottom: 1rem;
  }
`;

const Filter = styled.div`
  align-items: center;
  width: 100%;

  @media (max-width: 720px) {
    margin: 0.6rem 0;
  }
`;

const Label = styled.div`
  color: black;
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1rem;
  width: 100%;
`;

const Dropdown = styled.select`
  border-radius: 12px;
  border: 2px solid var(--primary);
  border-bottom: 4px solid var(--primary);
  background-color: white;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg"><path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"/></svg>');
  background-repeat: no-repeat;
  background-position: 97% 10px;
  background-size: 2rem;
  height: 4.8rem;
  font-size: 2rem;
  font-weight: 500;
  padding: 0 1rem;
  cursor: pointer;
  outline: none;
  width: 100%;

  &:hover {
    border-color: var(--primary);
  }

  &:focus {
    border-color: var(--primary);
  }
`;

const Option = styled.option`
  font-size: 2rem;
`;

const Input = styled.input`
  border-radius: 12px;
  border: 2px solid var(--primary);
  border-bottom: 4px solid var(--primary);
  background: white;
  height: 4.8rem;
  font-size: 2rem;
  font-weight: 500;
  padding: 0 1rem;
  cursor: pointer;
  margin-right: 2rem;
  width: 100%;

  -moz-appearance: textfield;
  &::-webkit-outer-spin-button {
    display: none;
  }
  &::-webkit-inner-spin-button {
    display: none;
  }
`;

const Images = styled.div`
  display: flex;
`;

const Column = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

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
    <StyledDerivatives>
      {/* <Count>{`${filtered.length} Total Derivatives`}</Count> */}
      <Title>Art Gallery</Title>
      <Grid>
        <Filters>
          <Label>Artist:</Label>
          <Filter>
            <Dropdown onChange={(e: any) => setArtist(e.target.value)}>
              <Option value="">All</Option>
              {[
                ...new Set(
                  derivatives
                    .filter((derivative: DerivativeType) =>
                      Boolean(derivative.artistName)
                    )
                    .map(
                      (derivative: DerivativeType) =>
                        derivative.artistName || ""
                    )
                ),
              ]
                .sort((a: string, b: string) => a.localeCompare(b))
                .map((artistName: string) => (
                  <Option>{artistName}</Option>
                ))}
            </Dropdown>
          </Filter>
        </Filters>
        <Filters>
          <Label>uwu id:</Label>
          <Filter>
            <Input
              value={id}
              placeholder="e.g. 123"
              type="number"
              onChange={(e: any) => setId(e.target.value)}
            />
          </Filter>
        </Filters>
      </Grid>
      <Images>
        {[...Array(columns).keys()].map((key: number) => (
          <Column>
            {filtered
              .filter(
                (d: DerivativeType, index: number) =>
                  index % columns === key + (d.id || 0) - (d.id || 0)
              )
              .reverse()
              .map((derivative: DerivativeType) => (
                <DerivativeImage derivative={derivative} />
              ))}
          </Column>
        ))}
      </Images>
    </StyledDerivatives>
  );
};

export default Derivatives;
