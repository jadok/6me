import React, { useState } from "react";

import {
  Localization as LocalizationType,
  ProductsPrefillData,
} from "@graphql-types@";
import { LocalizationView } from "./view";
import { LocalizationForm } from "./edit";
import { ViewMode } from "components/interface";

interface LocalizationProps {
  localization?: LocalizationType;
  afterSubmit?: (data: Record<string, string>) => Promise<void>;
  defaultViewMode?: ViewMode;
  prefill?: ProductsPrefillData;
}

export const Localization = ({
  localization,
  afterSubmit,
  defaultViewMode = ViewMode.VIEW,
  prefill,
}: LocalizationProps): JSX.Element => {
  const [viewMode, setViewMode] = useState<ViewMode>(defaultViewMode);
  const changeViewMode = () =>
    setViewMode(viewMode === ViewMode.VIEW ? ViewMode.EDIT : ViewMode.VIEW);
  const submitToView = (data: Record<string, string>) => {
    if (afterSubmit) {
      afterSubmit(data);
    }
    setViewMode(ViewMode.VIEW);
    return Promise.resolve();
  };

  return (
    <div className="localization">
      <h3>localization</h3>
      {viewMode !== ViewMode.DISABLED && (
        <button onClick={changeViewMode}>{viewMode}</button>
      )}
      {viewMode === ViewMode.VIEW ? (
        <LocalizationView localization={localization} />
      ) : (
        <LocalizationForm
          localization={localization}
          afterSubmit={submitToView}
          dataPrefill={prefill}
        />
      )}
    </div>
  );
};
