import { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  z: number;
  pz: number;
}

export function StarfieldBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let cx = 0;
    let cy = 0;

    const stars: Star[] = [];
    const numStars = 800;
    const speedBase = 2;
    let speedMult = 1;

    // Initialize stars
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * 2000 - 1000,
        y: Math.random() * 2000 - 1000,
        z: Math.random() * 1000,
        pz: Math.random() * 1000
      });
    }

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      cx = width / 2;
      cy = height / 2;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', resize);
    resize();

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      const scrollPct = window.scrollY / (document.body.scrollHeight - window.innerHeight || 1);
      const targetSpeed = speedBase + (scrollPct * 20);
      speedMult += (targetSpeed - speedMult) * 0.1;

      for (let i = 0; i < numStars; i++) {
        const star = stars[i];

        star.z -= speedMult;

        if (star.z <= 0) {
          star.z = 1000;
          star.pz = 1000;
          star.x = Math.random() * 2000 - 1000;
          star.y = Math.random() * 2000 - 1000;
        }

        const x = cx + (star.x / star.z) * width;
        const y = cy + (star.y / star.z) * height;

        const px = cx + (star.x / star.pz) * width;
        const py = cy + (star.y / star.pz) * height;

        star.pz = star.z;

        if (x >= 0 && x <= width && y >= 0 && y <= height) {
          const alpha = (1 - star.z / 1000);
          const size = (1 - star.z / 1000) * 2.5;

          ctx.beginPath();
          ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
          ctx.lineWidth = size;
          ctx.lineCap = 'round';
          ctx.moveTo(px, py);
          ctx.lineTo(x, y);
          ctx.stroke();
        }
      }

      requestAnimationFrame(animate);
    };

    const animId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 1 }}
      aria-hidden="true"
    />
  );
}