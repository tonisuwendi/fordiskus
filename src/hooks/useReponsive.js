import { useMediaQuery } from 'react-responsive';

const useResponsive = () => {
    const isMobile = useMediaQuery({
        maxWidth: '650px',
    });

    return { isMobile };
};

export default useResponsive;
