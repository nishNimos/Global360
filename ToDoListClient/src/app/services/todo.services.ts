import { Injectable } from '@angular/core';
import { getBaseUrl } from '../../main';
import { Todolistitem } from '../todolistitem';
import { safeFetch } from './todo.fetch-wrapper';

@Injectable({
  providedIn: 'root'
})
export class TodoServices {
  private Url = getBaseUrl() + '/todolist';

  async getAllItems(): Promise<Todolistitem[]> {
    const items = await safeFetch<Todolistitem[]>(this.Url);
    return items ?? [];
  }

  async removeItem(itemId: number): Promise<any | null> {
    const response = await safeFetch(`${this.Url}?id=${itemId}`, {
      method: 'DELETE',
    });
  }

  async addItem(item: Todolistitem): Promise<any | null> {
    const response = await safeFetch(this.Url, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(item),
    });
  }

  ngOnInit() {

  }

}
