import { IseeqContentMaterialModule } from './iseeq-content-material.module';

describe('IseeqContentMaterialModule', () => {
  let iseeqContentMaterialModule: IseeqContentMaterialModule;

  beforeEach(() => {
    iseeqContentMaterialModule = new IseeqContentMaterialModule();
  });

  it('should create an instance', () => {
    expect(iseeqContentMaterialModule).toBeTruthy();
  });
});
