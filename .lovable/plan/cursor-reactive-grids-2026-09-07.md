# Cursor-reactive grids

## Scope
- Add one lightweight reusable pointer-tracking wrapper that updates CSS variables without triggering React renders.
- Place it behind the existing navbar while preserving all navbar content, layout, colors, and behavior.
- Place the same effect behind the existing home-page image section only, without changing its image or content.
- Keep a static subtle grid on touch/mobile devices and disable movement when reduced motion is preferred.

## Technical details
- Use `requestAnimationFrame` to limit pointer updates and small CSS background-position offsets for smooth performance.
- Keep the grid layer non-interactive and behind existing content.
- Verify desktop cursor movement, mobile layout, navigation behavior, and current build status.
