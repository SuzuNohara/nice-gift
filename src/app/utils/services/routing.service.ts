import { Injectable } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class RoutingService {

  public params: Params;

  constructor(private route: ActivatedRoute, private router: Router) {}

  public async getParams(){
    await this.route.queryParams.toPromise().then(params => {
      this.params = params;
    });
    return this.params;
  }

  public goTo(route: string, params?: any){
    this.router.navigate([route], {relativeTo: this.route});
  }

}
