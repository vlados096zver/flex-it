

export const NOTIFY_TIMER: number = 5000;
export const CLEAR_TIMER: number = 1000;

export enum NOTIFY_TYPE {
  SUCCESS = 0,
  ERROR = 1,
  INFO = 2,
  LOADER = 3
}

export const NOTIFY_LIST: {[key: number]: string} = {
  [NOTIFY_TYPE.SUCCESS]: 'Success',
  [NOTIFY_TYPE.ERROR]: 'Error',
  [NOTIFY_TYPE.INFO]: 'Information',
  [NOTIFY_TYPE.LOADER]: 'Loading',
};

export interface NotifyItem {
  id: string;
  title: string;
  message: string;
  clear?: boolean;
  hidden?: boolean;
  type: NOTIFY_TYPE;
}

export interface NotifyChange {
  title?: string;
  message?: string;
  type?: NOTIFY_TYPE;
}


