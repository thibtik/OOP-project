export enum Gender {
    MALE,
    FEMALE,
  }
  export abstract class Person {
    constructor(
      protected id : number,
      protected name: string,
      protected age: number,
      protected gender: Gender,
      protected phone: string 
      ) {}
  }