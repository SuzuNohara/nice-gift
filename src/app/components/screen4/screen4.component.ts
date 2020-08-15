import { Component, OnInit } from '@angular/core';
import { SceneConfig } from 'src/app/utils/scene/scene-config';
import { RoutingService } from 'src/app/utils/services/routing.service';

@Component({
  selector: 'app-screen4',
  templateUrl: './screen4.component.html',
  styleUrls: ['./screen4.component.scss'],
})
export class Screen4Component implements OnInit {

  public config: SceneConfig;
  private steps: number;

  constructor(private route: RoutingService) {
    this.config = {
      hour: 'night',
      land: -1,
      moon: 1,
      clouds: 0,
      rainbow: false,
      sun: false,
      header: 'mi regalo para ti',
      header_size: 4,
      footer: 'corazones',
      footer_size: 3,
      footer_action: 'hearts',
      hearts: 'hearts'
    };
    this.steps = 0;
  }

  ngOnInit() {}

  public sceneActions(event: string){
  }

}
