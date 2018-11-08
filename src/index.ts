export interface ActionDictionary {
  [x: string]: (...args: any[]) => {};
}

export type ReducerAction<T extends ActionDictionary> = T extends {
  // tslint:disable-next-line:no-unused
  [P in keyof T]: infer F
}
  // @ts-ignore
  ? ReturnType<F>
  : never;
