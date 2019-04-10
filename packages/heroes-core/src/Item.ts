export interface ItemData {
  readonly id: string;
  readonly tradable: boolean;
}

export interface Item<T = {}> {
  readonly id: string;
  readonly data: T;
}

export interface ItemSelection {
  readonly objectId: string;
  readonly index: number;
}
