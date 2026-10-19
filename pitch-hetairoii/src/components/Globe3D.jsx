import { useEffect, useRef } from 'react'
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  SphereGeometry,
  MeshBasicMaterial,
  Mesh,
} from 'three'

const Globe3D = ({
  size = 200, // Tamaño del contenedor
  color = 0x808080, // Color del wireframe
  sphereSize = 7, // Radio de la esfera
  paused = false, // Pausa la animación (fuera de pantalla)
}) => {
  const mountRef = useRef(null)
  const pausedRef = useRef(paused)

  useEffect(() => {
    pausedRef.current = paused
  }, [paused])

  useEffect(() => {
    const scene = new Scene()
    const camera = new PerspectiveCamera(75, 1, 0.1, 1000)
    camera.position.z = 25

    const renderer = new WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(size, size)
    const currentMount = mountRef.current
    currentMount.appendChild(renderer.domElement)

    const geometry = new SphereGeometry(sphereSize, 24, 24)
    const material = new MeshBasicMaterial({ color, wireframe: true, transparent: true, opacity: 0.6 })
    const sphere = new Mesh(geometry, material)
    scene.add(sphere)

    let animationId
    const animate = () => {
      animationId = requestAnimationFrame(animate)
      if (pausedRef.current) return
      sphere.rotation.x += 0.002
      sphere.rotation.y += 0.005
      renderer.render(scene, camera)
    }
    animate()

    return () => {
      cancelAnimationFrame(animationId)
      currentMount.removeChild(renderer.domElement)
      geometry.dispose()
      material.dispose()
      renderer.dispose()
    }
  }, [size, color, sphereSize])

  return (
    <div
      ref={mountRef}
      aria-hidden="true"
      style={{ width: size, height: size, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    />
  )
}

export default Globe3D
