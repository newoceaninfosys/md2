import { RippleConfig, RippleRenderer } from './ripple-renderer';
/** Possible states for a ripple element. */
export declare enum RippleState {
    FADING_IN = 0,
    VISIBLE = 1,
    FADING_OUT = 2,
    HIDDEN = 3,
}
/**
 * Reference to a previously launched ripple element.
 */
export declare class RippleRef {
    private _renderer;
    element: HTMLElement;
    config: RippleConfig;
    /** Current state of the ripple reference. */
    state: RippleState;
    constructor(_renderer: RippleRenderer, element: HTMLElement, config: RippleConfig);
    /** Fades out the ripple element. */
    fadeOut(): void;
}
