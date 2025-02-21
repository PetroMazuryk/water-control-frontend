import i18next from 'i18next';

export const formatTime = (date) => {
  const dateObj = new Date(Number(date));
  const hours = dateObj.getHours();
  const minutes = dateObj.getMinutes();

  const isEnglish = i18next.language.startsWith('en');

  if (isEnglish) {
    const ampm = hours >= 12 ? 'PM' : 'AM';
    let hours12 = hours % 12 || 12;
    return `${hours12.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')} ${ampm}`;
  } else {
    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}`;
  }
};
