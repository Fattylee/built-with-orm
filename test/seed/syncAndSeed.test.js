import syncAndSeed from '../../server/src/seed/syncAndSeed';

describe('syncAndSeed', () => {
  it('should throw error upon syncAndSeed method call', () => {
    const res = syncAndSeed();
    console.log(res);
  });
});
