import { Component, OnInit } from '@angular/core';
import { SceneConfig } from 'src/app/utils/scene/scene-config';
import { RoutingService } from 'src/app/utils/services/routing.service';

@Component({
  selector: 'app-screen1',
  templateUrl: './screen1.component.html',
  styleUrls: ['./screen1.component.scss'],
})
export class Screen1Component implements OnInit {

  public config: SceneConfig;

  constructor(private route: RoutingService) {
    this.config = {
      hour: 'night',
      land: 2,
      moon: 1,
      clouds: 0,
      rainbow: false,
      sun: false,
      message: 'Me quieres?',
      message_size: 7,
      footer: 'La unica respuestas es si!!',
      footer_size: 3,
      footer_action: 'footer'
    }
  }

  ngOnInit() {}

  public sceneActions(event: string){
    console.log('actions activated');
    this.route.goTo('screen2');
  }

}
