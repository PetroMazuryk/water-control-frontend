
import { TourProvider } from "@reactour/tour";
import {onboardingStyles,disableBody, enableBody,} from '../onboarding/onboardingStyles.js'


const TourSteps = ({ children }) => {


  const steps = [
    {
      content: (
        <div style={{ textAlign: "center" }}>
          <h2>Ласкаво просимо до</h2>
          <h2>Water Control 🚀</h2>
          <p>Цей додаток допоможе вам відстежувати споживання води та підтримувати здоровий баланс. Давайте розберемося, як ним користуватися!</p>

        </div>
      ),
      position: "center",
    },
    {
      selector: ".first-step",
      content: "У цьому розділі вказана ваша денна норма споживання води.",
    },
    {
      selector: ".second-step",
      content: "Це ваш індикатор прогресу споживання води.",
    },
    {
      selector: ".third-step",
      content: "Натисніть тут, щоб додати більше води до вашого щоденного споживання.",
    },
    {
      selector: ".four-step",
      content: "Тут ви можете заповнити свої особисті дані та записувати щоденне споживання води у налаштуваннях профілю."
    },
    {
      selector: ".five-step",
      content:"Цей розділ показує історію додавання води за окремий  день. Тут можна побачити, скільки разів і в якій кількості була додана вода.",
    },
    {
      selector: ".six-step",
      content: "Тут ви можете переглянути статистику вашого щомісячного споживання води, враховуючи кожен окремий день у відсотках."
    },
    {
      content: (
        <div style={{ textAlign: "center" }}>
          <h2>Сподіваємось, вам сподобається користуватися WaterControl !</h2>
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