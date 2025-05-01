
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