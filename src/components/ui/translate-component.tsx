import { Trans } from "react-i18next";

import { type ReactNode } from "react";

export const TranslateComponent = ({ children }: { children: ReactNode }) => (
  <Trans>{children}</Trans>
);
