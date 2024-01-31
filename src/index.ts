import { createStore, withProps } from "@ngneat/elf";

type Circle = { kind: "CIRCLE"; diameter: number };
type Square = { kind: "SQUARE"; edge: number };
type Shape = Circle | Square;

// The store has a state of 'never', instead of 'Shape'
const store = createStore(
  { name: "people" },
  withProps<Shape>({ kind: "CIRCLE", diameter: 2 })
);

// does not compile, because the store state is 'never'
store.update(() => ({ kind: "SQUARE", diameter: 1 }));
