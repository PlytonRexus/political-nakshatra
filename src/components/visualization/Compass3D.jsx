// 3D Compass Visualization with Constellation Theme

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Text, Html, Line } from '@react-three/drei';
import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { DoubleSide } from 'three';
import { parties } from '../../data/parties';
import { leaders } from '../../data/leaders';
import { interpretDistance } from '../../utils/scoring';
import { ChevronDown, ChevronUp } from 'lucide-react';

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
function PartyStar({ party, userPosition }) {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);

  // Calculate distance to user
  const dx = userPosition.statism - party.position.statism;
  const dy = userPosition.recognition - party.position.recognition;
  const dz = userPosition.sid - party.position.sid;
  const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);

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

      {/* Distance line when hovered */}
      {hovered && (
        <Line
          points={[
            [party.position.statism, party.position.recognition, party.position.sid],
            [userPosition.statism, userPosition.recognition, userPosition.sid]
          ]}
          color={distance < 0.5 ? '#00FF00' : distance < 1.0 ? '#FFFF00' : '#FF6600'}
          lineWidth={2}
          dashed
          dashScale={20}
          dashSize={0.05}
          gapSize={0.05}
        />
      )}

      {hovered && (
        <Html distanceFactor={3}>
          <div className="bg-gray-900/95 px-3 py-2 rounded text-white text-xs font-semibold whitespace-nowrap pointer-events-none border border-gray-700">
            <div className="font-bold">{party.abbreviation}</div>
            <div className="text-gray-400 text-xs">{party.name}</div>
            <div className="text-gray-500 text-xs mt-1">Distance: {distance.toFixed(3)}</div>
            <div className="text-gray-400 text-xs italic">{interpretDistance(distance, 'party')}</div>
          </div>
        </Html>
      )}
    </group>
  );
}

// Leader Star Component - Octahedron (diamond) shaped markers for individual leaders
function LeaderStar({ leader, userPosition }) {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);

  // Calculate distance to user
  const dx = userPosition.statism - leader.position.statism;
  const dy = userPosition.recognition - leader.position.recognition;
  const dz = userPosition.sid - leader.position.sid;
  const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);

  return (
    <group position={[leader.position.statism, leader.position.recognition, leader.position.sid]}>
      <mesh
        ref={meshRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        {/* Octahedron geometry for diamond shape */}
        <octahedronGeometry args={[0.05, 0]} />
        <meshStandardMaterial
          color={leader.color}
          emissive={leader.color}
          emissiveIntensity={hovered ? 0.7 : 0.4}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>

      {/* Distance line when hovered */}
      {hovered && (
        <Line
          points={[
            [leader.position.statism, leader.position.recognition, leader.position.sid],
            [userPosition.statism, userPosition.recognition, userPosition.sid]
          ]}
          color={distance < 0.5 ? '#00FF00' : distance < 1.0 ? '#FFFF00' : '#FF6600'}
          lineWidth={2}
          dashed
          dashScale={20}
          dashSize={0.05}
          gapSize={0.05}
        />
      )}

      {hovered && (
        <Html distanceFactor={3}>
          <div className="bg-gray-900/95 px-3 py-2 rounded text-white text-xs font-semibold whitespace-nowrap pointer-events-none border border-gray-700">
            <div className="font-bold">{leader.name}</div>
            <div className="text-gray-400 text-xs">{leader.role}</div>
            <div className="text-gray-500 text-xs mt-1">
              {parties.find(p => p.id === leader.partyId)?.abbreviation || leader.partyId.toUpperCase()} • Distance: {distance.toFixed(3)}
            </div>
            <div className="text-gray-400 text-xs italic">{interpretDistance(distance, 'leader')}</div>
          </div>
        </Html>
      )}
    </group>
  );
}

