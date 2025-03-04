import PT from 'prop-types';
declare const XarrowPropTypes: {
    start: PT.Validator<string | Required<PT.InferProps<{
        current: PT.Requireable<any>;
    }>>>;
    end: PT.Validator<string | Required<PT.InferProps<{
        current: PT.Requireable<any>;
    }>>>;
    startAnchor: PT.Requireable<"middle" | "left" | "right" | "top" | "bottom" | "auto" | Required<PT.InferProps<{
        position: PT.Validator<"middle" | "left" | "right" | "top" | "bottom" | "auto">;
        offset: PT.Validator<Required<PT.InferProps<{
            x: PT.Requireable<number>;
            y: PT.Requireable<number>;
        }>>>;
    }>> | ("middle" | "left" | "right" | "top" | "bottom" | "auto" | Required<PT.InferProps<{
        position: PT.Validator<"middle" | "left" | "right" | "top" | "bottom" | "auto">;
        offset: PT.Validator<Required<PT.InferProps<{
            x: PT.Requireable<number>;
            y: PT.Requireable<number>;
        }>>>;
    }>>)[]>;
    endAnchor: PT.Requireable<"middle" | "left" | "right" | "top" | "bottom" | "auto" | Required<PT.InferProps<{
        position: PT.Validator<"middle" | "left" | "right" | "top" | "bottom" | "auto">;
        offset: PT.Validator<Required<PT.InferProps<{
            x: PT.Requireable<number>;
            y: PT.Requireable<number>;
        }>>>;
    }>> | ("middle" | "left" | "right" | "top" | "bottom" | "auto" | Required<PT.InferProps<{
        position: PT.Validator<"middle" | "left" | "right" | "top" | "bottom" | "auto">;
        offset: PT.Validator<Required<PT.InferProps<{
            x: PT.Requireable<number>;
            y: PT.Requireable<number>;
        }>>>;
    }>>)[]>;
    labels: PT.Requireable<string | PT.ReactElementLike | Required<PT.InferProps<{
        start: PT.Requireable<string | PT.ReactElementLike>;
        middle: PT.Requireable<string | PT.ReactElementLike>;
        end: PT.Requireable<string | PT.ReactElementLike>;
    }>>>;
    color: PT.Requireable<string>;
    lineColor: PT.Requireable<string>;
    showHead: PT.Requireable<boolean>;
    headColor: PT.Requireable<string>;
    headSize: PT.Requireable<number>;
    tailSize: PT.Requireable<number>;
    tailColor: PT.Requireable<string>;
    strokeWidth: PT.Requireable<number>;
    showTail: PT.Requireable<boolean>;
    path: PT.Requireable<"smooth" | "grid" | "straight">;
    showXarrow: PT.Requireable<boolean>;
    curveness: PT.Requireable<number>;
    gridBreak: PT.Requireable<string>;
    gridRadius: PT.Requireable<number>;
    dashness: PT.Requireable<boolean | object>;
    headShape: PT.Requireable<"arrow1" | "heart" | "circle" | Required<PT.InferProps<{
        svgElem: PT.Requireable<any>;
        offsetForward: PT.Requireable<number>;
    }>>>;
    tailShape: PT.Requireable<"arrow1" | "heart" | "circle" | Required<PT.InferProps<{
        svgElem: PT.Requireable<any>;
        offsetForward: PT.Requireable<number>;
    }>>>;
    animateDrawing: PT.Requireable<number | boolean>;
    zIndex: PT.Requireable<number>;
    passProps: PT.Requireable<object>;
    arrowBodyProps: PT.Requireable<object>;
    arrowHeadProps: PT.Requireable<object>;
    arrowTailProps: PT.Requireable<object>;
    SVGcanvasProps: PT.Requireable<object>;
    divContainerProps: PT.Requireable<object>;
    _extendSVGcanvas: PT.Requireable<number>;
    _debug: PT.Requireable<boolean>;
    _cpx1Offset: PT.Requireable<number>;
    _cpy1Offset: PT.Requireable<number>;
    _cpx2Offset: PT.Requireable<number>;
    _cpy2Offset: PT.Requireable<number>;
};
export default XarrowPropTypes;
