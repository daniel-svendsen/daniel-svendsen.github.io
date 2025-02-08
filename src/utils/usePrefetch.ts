import {useEffect} from 'react';

const usePrefetch = (importFunc: () => Promise<any>) => {
    useEffect(() => {
        importFunc();
    }, [importFunc]);
};

export default usePrefetch;
