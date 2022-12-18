import determineHealthStatus from '../health-status';

test.each([
  ['health 51', { name: 'Маг', health: 51 }, 'healthy'],
  ['health 50', { name: 'Лучник', health: 50 }, 'wounded'],
  ['health 15', { name: 'Рыцарь', health: 15 }, 'wounded'],
  ['health 14', { name: 'Гном', health: 14 }, 'critical'],
])(
  ('testing determineHealthStatus with %s'),
  (_, fighter, expected) => {
    const result = determineHealthStatus(fighter);
    expect(result).toBe(expected);
  },
);
