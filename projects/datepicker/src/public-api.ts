/*
 * Public API Surface of datepicker
 */

// RTL
export { Dir, LayoutDirection, RtlModule } from "./core/rtl/dir";

// Mutation Observer
export {
  ObserveContentModule,
  ObserveContent
} from "./core/observe-content/observe-content";

export * from "./core/option/module";

// Portals
export {
  Portal,
  PortalHost,
  BasePortalHost,
  ComponentPortal,
  TemplatePortal
} from "./core/portal/portal";
export {
  PortalHostDirective,
  TemplatePortalDirective,
  PortalModule
} from "./core/portal/portal-directives";
export { DomPortalHost } from "./core/portal/dom-portal-host";

// Platform
export { Platform } from "./core/platform/platform";
export * from "./core/platform/module";

// Overlay
export { Overlay, OVERLAY_PROVIDERS } from "./core/overlay/overlay";
export { OverlayContainer } from "./core/overlay/overlay-container";
export {
  FullscreenOverlayContainer
} from "./core/overlay/fullscreen-overlay-container";
export { OverlayRef } from "./core/overlay/overlay-ref";
export { OverlayState } from "./core/overlay/overlay-state";
export {
  ConnectedOverlayDirective,
  OverlayOrigin,
  OverlayModule
} from "./core/overlay/overlay-directives";
export { ViewportRuler } from "./core/overlay/position/viewport-ruler";

export * from "./core/overlay/position/connected-position";
export * from "./core/overlay/scroll/index";

// Export pre-defined position strategies and interface to build custom ones.
export { PositionStrategy } from "./core/overlay/position/position-strategy";
export {
  GlobalPositionStrategy
} from "./core/overlay/position/global-position-strategy";
export {
  ConnectedPositionStrategy
} from "./core/overlay/position/connected-position-strategy";

// Gestures
export { GestureConfig } from "./core/gestures/gesture-config";
// Explicitly specify the interfaces which should be re-exported, because if everything
// is re-exported, module bundlers may run into issues with treeshaking.
export {
  HammerInput,
  HammerManager
} from "./core/gestures/gesture-annotations";

// Ripple
export * from "./core/ripple/module";

// a11y
export {
  AriaLivePoliteness,
  LiveAnnouncer,
  LIVE_ANNOUNCER_ELEMENT_TOKEN,
  LIVE_ANNOUNCER_PROVIDER
} from "./core/a11y/live-announcer";

// Selection
export * from "./core/selection/selection";

export * from "./core/a11y/focus-trap";
export { InteractivityChecker } from "./core/a11y/interactivity-checker";
export { isFakeMousedownFromScreenReader } from "./core/a11y/fake-mousedown";

export { A11yModule } from "./core/a11y/module";

export {
  UniqueSelectionDispatcher,
  UniqueSelectionDispatcherListener,
  UNIQUE_SELECTION_DISPATCHER_PROVIDER
} from "./core/coordination/unique-selection-dispatcher";

export { MdLineModule, MdLine, MdLineSetter } from "./core/line/line";

// Style
export * from "./core/style/module";

// Misc
export { ComponentType } from "./core/overlay/generic-component-type";

// Keybindings
export * from "./core/keyboard/keycodes";

export * from "./core/compatibility/compatibility";

// Animation
export * from "./core/animation/animation";

// Selection
export * from "./core/selection/module";

// Coercion
export { coerceBooleanProperty } from "./core/coercion/boolean-property";
export { coerceNumberProperty } from "./core/coercion/number-property";

// Compatibility
export {
  CompatibilityModule,
  NoConflictStyleCompatibilityMode
} from "./core/compatibility/compatibility";

// Common material module
export {
  MdCommonModule,
  MATERIAL_SANITY_CHECKS
} from "./core/common-behaviors/common-module";

// Datetime
export { DateAdapter } from "./core/datetime/date-adapter";
export { NativeDateAdapter } from "./core/datetime/native-date-adapter";
export { MD_DATE_FORMATS } from "./core/datetime/date-formats";
export { MD_NATIVE_DATE_FORMATS } from "./core/datetime/native-date-formats";
export * from "./core/datetime/module";

// Placeholder
export {
  FloatPlaceholderType,
  PlaceholderOptions,
  MD_PLACEHOLDER_GLOBAL_OPTIONS
} from "./core/placeholder/placeholder-options";

export * from "./core/core";

export * from "./lib/month-view";
export * from "./lib/year-view";
export * from "./lib/calendar-body";
export * from "./lib/clock";
export * from "./lib/date-locale";
export * from "./lib/date-util";
export * from "./lib/datepicker.component";
export * from "./lib/datepicker.module";
