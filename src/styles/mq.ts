import { breakpoints } from './variables';

const mqMobile = `@media (min-width: ${breakpoints.mobile})`;
const mqTablet = `@media (min-width: ${breakpoints.tablet})`;
const mqDesktop = `@media (min-width: ${breakpoints.desktop})`;

export { mqMobile, mqTablet, mqDesktop };
