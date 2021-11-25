import {
  createServiceFactory,
  createSpyObject,
  SpectatorService,
  SpectatorServiceFactory,
  SpyObject
} from '@ngneat/spectator';
import { MockProvider, MockService } from 'ng-mocks';
import {SimpleService} from "./simple-service";
import {AnotherService} from "./another-service";

describe('Simple Service', () => {
  let spectator: SpectatorService<SimpleService>;
  let service: SimpleService;

  const anotherServiceMock: SpyObject<AnotherService> = createSpyObject(AnotherService);
  anotherServiceMock.doSomething.and.returnValue(10);

  const createService: SpectatorServiceFactory<SimpleService> = createServiceFactory({
    service: SimpleService,
    providers: [MockProvider(AnotherService, MockService(AnotherService, anotherServiceMock))]
  });

  beforeEach(() => {
    spectator = createService();
    service = spectator.service;
  });

  it('should call another service', () => {
    service.callAnotherService();

    expect(anotherServiceMock.doSomething).toHaveBeenCalled();
  });

  it('should return proper value', () => {
    const result = service.callAnotherService();

    expect(result).toBe(10);
  });
});
