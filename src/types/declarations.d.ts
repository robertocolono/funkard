declare module 'react' {
  export function useState<T = any>(initialState: T | (() => T)): [T, (value: T | ((prev: T) => T)) => void];
  export function useEffect(effect: () => void | (() => void), deps?: any[]): void;
  export function useCallback<T extends (...args: any[]) => any>(callback: T, deps: any[]): T;
  export const React: any;
  export type ReactNode = any;
  export const memo: any;
  export const forwardRef: any;
  export const createContext: any;
  export const useContext: any;
  export namespace React {
    interface ButtonHTMLAttributes<T> {
      [key: string]: any;
    }
  }
}

declare module 'next/navigation' {
  export function useRouter(): any;
  export function usePathname(): string;
  export function useSearchParams(): any;
  export function useParams(): any;
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
  export const Loader2: any;
  export const Trash2: any;
  export const Edit2: any;
  export const MapPin: any;
  export const X: any;
  export const Plus: any;
  export const Star: any;
  export const CreditCard: any;
  export const User: any;
  export const Archive: any;
  export const ArrowLeft: any;
  export const Calendar: any;
  export const Search: any;
  export const Bell: any;
  export const Filter: any;
  export const Settings: any;
  export const RefreshCw: any;
  export const WifiOff: any;
  export const Wifi: any;
  export const ShoppingCart: any;
  export const ShoppingBag: any;
  export const Layers: any;
  export const HelpCircle: any;
  export const Menu: any;
  export const Sun: any;
  export const Moon: any;
  export const Check: any;
  export const ChevronDown: any;
  export const ChevronUp: any;
}

declare module '@/components/ui/tabs' {
  export const Tabs: any;
  export const TabsList: any;
  export const TabsTrigger: any;
  export const TabsContent: any;
}

declare module 'recharts' {
  export const ResponsiveContainer: any;
  export const LineChart: any;
  export const Line: any;
  export const XAxis: any;
  export const YAxis: any;
  export const Tooltip: any;
  export const CartesianGrid: any;
}
