import { Component, OnInit } from '@angular/core';
import { SceneConfig } from 'src/app/utils/scene/scene-config';
import { RoutingService } from '../../utils/services/routing.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  public config: SceneConfig;

  constructor(private route: RoutingService) {
    this.config = {
      hour: 'day',
      land: 0,
      moon: 0,
      clouds: 6,
      rainbow: true,
      sun: true,
      message: 'Para: ',
      message_align: 'text-center',
      footer: 'Siguiente',
      footer_size: 3,
      footer_action: 'footer',
      message_size: 9
    }
  }

  ngOnInit() {}

  public sceneActions(event: string){
    console.log('actions activated');
    this.route.goTo('screen1');
  }

}
