import React, { useEffect, useState } from 'react';

type ScrollItem = {
  text: string;
  offset: number;
};

const useActiveToc = (
  mdContentRef: React.RefObject<HTMLDivElement>,
  tocRef: React.RefObject<HTMLDivElement>,
) => {
  const [scrollList, setScrollList] = useState<ScrollItem[]>([]);

  useEffect(() => {
    const headings = Array.from(
      mdContentRef.current?.children as HTMLCollection,
    ).filter(el => el instanceof HTMLHeadingElement) as HTMLHeadingElement[];

    const scrollList: ScrollItem[] = [];

    headings.forEach(heading => {
      const windowScrollY = window.scrollY;
      const elementTopInViewPort = heading.getBoundingClientRect().top ?? 0;
      const currentHeadingAbsoluteTop = Math.round(
        windowScrollY + elementTopInViewPort - 1,
      );
      const replacedText =
        '#' +
        heading.innerText
          .replace(/\s/g, '-')
          .replace(/[^가-힣0-9a-zA-Z-]/g, '')
          .toLowerCase();

      scrollList.push({
        text: replacedText,
        offset: currentHeadingAbsoluteTop,
      });
    });

    scrollList.push({
      text: scrollList.slice(0, -1)?.pop()?.text ?? '',
      offset: document.documentElement.offsetHeight,
    });

    setScrollList(scrollList);
  }, []);

  useEffect(() => {
    const navArray = Array.from(
      tocRef.current?.children[0].children as HTMLCollection,
    );

    const getDecodedHash = (el: Element, replaceText: string): string => {
      let decodedHash = '';
      if (el instanceof HTMLAnchorElement) {
        decodedHash = decodeURIComponent(el.hash);
      } else if (
        el.children.length > 1 &&
        el.children[1] instanceof HTMLUListElement
      ) {
        const nestedArr = Array.from(el.children[1].children);
        toggleActiveNav(nestedArr, replaceText);
        decodedHash = getDecodedHash(el.children[0], replaceText);
      } else if (
        el.children.length === 1 &&
        el.children[0] instanceof HTMLUListElement
      ) {
        const nestedArr = Array.from(el.children[0].children);
        toggleActiveNav(nestedArr, replaceText);
      } else {
        decodedHash = getDecodedHash(el.children[0], replaceText);
      }
      return decodedHash;
    };

    const getActiveNav = (
      navArr: Element[],
      replacedText: string,
    ): Element | undefined =>
      navArr
        .filter(nav => getDecodedHash(nav, replacedText) === replacedText)
        .pop();

    const getInactiveNavArr = (navArr: Element[], replacedText: string) =>
      navArr.filter(nav => getDecodedHash(nav, replacedText) !== replacedText);

    const toggleActiveNav = (navArr: Element[], replacedText: string) => {
      getActiveNav(navArr, replacedText)?.classList?.add('active');
      getInactiveNavArr(navArr, replacedText).forEach(nav =>
        nav.classList.remove('active'),
      );
    };

    const activeNav = () => {
      const currentScrollArea = scrollList.find(
        ({ offset }, index, arr) =>
          window.scrollY >= offset &&
          window.scrollY < arr?.[Math.min(index + 1, arr.length - 1)].offset,
      );

      toggleActiveNav(navArray, currentScrollArea?.text ?? '');
    };

    window.addEventListener('scroll', activeNav);

    return () => {
      window.removeEventListener('scroll', activeNav);
    };
  }, [scrollList]);
};

export default useActiveToc;
