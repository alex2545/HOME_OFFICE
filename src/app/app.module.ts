import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { FuncionarioCardComponent } from './funcionario-card/funcionario-card.component';
import { CampoColoridoDirective } from './campo-colorido.directive';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    FuncionarioCardComponent,
    CampoColoridoDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
