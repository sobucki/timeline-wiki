import React, { useState, useEffect } from 'react';
import * as DateFNS from 'date-fns';

import { Container, Content } from './styles';

import MonthCell from '../../components/MonthCell';

export default function Main() {
  const today = new Date();
  const startDate = DateFNS.sub(today, { years: 100 });
  const range = DateFNS.differenceInYears(today, startDate);

  const [numCel, setNunCel] = useState(range);
  const [scale, setScale] = useState(1);

  const birthDate = new Date(1925, 8, 16);
  const deathDate = new Date(2015, 4, 14);

  const persons = [
    {
      birthDate: new Date(1925, 8, 16), // new Date(1925, 8, 16),
      deathDate: new Date(2015, 4, 14), // new Date(2015, 4, 14),
      name: 'B.B. King',
    },
    {
      birthDate: new Date(1926, 9, 18), //	27 de novembro de 1942
      deathDate: new Date(2017, 2, 18), // 	18 de setembro de 1970
      name: 'Chuck Berry',
    },
    {
      birthDate: new Date(1942, 10, 27), //	27 de novembro de 1942
      deathDate: new Date(1970, 8, 18), // 	18 de setembro de 1970
      name: 'Jimi Hendrix',
    },
  ];

  const renderPerson = year => {
    let personRender = null;
    persons.map((person, index) => {
      if (year === DateFNS.getYear(person.birthDate)) {
        const paddingStart =
          DateFNS.differenceInMonths(
            person.birthDate,
            DateFNS.startOfYear(person.birthDate)
          ) / 12;
        const size =
          DateFNS.differenceInMonths(person.deathDate, person.birthDate) / 12;
        personRender = (
          <Content scale={scale} size={size} start={paddingStart} index={index}>
            <span>{person.name}</span>
          </Content>
        );
      }
    });

    return personRender;
  };

  const renderCells = () => {
    const cell = [];

    const startYear = DateFNS.getYear(startDate);

    for (let i = 0; i <= numCel; i++) {
      cell.push(
        <MonthCell scale={scale} year={startYear + i} key={startYear + i}>
          {renderPerson(startYear + i)}
        </MonthCell>
      );
    }

    return cell;
  };

  return (
    <Container scale={scale}>
      <div className="table"> {renderCells()}</div>
      {scale}
      <div className="zoom-buttons">
        <button
          type="button"
          onClick={() => {
            if (scale > 0.1) setScale(scale - 0.1);
          }}
        >
          -
        </button>
        <button
          type="button"
          onClick={() => {
            if (scale < 3) setScale(scale + 0.1);
          }}
        >
          +
        </button>
      </div>
    </Container>
  );
}
