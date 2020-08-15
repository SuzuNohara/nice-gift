import { Component, OnInit, ViewChild } from '@angular/core';
import { SceneConfig } from 'src/app/utils/scene/scene-config';
import { SceneComponent } from 'src/app/utils/scene/scene.component';
import { RoutingService } from 'src/app/utils/services/routing.service';

@Component({
  selector: 'app-screen3',
  templateUrl: './screen3.component.html',
  styleUrls: ['./screen3.component.scss'],
})
export class Screen3Component implements OnInit {

  public config: SceneConfig;
  private steps: number;

  @ViewChild(SceneComponent) scene: SceneComponent;

  constructor(private route: RoutingService) {
    this.config = {
      hour: 'night',
      land: -1,
      moon: 1,
      clouds: 0,
      rainbow: false,
      sun: false,
      header: 'Mis sentimientos por ti',
      header_size: 4,
      message: 'siempre, desde que eras una niña, he pensado que eres muy linda y genial',
      message_size: 4,
      footer: 'continuar',
      footer_size: 3,
      footer_action: 'continuar'
    };
    this.steps = 0;
  }

  ngOnInit() {}

  public sceneActions(event: string){
    console.log(this.steps);
    this.steps++;
    if(this.steps == 6){
      this.route.goTo('screen4');
    }else if(this.steps == 1){
      this.scene.changeMessage('Tantas veces cuando te veia con alguien mas o sabia que estabas con alguien mas me ponia celoso');
    }else if(this.steps == 2){
      this.scene.changeMessage('No pienso en ti todo el tiempo, pero cusndo lo hago me haces sonreir y me pones realmente muy feliz');
    }else if(this.steps == 3){
      this.scene.changeMessage('Sabes, no siempre hago cosillas, por ti, realmente no se me da el ser demasiado detallista, pero realmente disfruto hacerlo, disfruto tanto que te guste y como sonries cuando tienes algo mio, y se que en secreto lo miras cuando ya ha pasado tiempo desde que te lo di, prestarte atencion y hafcerte feliz me hace feliz');
    }else if(this.steps == 4){
      this.scene.changeMessage('Te amo, me importas, nunca crei que alguien seria importante para mi o que llegaria a amar a alguien, pero asi es, amo a alguien, quiero a alguien, me importa alguien y esa eres tu');
    }else if(this.steps == 5){
      this.scene.changeMessage('No importa que pase, no importa lo que suceda, no importa si algo nos separa o nos une mas, siempre te amare y tendre estos sentimientos por ti');
    }
  }

}
