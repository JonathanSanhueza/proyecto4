import React from "react";
import familia from "../assets/familia.jpg";

const About = () => {
  return (
    <div style={{ margin: 24 }}>
      <h1>Acerca de nosotros</h1>
      <div className="about">
        <img src={familia} />
        <h5 style={{ marginTop: 15 }}>
          Bienvenidos a nuestra tienda de sushi familiar, donde ofrecemos una
          amplia variedad de sushi fresco y delicioso para toda la familia.
          Nuestros platos son preparados con los ingredientes más frescos y de
          la más alta calidad, y nuestro equipo de chefs altamente capacitados
          se asegura de que cada pieza de sushi sea perfecta en sabor y
          presentación. Además de sushi tradicional, también ofrecemos opciones
          vegetarianas y sin gluten para aquellos con necesidades dietéticas
          especiales. Y para aquellos que buscan algo más que sushi, ofrecemos
          una selección de platos de acompañamiento que seguramente satisfarán
          su paladar. Como una tienda de sushi familiar, creemos en la
          importancia de pasar tiempo de calidad con nuestros seres queridos, y
          nuestro ambiente cálido y acogedor lo refleja. Ya sea que esté
          buscando una cena familiar o una noche de sushi con amigos, ¡nos
          encantaría tenerlos en nuestra tienda! Ven y disfruta de la deliciosa
          comida, el ambiente amigable y el servicio excepcional que ofrecemos
          en nuestra tienda de sushi familiar.
        </h5>
      </div>
    </div>
  );
};

export default About;
