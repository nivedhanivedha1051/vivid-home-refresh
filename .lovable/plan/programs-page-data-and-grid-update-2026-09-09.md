# Programs page data and grid update

## Scope
- Remove only the Programs and Courses entries from the existing shared navbar link list, preserving every remaining item and its order.
- Move the current Programs page copy and six program entries into a typed data module, then render the unchanged page structure from that data.
- Add a Programs-only, non-interactive line-grid layer with faint default lines and a blue cursor-following highlight; keep touch devices static and respect reduced-motion preferences.

## Technical details
- Track pointer position with `requestAnimationFrame` and CSS variables so movement does not trigger React renders.
- Mask a brighter duplicate grid around the pointer while retaining the existing background color and layout.
- Verify navbar contents, Programs rendering, cursor response, mobile overflow, and build/runtime status.
