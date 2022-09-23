const wakingUp = () => console.log('Acordando!!')

const coffe = () => console.log('Bora tomar café!!')

const sleep = () => console.log('Partiu dormir!!')

const doingThings = (action) => action();

doingThings(wakingUp);

doingThings(coffe);

doingThings(sleep);