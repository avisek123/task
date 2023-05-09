export const DATA = [
  {subject: 'Mathematics', time: '9:00 - 10:00', color: 'pink'},
  {subject: 'English Language', time: '10:00 - 11:00', color: 'green'},
  {subject: 'Physics', time: '11:00 - 12:00', color: 'blue'},
];
export function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
