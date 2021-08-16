import React, { useCallback, useRef, useState } from "react";
import { BiCaretLeft, BiShare } from "react-icons/bi";
import useListenScroll from "../hooks/useListenScroll";

const SCROLL_THRESHOLD = 50;

interface NavigationProps {
  navList: {
    name: string;
    id: string;
  }[];
  onClickNavItem?: (id: string) => void;
  threshold?: number;
}

function Navigation(props: NavigationProps) {
  const [scrollY, setScrollY] = useState(0);
  const { threshold = SCROLL_THRESHOLD } = props;
  const isOpacity = scrollY < threshold;
  const opacity = isOpacity ? scrollY / threshold : 1;
  const headerStyle: React.CSSProperties = {
    backgroundColor: `rgba(255,255,255, ${opacity})`,
  };
  const iconColor = isOpacity ? 'white' : 'black'

  const bodyEle = useRef(document.body);
  const callback = useCallback((distance: number) => {
    setScrollY(distance);
  }, []);
  useListenScroll(bodyEle, callback);

  return (
    <header data-testid="header" style={headerStyle}>
      <div role="icon" style={{color: iconColor}}>
        <BiCaretLeft />
      </div>
      <nav>
        {props.navList.map((item, idx) => (
          <li key={idx} onClick={() => props.onClickNavItem?.(item.id)}>
            {item.name}
          </li>
        ))}
      </nav>
      <div role="icon" style={{color: iconColor}}>
        <BiShare />
      </div>
    </header>
  );
}

export default Navigation;
