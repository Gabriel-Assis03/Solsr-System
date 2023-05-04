import React from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

class Missions extends React.Component {
  render() {
    const miss = missions.map((m, index) => (<MissionCard
      key={ index }
      name={ m.name }
      year={ m.year }
      country={ m.country }
      destination={ m.destination }
    />));
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        {miss}
      </div>
    );
  }
}

export default Missions;
