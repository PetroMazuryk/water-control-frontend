import { useTranslation } from 'react-i18next';
import { TourProvider } from "@reactour/tour";
import {onboardingStyles, disableBody, enableBody,} from '../onboarding/onboardingStyles.js'


const TourSteps = ({ children }) => {
  const { t } = useTranslation();

  const steps = [
    {
      content: (
        <div style={{ textAlign: "center" }}>
          <h2>{t('onboardingStartTitle')}</h2>
          <h2>{t('onboardingStartName')}</h2>
          <p>{t('onboardingStartText')}</p>

        </div>
      ),
      position: "center",
    },
    {
      selector: ".first-step",
      content: t('first-step'),
    },
    {
      selector: ".second-step",
      content: t('second-step')
    },
    {
      selector: ".third-step",
      content: t('third-step')
    },
    {
      selector: ".four-step",
      content: t('fourth-step')
    },
    {
      selector: ".five-step",
      content:t('fifth-step'),
    },
    {
      selector: ".six-step",
      content: t('sixth-step'),
    },
    {
      content: (
        <div style={{ textAlign: "center" }}>
          <h2>{t('onboardingEndTitle')}</h2>
          <p>{t('onboardingEndText')}</p>
        </div>
      ),
      position: "center",
    },
  ];

  return (
    <TourProvider
      steps={steps}
      styles={onboardingStyles}
      afterOpen={disableBody}
      beforeClose={enableBody}
      badgeContent={({ totalSteps, currentStep }) =>
        `${currentStep + 1}/${totalSteps}`
      }
    >
      {children}
    </TourProvider>
  );
};

export default TourSteps;