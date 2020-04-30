import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll-wrapper',
  templateUrl: './scroll-wrapper.component.html',
  styleUrls: ['./scroll-wrapper.component.css'],
})
export class ScrollWrapperComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const scrollContainer: any = document.querySelector('.scrollable'),
      scrollContentWrapper = document.querySelector(
        '.scrollable .content-wrapper'
      ),
      scroller: any = document.querySelector('.scroller'),
      scrollContent = document.querySelector('.scrollable .content');
    let contentPosition = 0,
      normalizedPosition,
      scrollerBeingDragged = false;

    let topPosition, scrollerHeight;

    function calculateScrollerHeight() {
      // *Calculation of how tall scroller should be
      return 20;
      const visibleRatio =
        scrollContainer.offsetHeight / scrollContentWrapper.scrollHeight;
      return visibleRatio * scrollContainer.offsetHeight;
    }

    function moveScroller(evt) {
      // Move Scroll bar to top offset
      const scrollPercentage =
        evt.target.scrollTop / scrollContentWrapper.scrollHeight;
      console.log(evt.target.scrollTop);
      console.log(scrollContainer.offsetHeight);
      console.log(scrollContentWrapper.scrollHeight);
      topPosition = scrollPercentage * (scrollContainer.offsetHeight - 5) + 50;
      scroller.style.top = topPosition + 'px';
    }

    function startDrag(evt) {
      normalizedPosition = evt.pageY;
      contentPosition = scrollContentWrapper.scrollTop;
      scrollerBeingDragged = true;
    }

    function stopDrag(evt) {
      scrollerBeingDragged = false;
    }

    function scrollBarScroll(evt) {
      if (scrollerBeingDragged === true) {
        const mouseDifferential = evt.pageY - normalizedPosition;
        const scrollEquivalent =
          mouseDifferential *
          (scrollContentWrapper.scrollHeight / scrollContainer.offsetHeight);
        scrollContentWrapper.scrollTop = contentPosition + scrollEquivalent;
      }
    }

    function createScroller() {
      // determine how big scroller should be based on content
      scrollerHeight = calculateScrollerHeight();

      if (scrollerHeight / scrollContainer.offsetHeight < 1) {
        // *If there is a need to have scroll bar based on content size
        scroller.style.height = scrollerHeight + 'px';

        // append scroller to scrollContainer div
        scrollContainer.appendChild(scroller);

        // show scroll path divot
        scrollContainer.className += ' showScroll';

        // attach related draggable listeners
        scroller.addEventListener('mousedown', startDrag);
        window.addEventListener('mouseup', stopDrag);
        window.addEventListener('mousemove', scrollBarScroll);
      }
    }

    createScroller();

    // *** Listeners ***
    scrollContentWrapper.addEventListener('scroll', moveScroller);
  }
}
