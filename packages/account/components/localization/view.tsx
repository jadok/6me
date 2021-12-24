import React from 'react';
import { Localization as LocalizationType, Coordonate } from '@graphql-types@';

export interface LocalizationViewsProps {
  localization?: LocalizationType;
}

export const LocalizationView = ({ localization }: LocalizationViewsProps): JSX.Element => (
  <>
    <span className="name">{localization?.name}</span>
    {(localization?.place as Coordonate)?.zipCode && (
      <fieldset className="coordonate">
        <legend>place</legend>
        <span className="adress">{(localization?.place as Coordonate)?.adress}</span>
        <span className="city">
          {`${(localization?.place as Coordonate).city} - ${(localization?.place as Coordonate)?.zipCode}`}
        </span>
      </fieldset>
    )}
  </>
);
