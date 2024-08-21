import { Injectable } from '@angular/core';
import { IdGenerator } from './id-generator';

@Injectable()
export class IdGeneratorService extends IdGenerator {
  private currentId: number = 0;

  generate(): number {
    this.currentId += 1;
    return this.currentId;
  }
}
