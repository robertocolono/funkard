declare module 'react' {
  export * from 'react';
  export const useState: any;
  export const useEffect: any;
  export const useCallback: any;
}

declare module 'next/link' {
  import { ComponentProps } from 'react';
  export default function Link(props: ComponentProps<'a'>): JSX.Element;
}

declare module 'next/image' {
  import { ComponentProps } from 'react';
  export default function Image(props: ComponentProps<'img'>): JSX.Element;
}

declare module 'next/navigation' {
  export function useRouter(): any;
  export function usePathname(): string;
  export function useSearchParams(): any;
}

declare module 'framer-motion' {
  export const motion: any;
  export const AnimatePresence: any;
}

declare module 'lucide-react' {
  export const Mail: any;
  export const Instagram: any;
  export const Youtube: any;
  export const Send: any;
  export const ArrowRight: any;
  export const Shield: any;
  export const Globe: any;
  export const Brain: any;
}
