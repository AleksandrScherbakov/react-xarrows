import React from 'react';
import { anchorCustomPositionType, labelsType, pathType, relationType, svgCustomEdgeType, svgElemType, xarrowPropsType } from '../types';
import { dimensionType } from '../privateTypes';
declare type parsedXarrowProps = {
    shouldUpdatePosition: React.MutableRefObject<boolean>;
    start: HTMLElement;
    end: HTMLElement;
    startAnchor: anchorCustomPositionType[];
    endAnchor: anchorCustomPositionType[];
    labels: Required<labelsType>;
    color: string;
    lineColor: string;
    headColor: string;
    tailColor: string;
    strokeWidth: number;
    showHead: boolean;
    headSize: number;
    showTail: boolean;
    tailSize: number;
    path: pathType;
    showXarrow: boolean;
    curveness: number;
    gridBreak: {
        relative: number;
        abs: number;
    };
    gridRadius: number;
    relationType: relationType;
    dashness: {
        strokeLen: number;
        nonStrokeLen: number;
        animation: number;
    };
    headShape: svgCustomEdgeType;
    tailShape: svgCustomEdgeType;
    animateDrawing: number;
    zIndex: number;
    passProps: JSX.IntrinsicElements[svgElemType];
    SVGcanvasProps: React.SVGAttributes<SVGSVGElement>;
    arrowBodyProps: React.SVGProps<SVGPathElement>;
    arrowHeadProps: JSX.IntrinsicElements[svgElemType];
    arrowTailProps: JSX.IntrinsicElements[svgElemType];
    divContainerProps: React.HTMLProps<HTMLDivElement>;
    SVGcanvasStyle: React.CSSProperties;
    divContainerStyle: React.CSSProperties;
    _extendSVGcanvas: number;
    _debug: boolean;
    _cpx1Offset: number;
    _cpy1Offset: number;
    _cpx2Offset: number;
    _cpy2Offset: number;
};
/**
 * smart hook that provides parsed props to Xarrow and will trigger rerender whenever given prop is changed.
 */
declare const useXarrowProps: (userProps: xarrowPropsType, refs: {
    headRef: React.MutableRefObject<any>;
    tailRef: React.MutableRefObject<any>;
}) => readonly [parsedXarrowProps, {
    startPos: dimensionType;
    endPos: dimensionType;
}];
export declare type useXarrowPropsResType = ReturnType<typeof useXarrowProps>;
export default useXarrowProps;
