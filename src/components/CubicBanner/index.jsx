import React, { useEffect, useRef } from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

export default function CubicBanner() {
  const cubeContainerRef = useRef(null);
  const cubeRef = useRef(null);

  useEffect(() => {
    const cubeContainer = cubeContainerRef.current;
    const cube = cubeRef.current;
    
    if (!cubeContainer || !cube) return;

    let isDragging = false;
    let startX = 0;
    let startY = 0;
    
    // Initial state
    const initialRotateX = -25;
    const initialRotateY = 40;
    
    // Current state
    let rotateX = initialRotateX;
    let rotateY = initialRotateY;
    let translateX = 0;
    let translateY = 0;
    
    // Animation variables
    let animationId = null;
    let velocityX = 0;
    let velocityY = 0;
    let velocityRotX = 0;
    let velocityRotY = 0;
    
    // Spring parameters
    const springStiffness = 0.08;
    const damping = 0.85;
    const threshold = 0.5;
    
    // Drag constraints
    const maxDrag = 250;
    const resistance = 0.85;
    
    const updateCubeTransform = () => {
      if (cube) {
        cube.style.transform =
          `translate(${translateX}px, ${translateY}px) ` +
          `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      }
    };

    const startSpringBack = () => {
      const animate = () => {
        // Calculate distance from initial position
        const distX = 0 - translateX;
        const distY = 0 - translateY;
        const distRotX = initialRotateX - rotateX;
        const distRotY = initialRotateY - rotateY;
        
        // Apply spring force
        velocityX += distX * springStiffness;
        velocityY += distY * springStiffness;
        velocityRotX += distRotX * springStiffness;
        velocityRotY += distRotY * springStiffness;
        
        // Apply damping
        velocityX *= damping;
        velocityY *= damping;
        velocityRotX *= damping;
        velocityRotY *= damping;
        
        // Update position and rotation
        translateX += velocityX;
        translateY += velocityY;
        rotateX += velocityRotX;
        rotateY += velocityRotY;
        
        updateCubeTransform();
        
        // Check if animation should stop
        const totalVelocity = Math.abs(velocityX) + Math.abs(velocityY) +
                             Math.abs(velocityRotX) + Math.abs(velocityRotY);
        const totalDistance = Math.abs(distX) + Math.abs(distY) +
                             Math.abs(distRotX) + Math.abs(distRotY);
        
        if (totalVelocity > threshold || totalDistance > threshold) {
          animationId = requestAnimationFrame(animate);
        } else {
          // End animation, snap to initial state
          translateX = 0;
          translateY = 0;
          rotateX = initialRotateX;
          rotateY = initialRotateY;
          updateCubeTransform();
          animationId = null;
        }
      };
      
      animate();
    };

    const handleMouseDown = (e) => {
      isDragging = true;
      startX = e.clientX;
      startY = e.clientY;
      
      if (animationId) {
        cancelAnimationFrame(animationId);
        animationId = null;
      }
      
      velocityX = velocityY = velocityRotX = velocityRotY = 0;
      e.preventDefault();
    };

    const handleMouseMove = (e) => {
      if (!isDragging) return;
      
      let deltaX = e.clientX - startX;
      let deltaY = e.clientY - startY;
      
      // Apply resistance (rubber band effect)
      const distanceFromOrigin = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      if (distanceFromOrigin > maxDrag) {
        const scale = maxDrag / distanceFromOrigin;
        deltaX *= scale;
        deltaY *= scale;
      }
      
      translateX = deltaX * resistance;
      translateY = deltaY * resistance;
      
      // Rotate based on drag direction
      rotateY = initialRotateY + deltaX * 0.3;
      rotateX = initialRotateX - deltaY * 0.3;
      
      updateCubeTransform();
    };

    const handleMouseUp = () => {
      if (isDragging) {
        isDragging = false;
        startSpringBack();
      }
    };

    // Touch support
    const handleTouchStart = (e) => {
      isDragging = true;
      const touch = e.touches[0];
      startX = touch.clientX;
      startY = touch.clientY;
      
      if (animationId) {
        cancelAnimationFrame(animationId);
        animationId = null;
      }
      
      velocityX = velocityY = velocityRotX = velocityRotY = 0;
      // Don't prevent default here to allow scrolling if not dragging cube
    };

    const handleTouchMove = (e) => {
      if (!isDragging) return;
      
      const touch = e.touches[0];
      let deltaX = touch.clientX - startX;
      let deltaY = touch.clientY - startY;
      
      const distanceFromOrigin = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      if (distanceFromOrigin > maxDrag) {
        const scale = maxDrag / distanceFromOrigin;
        deltaX *= scale;
        deltaY *= scale;
      }
      
      translateX = deltaX * resistance;
      translateY = deltaY * resistance;
      
      rotateY = initialRotateY + deltaX * 0.3;
      rotateX = initialRotateX - deltaY * 0.3;
      
      updateCubeTransform();
      e.preventDefault(); // Prevent scrolling while dragging
    };

    const handleTouchEnd = () => {
      if (isDragging) {
        isDragging = false;
        startSpringBack();
      }
    };

    // Add event listeners
    cubeContainer.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    
    cubeContainer.addEventListener('touchstart', handleTouchStart, { passive: false });
    document.addEventListener('touchmove', handleTouchMove, { passive: false });
    document.addEventListener('touchend', handleTouchEnd);

    // Cleanup
    return () => {
      cubeContainer.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      
      cubeContainer.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
      
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <div className={styles.cubicBanner}>
      <div className={styles.graphicBg}></div>
      <div className={styles.graphicArea}>
        <div className={styles.cubeContainer} ref={cubeContainerRef}>
          <div className={styles.cube} ref={cubeRef}>
            <div className={`${styles.cubeFace} ${styles.cubeFront}`}></div>
            <div className={`${styles.cubeFace} ${styles.cubeTop}`}></div>
            <div className={`${styles.cubeFace} ${styles.cubeLeft}`}></div>
            <div className={`${styles.cubeFace} ${styles.cubeRight}`}></div>
            <div className={`${styles.cubeFace} ${styles.cubeBottom}`}></div>
            <div className={`${styles.cubeFace} ${styles.cubeBack}`}></div>
          </div>
        </div>
      </div>
      <div className={styles.contentBox}>
        <div className={styles.badge}>CUBIC-PROJECT</div>
        <h1 className={styles.bannerTitle}>Cubic-Wiki</h1>
        <p className={styles.bannerDesc}>
          Minecraft Java & Bedrock<br />
          全版本服务器开服教程
        </p>
        <div className={styles.btnGroup}>
          <Link className={styles.btn} to="/intro">
            Start Guide
          </Link>
          <Link className={`${styles.btn} ${styles.btnSecondary}`} to="https://github.com/Cubic-Project/NitWikit">
            View Source
          </Link>
        </div>
      </div>
    </div>
  );
}