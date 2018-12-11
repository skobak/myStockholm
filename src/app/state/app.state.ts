import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Place } from '../models/place.model';
import { AddPlace, RemovePlace } from './../actions/app.actions';

export class AppStateModel {
  places: Place[];
}

// tslint:disable-next-line:max-classes-per-file
@State<AppStateModel>({
  name: 'app',
  defaults: {
    places: [],
  },
})
export class AppState {
  constructor() {}

  @Selector()
  static getPlaces(state: AppStateModel) {
    return state.places;
  }

  @Action(AddPlace)
  add(
    { getState, patchState }: StateContext<AppStateModel>,
    { payload }: AddPlace,
  ) {
    const state = getState();
    patchState({
      places: [...state.places, payload],
    });
  }

  @Action(RemovePlace)
  remove(
    { getState, patchState }: StateContext<AppStateModel>,
    { payload }: RemovePlace,
  ) {
    patchState({
      places: getState().places.filter((a) => {
        return a.id !== payload;
      }),
    });
  }
}
