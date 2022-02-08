import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { mergeMap, Observable, of, timer } from 'rxjs';

@Injectable()
export class V2PreloaderService implements PreloadingStrategy {

  // Important Prefetched Data for V2ApiService through 
  preload(route: Route, loadMe: () => Observable<any>): Observable<any> {
    if (route.data && route.data['preload']) {
      var delay:number=route.data['delay']
      console.log('preload called on '+route.path+' delay is '+delay);
      return timer(delay).pipe(
        mergeMap( _ => { 
          console.log("Loading now "+ route.path);
          return loadMe() ;
        }));
    } else {
      console.log('no preload for the path '+ route.path);
      return of(null);
    }
  }
}
