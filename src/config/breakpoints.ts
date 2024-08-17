export type BreakpointKey = "sm" | "md" | "lg" | "xl" | "xxl";
export type Breakpoints = Record<BreakpointKey, string>;

const breakpoints: Breakpoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  xxl: "1536px",
};

export default breakpoints;
