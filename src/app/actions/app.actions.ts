export class AddPlace {
  static readonly type = '[Place] Add'
  constructor(public payload: any) {}
}
export class RemovePlace {
  static readonly type = '[Place] Remove'
  constructor(public payload: any) {}
}