// Political Compass Plane Component - Shows traditional 2D political compass at z=0
function PoliticalCompassPlane({ userPosition, visible }) {
  if (!visible) return null;

  return (
    <group>
      {/* Base plane with Political Compass grid */}
      <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <planeGeometry args={[3, 3]} />
        <meshBasicMaterial
          color="#1a1a2e"
          transparent
          opacity={0.15}
          side={DoubleSide}
        />
      </mesh>

      {/* Grid lines for quadrants */}
      {/* Vertical line (statism = 0) */}
      <Line
        points={[[0, -1.5, 0], [0, 1.5, 0]]}
        color="#666666"
        lineWidth={2}
      />
      {/* Horizontal line (recognition = 0) */}
      <Line
        points={[[-1.5, 0, 0], [1.5, 0, 0]]}
        color="#666666"
        lineWidth={2}
      />

      {/* Quadrant Labels */}
      <Text position={[-0.8, 0.8, 0.01]} fontSize={0.12} color="#4FC3F7">
        Auth Left
      </Text>
      <Text position={[0.8, 0.8, 0.01]} fontSize={0.12} color="#81C784">
        Auth Right
      </Text>
      <Text position={[-0.8, -0.8, 0.01]} fontSize={0.12} color="#E57373">
        Lib Left
      </Text>
      <Text position={[0.8, -0.8, 0.01]} fontSize={0.12} color="#FFB74D">
        Lib Right
      </Text>

      {/* User projection on the 2D plane */}
      <mesh position={[userPosition.statism, userPosition.recognition, 0.02]}>
        <circleGeometry args={[0.08, 32]} />
        <meshBasicMaterial color="#FFD700" opacity={0.8} transparent />
      </mesh>

      {/* Connection line from 3D position to 2D projection */}
      <Line
        points={[
          [userPosition.statism, userPosition.recognition, userPosition.sid],
          [userPosition.statism, userPosition.recognition, 0]
        ]}
        color="#FFD700"
        lineWidth={1}
        dashed
        dashScale={50}
        dashSize={0.1}
        gapSize={0.05}
      />

      {/* Axis labels on the plane */}
      <Text position={[1.7, 0, 0.01]} fontSize={0.1} color="#4FC3F7">
        Economic Right
      </Text>
      <Text position={[-1.7, 0, 0.01]} fontSize={0.1} color="#4FC3F7">
        Economic Left
      </Text>
      <Text position={[0, 1.7, 0.01]} fontSize={0.1} color="#81C784">
        Authoritarian
      </Text>
      <Text position={[0, -1.7, 0.01]} fontSize={0.1} color="#81C784">
        Libertarian
      </Text>

      {/* Note label */}
      <Html position={[0, -1.9, 0]}>
        <div className="bg-gray-900/90 px-2 py-1 rounded text-white text-xs max-w-xs text-center">
          Traditional 2D Political Compass (SID dimension not shown)
        </div>
      </Html>
    </group>
  );
}

// Reference Plane Component - Semi-transparent planes at key positions
function ReferencePlane({ position, color, opacity = 0.03, rotation = [Math.PI / 2, 0, 0] }) {
  return (
    <mesh position={position} rotation={rotation}>
      <planeGeometry args={[3, 3]} />
      <meshBasicMaterial color={color} transparent opacity={opacity} side={DoubleSide} />
    </mesh>
  );
}

