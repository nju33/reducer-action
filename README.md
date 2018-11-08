# ReducerAction

[![CircleCI](https://circleci.com/gh/nju33/react-a.svg?style=svg&circle-token=9c6b0217483ac8aca3220b42a652f08e0b36cfa4)](https://circleci.com/gh/nju33/react-a)
[![TypeScript](https://badges.frapsoft.com/typescript/code/typescript.svg?v=101)](https://github.com/ellerbrock/typescript-badges/)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

## Install

```bash
yarn add -D @nju33/reducer-action
```

## Example

```ts
import {ReducerAction} from '@nju33/reducer-action';

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
    aAction.payload.foo;
    break;
  }
  case ActionType.B: {
    aAction.payload.bar;
    break;
  }
  default:
}

```
