import React, { useEffect, useRef } from "react";
import p5 from "p5";
import ball1 from "../../assets/images/ball_1.svg";
import ball2 from "../../assets/images/ball_2.svg";
import ball3 from "../../assets/images/ball_3.svg";
import ball4 from "../../assets/images/ball_4.svg";

const FloatingBalls: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null); // Ref for the container

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // p5.js sketch
    const sketch = (p: p5) => {
      let ballImages: p5.Image[] = []; // Array to store ball images
      const balls: Array<{
        x: number;
        y: number;
        dx: number;
        dy: number;
        radius: number;
        isHovered: boolean;
        img: p5.Image; // Add image property to each ball
      }> = [];

      // Preload ball images
      p.preload = () => {
        ballImages = [
          p.loadImage(ball1),
          p.loadImage(ball2),
          p.loadImage(ball3),
          p.loadImage(ball4),
        ];
      };

      p.setup = () => {
        const canvas = p.createCanvas(container.offsetWidth, container.offsetHeight);
        canvas.parent(container); // Attach canvas to the container

        // Initialize balls
        for (let i = 0; i < 7; i++) {
          const randomImage = ballImages[p.floor(p.random(ballImages.length))]; // Randomly assign an image
          balls.push({
            x: p.random(p.width),
            y: p.random(p.height),
            dx: p.random(-2, 2),
            dy: p.random(-2, 2),
            radius: 30, // Adjust radius to fit the image size
            isHovered: false,
            img: randomImage, // Assign the random image
          });
        }
      };

      p.draw = () => {
        p.clear(); // Clear the canvas on each frame

        // Draw and update balls
        balls.forEach((ball) => {
          // Update position
          ball.x += ball.dx;
          ball.y += ball.dy;

          // Bounce off edges
          if (ball.x - ball.radius < 0 || ball.x + ball.radius > p.width) {
            ball.dx *= -1;
          }
          if (ball.y - ball.radius < 0 || ball.y + ball.radius > p.height) {
            ball.dy *= -1;
          }

          // Check hover
          const distance = p.dist(p.mouseX, p.mouseY, ball.x, ball.y);
          ball.isHovered = distance < ball.radius;

          // Draw ball image
          const scale = ball.isHovered ? 0.4 : 0.3; // Scale on hover
          p.imageMode(p.CENTER);
          p.image(
            ball.img,
            ball.x,
            ball.y,
            ball.radius * 2 * scale,
            ball.radius * 2 * scale
          );
        });
      };

      // Handle window resize
      p.windowResized = () => {
        p.resizeCanvas(container.offsetWidth, container.offsetHeight);
      };
    };

    // Initialize p5.js sketch
    const p5Instance = new p5(sketch);

    // Cleanup on unmount
    return () => {
      p5Instance.remove();
    };
  }, []);

  return <div ref={containerRef} className="floating-balls-container" />;
};

export default FloatingBalls;