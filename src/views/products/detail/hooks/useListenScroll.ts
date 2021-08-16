import { useEffect } from "react";

export default function useListenScroll(
  ref: React.RefObject<HTMLElement>,
  callback: (distance: number) => void
) {
  useEffect(() => {
    const ele = ref.current;
    const callFun = (e: Event) =>
      callback((e.currentTarget as HTMLElement)?.scrollTop);
    ele?.addEventListener("scroll", callFun);
    return () => {
      ele?.removeEventListener("scroll", callFun);
    };
  }, [callback, ref]);
}
