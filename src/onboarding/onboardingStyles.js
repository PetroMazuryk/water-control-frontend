import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

export const disableBody = () => disableBodyScroll(document.body);
export const enableBody = () => enableBodyScroll(document.body);

export const onboardingStyles = {
  popover: (base) => ({
    ...base,
    borderRadius: 10,
    marginLeft: 10,
    marginRight: 10,
  }),

  close: (base) => ({
    ...base,
    position: 'absolute',
    top: '13px',
    right: '13px',
    cursor: 'pointer',
    fontSize: '20px',
    color: 'var(--color-font-main)',  
  }),
  

  
};