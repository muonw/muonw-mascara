export default function collapse (node: HTMLElement, params: Record<string,any>) {
    const defaultParams = {
        open: false,
        duration: 0.4,
        easing: 'ease'
    }

    params = Object.assign(defaultParams, params);

    const noop = () => {}
    let transitionEndResolve: Function = noop;
    let transitionEndReject: Function = noop;
    
    const listener: any = node.addEventListener('transitionend', () => {
        transitionEndResolve();
        transitionEndResolve = noop;
        transitionEndReject = noop;
    });

    // Convenience functions
    async function asyncTransitionEnd() {
        return new Promise((resolve, reject) => {
            transitionEndResolve = resolve;
            transitionEndReject = reject;            
        });
    }

    async function nextFrame () {
        return new Promise(requestAnimationFrame);
    }

    function transition () {
        return `height ${params.duration}s ${params.easing}`;
    }

    function setOverflow() {
        node.style.overflowX = 'inherit';
        node.style.overflowY = 'clip';
    }

    function unsetOverflow() {
        node.style.overflowX = 'inherit';
        node.style.overflowY = 'inherit';
    }

    // Set initial styles
    node.style.transition = transition();
    node.style.height = params.open ? 'auto' : '0px';
    // Change the visibility to disable/enable focus by tab key inside the collapsed element
    node.style.visibility = params.open ? 'visible' : 'hidden';
    
    async function open() {
        setOverflow();
        node.style.visibility = 'visible';
        // Height is already in pixels
        // Start the transition
        node.style.height = node.scrollHeight + 'px';

        // Wait for transition to end,
        // then switch back to height auto
        try {
            await asyncTransitionEnd();
            node.style.height = 'auto';
            node.setAttribute('data-transition_end', 'open');
            unsetOverflow();
        } catch(err) {
            // Interrupted by a close transition
        }
    }

    async function close() {
        if (node.style.height === 'auto') {
            setOverflow();

            // Temporarily turn transitions off
            node.style.transition = 'none';
            await nextFrame();

            // Set height to pixels, and turn transition back on
            node.style.height = node.scrollHeight + 'px';
            node.style.transition = transition();
            await nextFrame();

            // Start the transition
            node.style.height = '0px';
        }
        else {
            // We are interrupting an open transition
            transitionEndReject();
            node.style.height = '0px';
        }
        
        // Wait for transition to end,
        // then hide the node
        try {
            await asyncTransitionEnd();
            node.style.visibility = 'hidden';
            node.setAttribute('data-transition_end', 'close');
            unsetOverflow();
        } catch(err) {
            // Interrupted by an open transition
        }
    }

    function update (newParams: Record<string,any>) {
        params = Object.assign(params, newParams);
        params.open ? open() : close();
    }

    function destroy () {
        node.removeEventListener('transitionend', listener);
    }

    return { update, destroy }
}