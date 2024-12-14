import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaTarefasComponent } from './components/lista-tarefas/lista-tarefas.component';
import { AdicionarTarefaComponent } from './components/adicionar-tarefa/adicionar-tarefa.component';
import { EditarTarefaComponent } from './components/editar-tarefa/editar-tarefa.component';

const routes: Routes = [
  {path:'',redirectTo:'/tarefas',pathMatch:'full'},
  {path:'tarefas',component:ListaTarefasComponent},
  {path:'adicionar-tarefa',component:AdicionarTarefaComponent},
  {path:'editar-tarefa/:id',component:EditarTarefaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
