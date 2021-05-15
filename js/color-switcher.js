import { colors } from './colors.js';

const DELAY = 1000;
let colorSwitchInterval = null;

const refs = {
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]'),
  clearBtn: document.querySelector('button[data-action="clear"]'),
  body: document.body,
};

refs.startBtn.addEventListener('click', () => {
  colorSwitchInterval = setInterval(() => {
    const getColorId = randomIntegerFromInterval(0, colors.length - 1);
    refs.body.style.backgroundColor = colors[getColorId];
  }, DELAY);
  refs.startBtn.disabled = true;
});
refs.stopBtn.addEventListener('click', onStopBtnClick);
refs.clearBtn.addEventListener('click', () => {
  refs.body.style.backgroundColor = '';
  onStopBtnClick();
});

function onStopBtnClick() {
  clearInterval(colorSwitchInterval);
  refs.startBtn.disabled = false;
}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
