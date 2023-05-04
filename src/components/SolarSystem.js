import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import Planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    const planetCadrs = Planets.map((pla) => (<PlanetCard
      key={ pla.name }
      planetName={ pla.name }
      planetImage={ pla.image }
    />));
    return (
      <div data-testid="solar-system" className="solar">
        <Title headline="Planetas" />
        {planetCadrs}
      </div>
    );
  }
}

export default SolarSystem;
