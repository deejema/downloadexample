import { Component, OnInit } from '@angular/core';
import {saveAs} from 'file-saver';

import { DownloadserviceService } from '../downloadservice.service';

@Component({
  selector: 'app-downloadscreen',
  templateUrl: './downloadscreen.component.html',
  styleUrls: ['./downloadscreen.component.css']
})

export class DownloadscreenComponent implements OnInit {
	constructor(private downloadService: DownloadserviceService) { }

	ngOnInit() {
	}
	download(/*filename: string*/): void {
		var filename = 'Hi.pdf';
		
        this.downloadService.download(filename)
        .subscribe(
            data => saveAs(data, filename),
            error => console.error(error)
		);
	}
}
