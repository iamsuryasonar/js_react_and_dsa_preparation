import { useEffect } from 'react';

function useOnOutSideClick(ref, callback) {
    function handler(e) {
        if (ref?.current && !ref?.current.contains(e.target)) {
            callback();
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handler);

        return () => {
            document.removeEventListener('mousedown', handler);
        };
    }, [ref]);
}

export default useOnOutSideClick;
