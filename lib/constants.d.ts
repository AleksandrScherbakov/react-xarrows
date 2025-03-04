/// <reference types="react" />
export declare const cAnchorEdge: readonly ["middle", "left", "right", "top", "bottom", "auto"];
export declare const cPaths: readonly ["smooth", "grid", "straight"];
export declare const cSvgElems: readonly ["circle", "ellipse", "line", "path", "polygon", "polyline", "rect"];
export declare const arrowShapes: {
    readonly arrow1: {
        readonly svgElem: JSX.Element;
        readonly offsetForward: 0.25;
    };
    readonly heart: {
        readonly svgElem: JSX.Element;
        readonly offsetForward: 0.1;
    };
    readonly circle: {
        readonly svgElem: JSX.Element;
        readonly offsetForward: 0;
    };
};
export declare const cArrowShapes: ("arrow1" | "heart" | "circle")[];
