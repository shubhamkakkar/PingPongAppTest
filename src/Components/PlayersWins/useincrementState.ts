import { useState } from 'react';

export default function useIncrementState(initialValue?: number): [number, ()=>void] {
  const [state, setState] = useState(() => initialValue || 0);
  function incrementState() {
    setState(state + 1);
  }
  return [state, incrementState];
}
