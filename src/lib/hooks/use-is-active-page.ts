import { useEffect, useState } from "react";

function useIsActivePage(link) {

    const [active, setActive] = useState(false);

    useEffect(() => {
        const result = window.location.href.match(`${link}`);
        if (result) {
            setActive(result.length > 0);
        }
    }, []);

    return active;

}

export default useIsActivePage;
