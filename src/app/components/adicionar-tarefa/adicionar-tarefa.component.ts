import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Tarefa, TarefaService } from 'src/app/service/tarefa.service';

@Component({
  selector: 'app-adicionar-tarefa',
  templateUrl: './adicionar-tarefa.component.html',
  styleUrls: ['./adicionar-tarefa.component.css']
})
export class AdicionarTarefaComponent {

  tarefa:Tarefa={
    titulo:'',
    descricao:'',
    concluida:false,
  };

 
  constructor(private router:Router,private ts:TarefaService){}

    adicionar():void{
      if(!this.tarefa.titulo || !this.tarefa.descricao){
        alert('Prencha os campos');
        return;
      }

      this.ts.adicionarTarefa(this.tarefa).subscribe(()=>{
        alert('Tarefa Adicionada com sucesso');
        this.router.navigate(["/tarefas"]);
      });
    }
  

  cancelar():void{
    this.router.navigate(["/tarefas"]);
  }

}
