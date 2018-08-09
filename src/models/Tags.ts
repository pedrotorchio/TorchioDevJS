export class Tags{
  public collection: string[] = [];

  constructor(data: string[] | string = []) {

    if (typeof data === 'string' ) {
      data = (<string> data).split(',');
    }

    this.collection = <string[]> data;
  }
}