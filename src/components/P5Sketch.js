import React, { useRef, useEffect, useState } from 'react';
import p5 from 'p5';

const P5Sketch = () => {
  const sketchRef = useRef();

  const [viewportWidth, setViewportWidth] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(0);

  useEffect(() => {
    const sketch = (p) => {
      let startX, startY, endX, endY;
      let deltaStartX, deltaStartY, deltaEndX, deltaEndY;
      let r, g, b;

      p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight).parent(sketchRef.current);

        startX = p.random(p.width);
        startY = p.random(p.height);
        endX = p.random(p.width);
        endY = p.random(p.height);

        const range = 5;
        deltaStartX = p.random(-range, range);
        deltaStartY = p.random(-range, range);
        deltaEndX = p.random(-range, range);
        deltaEndY = p.random(-range, range);

        r = 102;
        g = 65;
        b = 71;

        p.noFill();
        p.background(32);
      };

      p.draw = () => {
        // Draw a line
        p.stroke(r, g, b, 100);
        p.line(startX, startY, endX, endY);

        // Pick a new color
        r += p.random(-5, 5);
        g += p.random(-2, 2);
        b += p.random(-5, 5);

        r = p.constrain(r, 0, 255);
        g = p.constrain(g, 0, 80);
        b = p.constrain(b, 80, 255);

        // Move a bit
        startX += deltaStartX;
        startY += deltaStartY;
        endX += deltaEndX;
        endY += deltaEndY;

        if (startX < 0 || startX > p.width) {
          deltaStartX *= -1;
        }

        if (startY < 0 || startY > p.height) {
          deltaStartY *= -1;
        }

        if (endX < 0 || endX > p.width) {
          deltaEndX *= -1;
        }

        if (endY < 0 || endY > p.height) {
          deltaEndY *= -1;
        }
      };

      p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
      };
    };

    const myP5 = new p5(sketch);

    return () => {
      myP5.remove();
    };
  }, []);

  return <div ref={sketchRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}></div>;
};

export default P5Sketch;