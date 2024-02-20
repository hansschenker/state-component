import { BehaviorSubject } from 'rxjs';

export type Effect<T> = (value: T) => void;

export const reactive = <T>(value: T, effects: Effect<T>[]) => {
    const state = new BehaviorSubject<T>(value);
    effects.forEach(effect => state.subscribe(effect));

    return {
        get: () => state.value,
        set: (value: T) => state.next(value),
    };  
}