import { IseeqContetnModule } from './iseeq-contetn.module';

describe('IseeqContetnModule', () => {
  let iseeqContetnModule: IseeqContetnModule;

  beforeEach(() => {
    iseeqContetnModule = new IseeqContetnModule();
  });

  it('should create an instance', () => {
    expect(iseeqContetnModule).toBeTruthy();
  });
});
