import { TestBed, inject } from '@angular/core/testing';

import { DownloadserviceService } from './downloadservice.service';

describe('DownloadserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DownloadserviceService]
    });
  });

  it('should be created', inject([DownloadserviceService], (service: DownloadserviceService) => {
    expect(service).toBeTruthy();
  }));
});
