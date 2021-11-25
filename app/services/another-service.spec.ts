import {
  createServiceFactory,
  SpectatorService,
  SpectatorServiceFactory
} from '@ngneat/spectator';
import {AnotherService} from "./another-service";

describe('AnotherService', () => {
  let spectator: SpectatorService<AnotherService>;
  let service: AnotherService;

  const createService: SpectatorServiceFactory<AnotherService> = createServiceFactory({
    service: AnotherService
  });

  beforeEach(() => {
    spectator = createService();
    service = spectator.service;
  });

  it('should return proper value', () => {
    const result = service.doSomething();

    expect(result).toBe(3);
  });
});
