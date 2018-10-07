import { Action } from '@ngrx/store';

export const ACTIVAR_LOADING = '[UI loading] Cargando...';
export const DESACTIVAR_LOADING = '[UI loading] Fin de carga...';

export class ActivarLoadingAction implements Action {

  readonly type = ACTIVAR_LOADING;

}

export class DesactivarLoadingAction implements Action {

  readonly type = DESACTIVAR_LOADING;

}

export type accions = ActivarLoadingAction | DesactivarLoadingAction;
