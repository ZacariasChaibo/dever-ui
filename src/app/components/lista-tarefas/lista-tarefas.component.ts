import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tarefa, TarefaService } from 'src/app/service/tarefa.service';

@Component({
  selector: 'app-lista-tarefas',
  templateUrl: './lista-tarefas.component.html',
  styleUrls: ['./lista-tarefas.component.css']
})
export class ListaTarefasComponent implements OnInit{

  tarefas:Tarefa[]=[];

  constructor(private router:Router,private ts:TarefaService){}

  ngOnInit(): void {
      this.ts.listaTarefas().subscribe((dados)=>{
        this.tarefas = dados;
      });
  }

  excluirTarefa(id?:number): void{
    if(id && confirm('Tem certeza que deseja excluir esta tarefa?')){
      this.ts.excluirTarefa(id).subscribe(()=>{
        this.tarefas=this.tarefas.filter((tarefa)=>tarefa.id!==id);
      });
    }
  }

  navegar():void{
    this.router.navigate(["/adicionar-tarefa"]);
  }


}
