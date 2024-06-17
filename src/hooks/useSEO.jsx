// useSEO.jsx
import { useEffect } from 'react';

const useSEO = ({title, metadata}) => {
    useEffect(() => {
        document.title = title || 'ADO Workbench';
        document.meta = metadata || { description: 'ADO Workbench' };
    }, []);
}

export default useSEO;