import React from 'react';
import { Link } from 'react-scroll';
import { ReactComponent as Man } from '../../../assets/man-laptop-v1.svg';

import { mainTitle, title, paragraph1, paragraph2 } from './Relationship.json';

const RelationshipsAndRequirements = () => (
  <section className="Relationship">
    <div className="Relationship__container">
      <h1>{mainTitle}</h1>
      <div className="Relationship__inner-container">
        <Man className="Relationship__svg" />
        <div className="Relationship__spacer" />
        <div className="Relationship__text-container">
          <h2>{title}</h2>
          <p>{paragraph1}</p>
          <p>{paragraph2}</p>
          <button type="button" className="button">
            <Link to="Sign up" spy smooth>
              Sign up now
            </Link>
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default RelationshipsAndRequirements;
