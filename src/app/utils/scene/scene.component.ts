import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit, Output, EventEmitter, ViewChildren, QueryList } from '@angular/core';
import { SceneConfig } from './scene-config';
import { Animation, AnimationController } from '@ionic/angular';
import { TextComponent } from '../text/text.component';

@Component({
  selector: 'app-scene',
  templateUrl: './scene.component.html',
  styleUrls: ['./scene.component.scss'],
})
export class SceneComponent implements OnInit, AfterViewInit{

  private animations: Animation[];

  @Input('configuration') config: SceneConfig;

  @ViewChild('cloud1', { read: ElementRef, static: true }) cloud1: ElementRef;
  @ViewChild('cloud2', { read: ElementRef, static: true }) cloud2: ElementRef;
  @ViewChild('cloud3', { read: ElementRef, static: true }) cloud3: ElementRef;
  @ViewChild('cloud4', { read: ElementRef, static: true }) cloud4: ElementRef;
  @ViewChild('cloud5', { read: ElementRef, static: true }) cloud5: ElementRef;
  @ViewChild('cloud6', { read: ElementRef, static: true }) cloud6: ElementRef;

  @ViewChild('rainbow', { read: ElementRef, static: true }) rainbow: ElementRef;
  @ViewChild('sun', { read: ElementRef, static: true }) sun: ElementRef;

  @ViewChild('message') mess: TextComponent;

  @Output('actions') actions = new EventEmitter<string>();

  @ViewChildren('heart', { read: ElementRef }) heartsch: QueryList<ElementRef>;

  constructor(private anim: AnimationController) {}

  private hearts: string[];

  ngAfterViewInit() {
    this.animations = [];
    this.animations.push(this.anim.create().addElement(this.cloud1.nativeElement).duration(Math.floor(Math.random() * 10000)).iterations(Infinity).keyframes(this.randomHorizontal(Math.floor(Math.random() * 10000), true, 20)));
    this.animations.push(this.anim.create().addElement(this.cloud2.nativeElement).duration(Math.floor(Math.random() * 10000)).iterations(Infinity).keyframes(this.randomHorizontal(Math.floor(Math.random() * 10000), true, 20)));
    this.animations.push(this.anim.create().addElement(this.cloud3.nativeElement).duration(Math.floor(Math.random() * 10000)).iterations(Infinity).keyframes(this.randomHorizontal(Math.floor(Math.random() * 10000), true, 20)));
    this.animations.push(this.anim.create().addElement(this.cloud4.nativeElement).duration(Math.floor(Math.random() * 10000)).iterations(Infinity).keyframes(this.randomHorizontal(Math.floor(Math.random() * 10000), true, 20)));
    this.animations.push(this.anim.create().addElement(this.cloud5.nativeElement).duration(Math.floor(Math.random() * 10000)).iterations(Infinity).keyframes(this.randomHorizontal(Math.floor(Math.random() * 10000), true, 20)));
    this.animations.push(this.anim.create().addElement(this.cloud6.nativeElement).duration(Math.floor(Math.random() * 10000)).iterations(Infinity).keyframes(this.randomHorizontal(Math.floor(Math.random() * 10000), true, 20)));

    this.animations.push(this.anim.create().addElement(this.rainbow.nativeElement).duration(Math.floor(Math.random() * 10000)).iterations(Infinity).keyframes(this.randomOpacity(Math.floor(Math.random() * 10000), true)));
    
    this.animations.push(this.anim.create().addElement(this.sun.nativeElement).duration(Math.floor(Math.random() * 10000)).iterations(Infinity).keyframes(this.randomRotate(Math.floor(Math.random() * 10000), true)));
    this.animations.push(this.anim.create().addElement(this.sun.nativeElement).duration(Math.floor(Math.random() * 10000)).iterations(Infinity).keyframes(this.randomHorizontal(Math.floor(Math.random() * 10000), true, 40)));
    setTimeout(()=>{
      for(let animation of this.animations){
        animation.play();
      }
    }, 1000);
  }

  ngOnInit() {
  }

  private randomHorizontal(duration: number, soft: boolean, width: number){
    let steps: number = Math.floor(Math.random() * (duration / (soft ? 1000: 100))) + 2;
    let retorno = [];
    let offset = 1 / steps;
    let max = 100 - width;
    retorno.push({offset: 0, left: '0vw'});
    for(let i = 1; i < steps; i++){
        retorno.push({offset: i * offset, left: Math.floor(Math.random() * max) + 'vw'});
    }
    retorno.push({offset: 1, left: '0vw'});
    return retorno;
  }

  private randomVertical(duration: number, soft: boolean, height: number){
    let steps: number = Math.floor(Math.random() * (duration / (soft ? 1000: 100))) + 2;
    let retorno = [];
    let offset = 1 / steps;
    let max = 100 - height;
    retorno.push({offset: 0, top: '0vh'});
    for(let i = 1; i < steps; i++){
        retorno.push({offset: i * offset, top: Math.floor(Math.random() * max) + 'vh'});
    }
    retorno.push({offset: 1, top: '0vh'});
    return retorno;
  }

  private randomOpacity(duration: number, soft: boolean){
    let steps: number = soft ? 10: 3;
    let retorno = [];
    let offset = 1 / steps;
    retorno.push({offset: 0, transform: 'rotate(0)', opacity: '1'});
    for(let i = 1; i < steps; i++){
        retorno.push({offset: i * offset, transform: 'rotate(0)', opacity: '' + Math.random()});
    }
    retorno.push({offset: 1, transform: 'rotate(0)', opacity: '1'});
    return retorno;
  }

  private randomRotate(duration: number, soft: boolean){
    let steps: number = Math.floor(Math.random() * (duration / (soft ? 1000: 100))) + 2;
    let retorno = [];
    let offset = 1 / steps;
    retorno.push({offset: 0, transform: 'rotate(0)', opacity: '1'});
    for(let i = 1; i < steps; i++){
      retorno.push({offset: offset * i, transform: 'rotate(' + Math.floor(Math.random() * 360) + 'deg)', opacity: '' + Math.random()});
    }
    retorno.push({offset: 1, transform: 'rotate(0)', opacity: '1' });
    return retorno;
  }

  private fadeIn(){

  }

  private fadeOut(){

  }

  public footer_action(){
    if(this.config.footer_action == 'hearts'){
      this.showHearts();
    }
    this.actions.emit(this.config.footer_action);
  }

  public changeMessage(message: string){
    this.mess.changeText(message);
  }

  private randomUp(){
    let retorno = [];
    retorno.push({offset: 0, top: '110vh'});
    retorno.push({offset: 1, top: '0vh'});
    return retorno;
  }

  private showHearts(){
    this.hearts = [];
    let count = Math.floor(Math.random() * 100) + 40;
    while(count--){
      this.hearts.push(Math.floor(Math.random() * 95) + '');
    }
    this.animations = [];
    for(let h of this.heartsch){
      this.animations.push(this.anim.create().addElement(h.nativeElement).duration(Math.floor(Math.random() * 5000)).iterations(1).keyframes(this.randomUp()));
    }
    setTimeout(()=>{
      for(let animation of this.animations){
        animation.play();
      }
    }, 100);
  }
}
