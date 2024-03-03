import React, { useState } from "react";
// import "./App.css";
import { Container } from "@mui/material";
import Navbar from "../Components/Navbar";
import Gallery from "../Components/Gallery";
import Description from "../Components/Description";
import MobileGallery from "../Components/MobileGallery";

function SingleProductPage() {
  const [quant, setQuant] = useState(0);
  const [orderedQuant, setOrderedQuant] = useState(0);

  const addQuant = () => {
    setQuant(quant + 1);
  };

  const removeQuant = () => {
    setQuant(quant - 1);
  };

  return (
    <main className="App">
      <Container component="section" maxWidth={"lg"}>
        <section className="core">
          <Gallery />
          <MobileGallery />
          <Description
            onQuant={quant}
            onAdd={addQuant}
            onRemove={removeQuant}
            onSetOrderedQuant={setOrderedQuant}
          />
        </section>
      </Container>
    </main>
  );
}

export default SingleProductPage;