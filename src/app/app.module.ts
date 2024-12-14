import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Router} from '@angular/router'
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaTarefasComponent } from './components/lista-tarefas/lista-tarefas.component';
import { AdicionarTarefaComponent } from './components/adicionar-tarefa/adicionar-tarefa.component';
import { EditarTarefaComponent } from './components/editar-tarefa/editar-tarefa.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaTarefasComponent,
    AdicionarTarefaComponent,
    EditarTarefaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
