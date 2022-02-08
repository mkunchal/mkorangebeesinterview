import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { V2ApiService } from './services';



@NgModule({
  declarations: [],
  providers: [
    V2ApiService
  ],
  imports: [
    CommonModule
  ]
})
export class V2CoreModule { 
  constructor(@Optional() @SkipSelf() core:V2CoreModule ){
    if (core) {
        throw new Error("You should import core module only in the root module")
    }
  }
}
