import { Component, OnInit } from '@angular/core';
import { SceneConfig } from 'src/app/utils/scene/scene-config';
import { RoutingService } from 'src/app/utils/services/routing.service';

@Component({
  selector: 'app-screen2',
  templateUrl: './screen2.component.html',
  styleUrls: ['./screen2.component.scss'],
})
export class Screen2Component implements OnInit {

  public config: SceneConfig;

  constructor(private route: RoutingService) {
    this.config = {
      hour: 'night',
      land: 0,
      moon: 1,
      clouds: 0,
      rainbow: false,
      sun: false,
      message: 'Me amas?',
      message_size: 7,
      footer: 'si? o super si!!??',
      footer_size: 3,
      footer_action: 'footer'
    }
  }

  ngOnInit() {}

  public sceneActions(event: string){
    console.log('actions activated');
    this.route.goTo('screen3');
  }

}
