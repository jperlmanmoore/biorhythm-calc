
import { calculateBiorhythms } from './calculations';

it('calculates the biorhythm', () => {
    const {physical} = calculateBiorhythms('1976-03-05', '2020-09-11');
    expect(physical).toBeCloseTo(0.0000);
})

it('calculates the biorhythm', () => {
    const {emotional} = calculateBiorhythms('1976-03-05', '2020-09-11');
    expect(emotional).toBeCloseTo(-1.0000);
})

it('calculates the biorhythm', () => {
    const {intellectual} = calculateBiorhythms('1976-03-05', '2020-09-11');
    expect(intellectual).toBeCloseTo(-0.9989);
})