// Axis Direction Label Component - Shows direction meaning at axis endpoints
function AxisDirectionLabel({ position, text, color, bg }) {
  return (
    <Html position={position} distanceFactor={5}>
      <div
        className="px-2 py-1 rounded text-xs font-semibold whitespace-nowrap pointer-events-none border"
        style={{
          backgroundColor: bg,
          color: 'white',
          borderColor: color,
          opacity: 0.85
        }}
      >
        {text}
      </div>
    </Html>
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

// Orientation Guide Component - Collapsible overlay explaining axes
function OrientationGuide({ isOpen, toggle }) {
  return (
    <div className="absolute top-6 left-6 z-10">
      <div className="bg-gray-900/95 border border-gray-700 rounded-lg shadow-xl overflow-hidden">
        {/* Header */}
        <button
          onClick={toggle}
          className="w-full flex items-center justify-between px-4 py-2 hover:bg-gray-800/50 transition-colors"
        >
          <span className="text-sm font-semibold text-white">Understanding the 3D Space</span>
          {isOpen ? <ChevronUp size={16} className="text-gray-400" /> : <ChevronDown size={16} className="text-gray-400" />}
        </button>

        {/* Content */}
        {isOpen && (
          <div className="px-4 py-3 space-y-2 text-xs text-gray-300 border-t border-gray-700">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <div className="w-3 h-3 rounded-full bg-blue-400"></div>
                <span className="font-semibold text-blue-400">Statism (X-axis)</span>
              </div>
              <div className="ml-5 text-gray-400">
                <span className="text-blue-300">Right (+):</span> More state control<br/>
                <span className="text-blue-300">Left (−):</span> Less state control
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-1">
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                <span className="font-semibold text-green-400">Recognition (Y-axis)</span>
              </div>
              <div className="ml-5 text-gray-400">
                <span className="text-green-300">Up (+):</span> More group rights<br/>
                <span className="text-green-300">Down (−):</span> Less group rights
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-1">
                <div className="w-3 h-3 rounded-full bg-purple-400"></div>
                <span className="font-semibold text-purple-400">SID (Z-axis)</span>
              </div>
              <div className="ml-5 text-gray-400">
                <span className="text-purple-300">Forward (+):</span> Universalist<br/>
                <span className="text-purple-300">Back (−):</span> Particularist
              </div>
            </div>

            <div className="pt-2 mt-2 border-t border-gray-700">
              <div className="text-yellow-400 font-semibold mb-1">Your Position:</div>
              <div className="text-gray-400">Gold star (glowing)</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Main Compass3D Component
export default function Compass3D({ userPosition, showParties = false, showLeaders = false, showCompass = false }) {
  const [guideOpen, setGuideOpen] = useState(false);

  return (
    <div className="w-full h-full relative">
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

        {/* Reference Planes - Semi-transparent planes at neutral positions */}
        <ReferencePlane position={[0, 0, 0]} color="#4FC3F7" rotation={[0, Math.PI / 2, 0]} />
        <ReferencePlane position={[0, 0, 0]} color="#81C784" rotation={[Math.PI / 2, 0, 0]} />
        <ReferencePlane position={[0, 0, 0]} color="#BA68C8" rotation={[0, 0, 0]} />

        {/* Political Compass Plane (toggle-able) */}
        <PoliticalCompassPlane userPosition={userPosition} visible={showCompass} />

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
          <PartyStar key={party.id} party={party} userPosition={userPosition} />
        ))}

        {/* Leader positions (if enabled) */}
        {showLeaders && leaders.map((leader) => (
          <LeaderStar key={leader.id} leader={leader} userPosition={userPosition} />
        ))}

        {/* Axis Direction Labels */}
        <AxisDirectionLabel position={[1.5, 0, 0]} text="More State Control" color="#4FC3F7" bg="rgba(79, 195, 247, 0.2)" />
        <AxisDirectionLabel position={[-1.5, 0, 0]} text="Less State Control" color="#4FC3F7" bg="rgba(79, 195, 247, 0.2)" />

        <AxisDirectionLabel position={[0, 1.5, 0]} text="More Group Rights" color="#81C784" bg="rgba(129, 199, 132, 0.2)" />
        <AxisDirectionLabel position={[0, -1.5, 0]} text="Less Group Rights" color="#81C784" bg="rgba(129, 199, 132, 0.2)" />

        <AxisDirectionLabel position={[0, 0, 1.5]} text="Universalist" color="#BA68C8" bg="rgba(186, 104, 200, 0.2)" />
        <AxisDirectionLabel position={[0, 0, -1.5]} text="Particularist" color="#BA68C8" bg="rgba(186, 104, 200, 0.2)" />

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

      {/* Orientation Guide Overlay */}
      <OrientationGuide isOpen={guideOpen} toggle={() => setGuideOpen(!guideOpen)} />
    </div>
  );
}
