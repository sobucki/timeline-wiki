import React from 'react';

import { Container } from './styles';

export default function MonthCell({ children, year, scale }) {
  return (
    <Container scale={scale} sizeYear={240}>
      <div className="header">
        <span>{year}</span>
      </div>

      <div className="wrap-month">
        <div className="month" />
        <div className="month" />
        <div className="month" />
        <div className="month" />
        <div className="month" />
        <div className="month" />
        <div className="month" />
        <div className="month" />
        <div className="month" />
        <div className="month" />
        <div className="month" />
        <div className="month" />
      </div>
      {children}
    </Container>
  );
}
