declare module 'react' {
  export function useState<T>(initialState: T | (() => T)): [T, (value: T | ((prev: T) => T)) => void];
  export function useEffect(effect: () => void | (() => void), deps?: any[]): void;
  export function useCallback<T extends (...args: any[]) => any>(callback: T, deps: any[]): T;
  export const React: any;
}

declare module 'lucide-react' {
  export const ArrowRight: any;
  export const Shield: any;
  export const Globe: any;
  export const Brain: any;
  export const Mail: any;
  export const Instagram: any;
  export const Youtube: any;
  export const Send: any;
}
