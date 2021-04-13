import { CreateContext } from '../create-context';
import { reducer, initialState } from './app.reducer';

const [state, useDispatch, provider] = CreateContext(initialState, reducer);
export const useStickyState = state;
export const useStickyDispatch = useDispatch;
export const StickyProvider = provider;
