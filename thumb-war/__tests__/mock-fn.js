const thumbWar = require('../thumb-war');
const utils = require('../utils');

const originalGetWinner = utils.getWinner;
utils.getWinner = jest.fn((p1, p2) => p1);

const winner = thumbWar('Donald Duck', 'Amitabh B');
expect(winner).toBe('Donald Duck');


utils.getWinner = originalGetWinner;
