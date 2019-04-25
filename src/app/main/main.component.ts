import { Component, OnInit } from '@angular/core';
import { EmbedVideoService } from 'ngx-embed-video';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  youtubeUrlLongSubstring = 'https://www.youtube.com/watch?v=mtHelVTLKRQ';
  youtubeIdLongestSubstring = "mtHelVTLKRQ"

  youtubeUrlMinimumWindow = 'https://www.youtube.com/watch?v=9odu9ImG9oY';
  youtubeIdMinimumWindow = '9odu9ImG9oY'
  iframe_html: any
  constructor(private embedService: EmbedVideoService) {
    console.log(this.embedService.embed(this.youtubeUrlLongSubstring));
    console.log(this.embedService.embed_youtube(this.youtubeIdLongestSubstring));

    console.log(this.embedService.embed(this.youtubeUrlMinimumWindow));
    console.log(this.embedService.embed_youtube(this.youtubeIdMinimumWindow));
  }

  ngOnInit() {
  }

}
