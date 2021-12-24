import React, { useState } from 'react';

import { Localization as LocalizationType } from '@graphql-types@';
import { LocalizationView } from './view';
import { LocalizationEdit } from './edit';
import { ViewMode } from 'components/interface';

interface LocalizationProps {
  localization?: LocalizationType;
  afterSubmit?: (data: Record<string, string>) => Promise<void>;
  defaultViewMode?: ViewMode;
}



export const Localization = ({ localization, afterSubmit, defaultViewMode = ViewMode.VIEW }: LocalizationProps): JSX.Element => {
  const [viewMode, setViewMode] = useState<ViewMode>(defaultViewMode);
  const changeViewMode = () => setViewMode(viewMode === ViewMode.VIEW ? ViewMode.EDIT : ViewMode.VIEW);
  const submitToView = (data: Record<string, string>) => {
    if (afterSubmit) {
      afterSubmit(data);
    }
    setViewMode(ViewMode.VIEW);
    return Promise.resolve();
  }

  return (
    <div className="localization">
      <h3>localization</h3>
      {viewMode !== ViewMode.DISABLED && (
        <button onClick={changeViewMode}>
          {viewMode}
        </button>
      )}
      {viewMode === ViewMode.VIEW ?
        <LocalizationView localization={localization} />
        : <LocalizationEdit localization={localization} afterSubmit={submitToView} />
      }
    </div>
  );
}
