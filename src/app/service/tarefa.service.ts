import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Tarefa{
  id?:number;
  titulo:string;
  descricao:string;
  concluida:boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  private apiUrl = 'http://localhost:8080/api/tarefas'

  constructor(private http:HttpClient) { }

  listaTarefas():Observable<Tarefa[]>{
    return this.http.get<Tarefa[]>(this.apiUrl);
  }

  adicionarTarefa(tarefa:Tarefa):Observable<Tarefa>{
    return this.http.post<Tarefa>(this.apiUrl,tarefa);
  }

  excluirTarefa(id:Number):Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${id}`)
  }
}
