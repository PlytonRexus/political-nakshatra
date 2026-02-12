// 3D Compass Visualization with Constellation Theme

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Text, Html } from '@react-three/drei';
import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { parties } from '../../data/parties';

// User Star Component - Glowing gold star
function UserStar({ position }) {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      // Pulsing animation
      const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.1;
      meshRef.current.scale.setScalar(scale);
    }
  });

  return (
    <group position={[position.statism, position.recognition, position.sid]}>
      <mesh ref={meshRef}>
        <sphereGeometry args={[0.12, 32, 32]} />
        <meshStandardMaterial
          color="#FFD700"
          emissive="#FFD700"
          emissiveIntensity={0.8}
          metalness={0.5}
          roughness={0.2}
        />
      </mesh>
      <pointLight color="#FFD700" intensity={1.5} distance={2} decay={2} />

      {/* Label */}
      <Html distanceFactor={3}>
        <div className="bg-gray-900/90 px-3 py-1 rounded text-white text-sm font-semibold whitespace-nowrap pointer-events-none">
          You
        </div>
      </Html>
    </group>
  );
}

// Party Star Component - Smaller colored stars for parties
function PartyStar({ party }) {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);

  return (
    <group position={[party.position.statism, party.position.recognition, party.position.sid]}>
      <mesh
        ref={meshRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <sphereGeometry args={[0.06, 16, 16]} />
        <meshStandardMaterial
          color={party.color}
          emissive={party.color}
          emissiveIntensity={hovered ? 0.6 : 0.3}
        />
      </mesh>

      {hovered && (
        <Html distanceFactor={3}>
          <div className="bg-gray-900/95 px-3 py-2 rounded text-white text-xs font-semibold whitespace-nowrap pointer-events-none border border-gray-700">
            <div className="font-bold">{party.abbreviation}</div>
            <div className="text-gray-400 text-xs">{party.name}</div>
          </div>
        </Html>
      )}
    </group>
  );
}

// Axis Line Component
function Axis({ start, end, color, label, labelPosition }) {
  const points = [start, end];

  return (
    <group>
      {/* Line */}
      <line>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={2}
            array={new Float32Array([...start, ...end])}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color={color} linewidth={2} />
      </line>

      {/* Axis Label */}
      <Text
        position={labelPosition}
        fontSize={0.15}
        color={color}
        anchorX="center"
        anchorY="middle"
        font="/fonts/Inter-Bold.woff"
        outlineWidth={0.02}
        outlineColor="#000000"
      >
        {label}
      </Text>

      {/* Tick marks at -1, 0, 1 */}
      {[-1, 0, 1].map((tick) => {
        const dir = [
          end[0] - start[0],
          end[1] - start[1],
          end[2] - start[2]
        ];
        const len = Math.sqrt(dir[0]**2 + dir[1]**2 + dir[2]**2);
        const norm = dir.map(d => d / len);
        const pos = [
          start[0] + norm[0] * (tick + 1),
          start[1] + norm[1] * (tick + 1),
          start[2] + norm[2] * (tick + 1)
        ];

        return (
          <mesh key={tick} position={pos}>
            <sphereGeometry args={[0.03, 8, 8]} />
            <meshBasicMaterial color={color} opacity={0.5} transparent />
          </mesh>
        );
      })}
    </group>
  );
}

// Grid Helper - subtle grid at origin
function GridPlane() {
  return (
    <gridHelper args={[4, 8, '#333333', '#222222']} rotation={[0, 0, 0]} />
  );
}

// Main Compass3D Component
export default function Compass3D({ userPosition, showParties = false }) {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [3.5, 3.5, 3.5], fov: 50 }}
        style={{ background: '#0a0a1a' }}
      >
        {/* Background color */}
        <color attach="background" args={['#0a0a1a']} />

        {/* Lighting */}
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.5} />
        <pointLight position={[-10, -10, -10]} intensity={0.3} />

        {/* Starfield background */}
        <Stars
          radius={100}
          depth={50}
          count={3000}
          factor={4}
          saturation={0}
          fade
          speed={0.5}
        />

        {/* Grid at origin */}
        <GridPlane />

        {/* Three Axes */}
        <Axis
          start={[-1.5, 0, 0]}
          end={[1.5, 0, 0]}
          color="#4FC3F7"
          label="Statism"
          labelPosition={[1.8, 0, 0]}
        />
        <Axis
          start={[0, -1.5, 0]}
          end={[0, 1.5, 0]}
          color="#81C784"
          label="Recognition"
          labelPosition={[0, 1.8, 0]}
        />
        <Axis
          start={[0, 0, -1.5]}
          end={[0, 0, 1.5]}
          color="#BA68C8"
          label="SID"
          labelPosition={[0, 0, 1.8]}
        />

        {/* Origin point */}
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[0.04, 16, 16]} />
          <meshBasicMaterial color="#ffffff" />
        </mesh>

        {/* User position star */}
        <UserStar position={userPosition} />

        {/* Party positions (if enabled) */}
        {showParties && parties.map((party) => (
          <PartyStar key={party.id} party={party} />
        ))}

        {/* Controls */}
        <OrbitControls
          enableDamping
          dampingFactor={0.05}
          rotateSpeed={0.5}
          zoomSpeed={0.8}
          minDistance={2}
          maxDistance={8}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
}
