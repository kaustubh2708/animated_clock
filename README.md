# Animated Clock

A smooth, animated digital clock with neumorphic design inspired by a Reddit post showing a clock hitting midnight.

## Demo

https://github.com/user-attachments/assets/your-video-id

*Screen recording showing the animated clock in action*

## Features

- **Real-time Display**: Shows current time in HH:MM:SS format
- **Smooth Animations**: Digits smoothly transition when time changes
- **Neumorphic Design**: Modern UI with soft shadows and depth
- **Auto-start**: Clock begins automatically when page loads
- **Manual Controls**: Start/Stop buttons for user control
- **Responsive**: Clean, centered layout that works on different screen sizes

## How It Works

The clock uses a unique animation approach where:
- Each digit position (hours, minutes, seconds) has its own column
- Numbers are stacked vertically within each digit container
- A marker element highlights the current number
- CSS transforms smoothly animate between digit changes
- JavaScript updates the display every second

## Technologies Used

- **HTML5**: Semantic structure with digit containers
- **CSS3**: Neumorphic styling, flexbox layout, smooth transitions
- **Vanilla JavaScript**: Clock logic, DOM manipulation, interval timing

## File Structure

```
animated_clock/
├── index.html          # Main HTML structure
├── style.css           # Neumorphic styling and animations
├── script.js           # Clock logic and digit animations
└── README.md           # Project documentation
```

## Installation & Usage

1. Clone the repository:
   ```bash
   git clone https://github.com/kaustubh2708/animated_clock.git
   ```

2. Navigate to the project directory:
   ```bash
   cd animated_clock
   ```

3. Open `index.html` in your web browser or serve it locally:
   ```bash
   open index.html
   ```

## Inspiration

This project was inspired by [this satisfying clock animation](https://www.reddit.com/r/OddSatisfying/comments/swygni/clock_hitting_midnight/) from Reddit, recreated with web technologies.

## License

MIT License - feel free to use and modify as needed.