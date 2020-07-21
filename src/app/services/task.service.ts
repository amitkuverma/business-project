import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiPath: string;

  constructor(private httpClient: HttpClient) {
    const env: any = environment;
    this.apiPath = env.paths.api
  }
  getAllTask() {
    return this.httpClient.get<any>(`${this.apiPath}/task`);
  }

  createTask(data) {
    return this.httpClient.post<any>(`${this.apiPath}/task`, data);
  }

  getTask(id) {
    return this.httpClient.get<any>(`${this.apiPath}/task/${id}`)
  }

  getSearchedTask(categoryId, text) {
    return this.httpClient.get<any>(`${this.apiPath}/task/task/${categoryId}/${text}`);
  }

  getAllMytasks(id) {
    return this.httpClient.get<any>(`${this.apiPath}/task/mytasks/${id}`)

  }

  getAppliedTasks(id) {
    return this.httpClient.get<any>(`${this.apiPath}/task/appliedtask/${id}`)
  }

  createPropTask(data) {
    return this.httpClient.post<any>(`${this.apiPath}/task/proSubCat`, data)
  }

  ApplyTask(data) {
    return this.httpClient.post<any>(`${this.apiPath}/task/applyTask`, data)
  }

}


