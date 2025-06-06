/* Vår klass */

export class Item {
  id: string;
  item: string;
  section: string;
  isDone: boolean;
  addedAt: number;

  constructor(item: string, section: string, isDone: boolean, addedAt?: number) {
    this.id = crypto.randomUUID();
    this.item = item;
    this.section = section;
    this.isDone = isDone;
    this.addedAt = addedAt ?? Date.now();
  }
}