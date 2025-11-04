# Animated Clock

A smooth, animated digital clock with a soft neumorphic UI and satisfying digit transitions (inspired by a Reddit “clock hits midnight” post).

<p align="center">
  <video src="https://github.com/user-attachments/assets/25c0c7c9-67ea-4dcc-b8e4-e691c0125a9d"
         controls
         muted
         loop
         playsinline
         style="max-width: 640px; width: 100%; border-radius: 12px;">
    Your browser does not support the video tag. 
  </video>
</p>

> If the video above doesn't load, [click to view it directly](https://github.com/user-attachments/assets/25c0c7c9-67ea-4dcc-b8e4-e691c0125a9d).

---

## Features

- **Real-time display** in `HH:MM:SS`
- **Smooth digit animations** with CSS transforms
- **Neumorphic design** (soft shadows & depth)
- **Auto-start** on page load
- **Manual controls**: Start / Stop
- **Responsive** centered layout

## Quick Start

```bash
git clone https://github.com/kaustubh2708/animated_clock.git
cd animated_clock
# Option 1: open directly
open index.html     # macOS
# or:
start index.html    # Windows
# Option 2: serve locally (example with Python)
python -m http.server 5173
# then visit http://localhost:5173

```
## How It Works
	•	Each time unit (hours, minutes, seconds) is a column of stacked numbers
	•	A marker highlights the current value
	•	CSS transforms animate vertical shifts between numbers
	•	JavaScript updates the time once per second

## Tech
	•	HTML5 for structure
	•	CSS3 for neumorphism, layout & transitions
	•	Vanilla JS for clock logic & DOM updates



## Inspiration

Recreated from a satisfying clock animation seen on Reddit.

## License

MIT — use and modify freely.

