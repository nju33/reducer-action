import {ReducerAction} from './index';

const enum ActionType {
  A,
  B,
}

const action = {
  a() {
    return {
      type: ActionType.A as ActionType.A,
      payload: {
        foo: 'foo',
      },
    };
  },
  b() {
    return {
      type: ActionType.B as ActionType.B,
      payload: {
        bar: 'bar',
      },
    };
  },
};

type Action = ReducerAction<typeof action>;

const aAction: Action = action.a() as any;

switch (aAction.type) {
  case ActionType.A: {
    // tslint:disable-next-line:no-unused-expression
    aAction.payload.foo;
    break;
  }
  case ActionType.B: {
    // tslint:disable-next-line:no-unused-expression
    aAction.payload.bar;
    break;
  }
  default:
}
