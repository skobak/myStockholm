export class AddPlace {
  static readonly type = '[Place] Add';
  constructor(public payload: any) {}
}
// tslint:disable-next-line:max-classes-per-file
export class RemovePlace {
  static readonly type = '[Place] Remove';
  constructor(public payload: any) {}
}
// tslint:disable-next-line:max-classes-per-file
export class ShowPopoup {
  static readonly type = '[Place] ShowPopup';
  constructor(public payload: any) {}
}
