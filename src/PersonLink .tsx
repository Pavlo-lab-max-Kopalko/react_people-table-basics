import { Link, useParams } from 'react-router-dom';
import { Person } from './types';
import cn from 'classnames';
// import { useState } from 'react';

interface Props {
  person: Person;
  mother: string | undefined;
  father: string | undefined;
}

export const PersonLink = ({ person, mother, father }: Props) => {
  // const location = useLocation();
  const { slug } = useParams();

  console.log(slug);

  const motherInfo = person.motherName ? person.motherName : '-';
  const fatherInfo = person.fatherName ? person.fatherName : '-';
  const motherLink = mother ? mother : motherInfo;
  const fatherLink = father ? father : fatherInfo;

  // console.log(selectedPersonSlug);

  return (
    <tr
      data-cy="person"
      // className={cn(
      //   person.slug === selectedPersonSlug ? 'has-background-warning' : '',
      // )}
    >
      <td>
        <Link
          className={cn({
            'has-text-danger': person.sex === 'f',
          })}
          to={`#/people/${person.slug}`}
          // onClick={() => {
          //   setSelectedPersonSlug('');
          //   setSelectedPersonSlug(person.slug);
          // }}
        >
          {person.name}
        </Link>
      </td>

      <td>{person.sex}</td>

      <td>{person.born}</td>

      <td>{person.died}</td>

      <td>
        {mother ? (
          <Link
            className={cn({
              'has-text-danger': person.sex === 'f',
            })}
            to={`#/people/${motherLink}`}
            // onClick={() => setSelectedPersonSlug(motherLink)}
          >
            {person.motherName}
          </Link>
        ) : (
          motherInfo
        )}
      </td>

      <td>
        {father ? (
          <Link to={`#/people/${fatherLink}`}>{person.fatherName}</Link>
        ) : (
          fatherInfo
        )}
      </td>
    </tr>
  );
};
