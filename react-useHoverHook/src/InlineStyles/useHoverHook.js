import React, { useEffect, useRef } from "react";

const useHoverHook = (originalColour, hoverColour) => {
    const getDomState = useRef();
    useEffect(() => {
        getDomState.current.addEventListener("mouseover", () => {
            getDomState.current.style.backgroundColor = hoverColour;
        });

        getDomState.current.addEventListener("mouseout", () => {
            getDomState.current.style.backgroundColor = originalColour;
        });
    });

    return getDomState;
};

export default useHoverHook;
