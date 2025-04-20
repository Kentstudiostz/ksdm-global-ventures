
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

type ThreeBackgroundProps = {
  color1?: string;
  color2?: string;
  particleCount?: number;
  particleSize?: number;
  rotationSpeed?: number;
  density?: 'low' | 'medium' | 'high';
};

const ThreeBackground = ({
  color1 = '#FCBF49', // gold
  color2 = '#0077B6', // blue
  particleCount = 1500,
  particleSize = 0.03,
  rotationSpeed = 0.0003,
  density = 'medium',
}: ThreeBackgroundProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInitialized, setIsInitialized] = useState(false);
  
  useEffect(() => {
    if (!containerRef.current || isInitialized) return;
    
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
    
    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);
    
    // Determine actual particle count based on density
    let actualParticleCount = particleCount;
    if (density === 'low') actualParticleCount = Math.floor(particleCount * 0.5);
    if (density === 'high') actualParticleCount = Math.floor(particleCount * 1.5);
    
    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    
    const positions = new Float32Array(actualParticleCount * 3);
    const colors = new Float32Array(actualParticleCount * 3);
    
    // Parse colors
    const color1Obj = new THREE.Color(color1);
    const color2Obj = new THREE.Color(color2);
    
    for (let i = 0; i < actualParticleCount * 3; i += 3) {
      // Position
      positions[i] = (Math.random() - 0.5) * 10;
      positions[i + 1] = (Math.random() - 0.5) * 10;
      positions[i + 2] = (Math.random() - 0.5) * 10;
      
      // Color - mix between the two colors
      const mixRatio = Math.random();
      colors[i] = color1Obj.r * mixRatio + color2Obj.r * (1 - mixRatio);
      colors[i + 1] = color1Obj.g * mixRatio + color2Obj.g * (1 - mixRatio);
      colors[i + 2] = color1Obj.b * mixRatio + color2Obj.b * (1 - mixRatio);
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    
    // Material
    const particlesMaterial = new THREE.PointsMaterial({
      size: particleSize,
      sizeAttenuation: true,
      transparent: true,
      alphaMap: createCircleTexture(),
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      vertexColors: true
    });
    
    // Points
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);
    
    // Create circle texture for particles
    function createCircleTexture() {
      const canvas = document.createElement('canvas');
      canvas.width = 64;
      canvas.height = 64;
      
      const context = canvas.getContext('2d');
      if (!context) return new THREE.Texture();
      
      context.fillStyle = 'white';
      context.beginPath();
      context.arc(32, 32, 28, 0, Math.PI * 2);
      context.fill();
      
      const texture = new THREE.CanvasTexture(canvas);
      texture.needsUpdate = true;
      return texture;
    }
    
    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);
    
    // Mouse movement effect
    const mouse = { x: 0, y: 0 };
    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);
    
    // Animation loop
    const actualRotationSpeed = rotationSpeed;
    const animate = () => {
      requestAnimationFrame(animate);
      
      particles.rotation.x += actualRotationSpeed;
      particles.rotation.y += actualRotationSpeed * 1.5;
      
      // Follow mouse
      particles.rotation.x += (mouse.y * 0.1 - particles.rotation.x) * 0.05;
      particles.rotation.y += (mouse.x * 0.1 - particles.rotation.y) * 0.05;
      
      renderer.render(scene, camera);
    };
    animate();

    setIsInitialized(true);
    
    // Cleanup
    return () => {
      if (containerRef.current && containerRef.current.contains(renderer.domElement)) {
        containerRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      
      // Dispose resources
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      renderer.dispose();
    };
  }, [color1, color2, particleCount, particleSize, rotationSpeed, density, isInitialized]);
  
  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 z-0 overflow-hidden"
      style={{ pointerEvents: 'none' }}
    />
  );
};

export default ThreeBackground;
