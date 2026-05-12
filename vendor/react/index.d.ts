export type ReactNode = unknown;
export function StrictMode(props: { children?: ReactNode }): ReactNode;
declare global {
  namespace JSX {
    type Element = unknown;
    interface IntrinsicElements { [elemName: string]: any; }
  }
}
export {};
