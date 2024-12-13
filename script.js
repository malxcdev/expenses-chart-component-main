const data = [
    { day: 'mon', amount: 17.45 },
    { day: 'tue', amount: 34.91 },
    { day: 'wed', amount: 52.36 },
    { day: 'thu', amount: 31.07 },
    { day: 'fri', amount: 23.39 },
    { day: 'sat', amount: 43.28 },
    { day: 'sun', amount: 25.48 },
  ];
  
  const maxAmount = Math.max(...data.map(item => item.amount));
  
data.forEach(item => {
    const height = Math.round((item.amount / maxAmount) * 100); // Proporcional al mayor valor
    const barElement = document.querySelector(`#bar-${item.day}`);
    barElement.style.paddingTop = `${height}%`;
    barElement.style.paddingBottom = `${height}%`;
});
  