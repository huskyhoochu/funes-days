import React, { useEffect, useState } from 'react';

const useActiveToc = (
  mdContentRef: React.RefObject<HTMLDivElement>,
  tocRef: React.RefObject<HTMLDivElement>,
) => {
  const [curScroll, setCurScroll] = useState<number>(0);

  useEffect(() => {
    const getCurScroll = (e: Event) => {
      const curScroll = (e.target as Document).documentElement.scrollTop;
      setCurScroll(curScroll);
    };

    const headings = Array.from(
      mdContentRef.current?.children as HTMLCollection,
    ).filter(el => el instanceof HTMLHeadingElement) as HTMLHeadingElement[];
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

    const inactiveAllNav = (navArr: Element[]) =>
      navArr.forEach(nav => nav.classList.remove('active'));

    headings.forEach((heading, idx, arr) => {
      const nextHeadingTop =
        arr[idx + 1]?.getBoundingClientRect().top ||
        document.documentElement.offsetHeight;
      const replacedText =
        '#' +
        heading.innerText
          .replace(/\s/g, '-')
          .replace(/[^???-???0-9a-zA-Z-]/g, '')
          .toLowerCase();

      // ???????????? ?????? ????????? ???????????? ???
      // ?????? nav??? active??????
      if (0 >= heading.getBoundingClientRect().top && 0 < nextHeadingTop) {
        toggleActiveNav(navArray, replacedText);
      }

      // ???????????? ?????? ??????????????? ????????? ?????? ???
      // ?????? nav??? inactive ?????????
      if (curScroll < arr[0].getBoundingClientRect().top) {
        inactiveAllNav(navArray);
      }
    });

    window.addEventListener('scroll', getCurScroll);

    return () => {
      window.removeEventListener('scroll', getCurScroll);
    };
  }, [curScroll, setCurScroll]);
};

export default useActiveToc;
