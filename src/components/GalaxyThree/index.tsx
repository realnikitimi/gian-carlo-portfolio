import { useRef } from 'react'
import { Canvas, RootState } from '@react-three/fiber'
import { Color, DirectionalLight } from 'three'

import CustomOrbitControl from '~/components/GalaxyThree/CustomOrbitControl'
import Star from '~/components/GalaxyThree/Star'

import { useAppSelector } from '~/redux/hooks'
import { BLACK, WHITE } from '~/utils/colors'
import { ROTATION_SPEED } from '~/utils/threejsContants'

const GalaxyThree = () => {
    const lightRef = useRef<DirectionalLight>(null!)
    const isDarkMode = useAppSelector((state) => state.ui.darkmode)
    const cameraPositionRecord = useAppSelector(
        (state) => state.ui.cameraPosition
    )
    const cameraPosition = Object.values(cameraPositionRecord) as [
        number,
        number,
        number,
    ]
    const starPositions = useAppSelector((state) => state.ui.starPositions)

    function handleCanvasOnCreate({ gl, camera, scene }: RootState) {
        scene.background = new Color(isDarkMode ? BLACK : WHITE)
        camera.far = 2000
        camera.updateProjectionMatrix()

        const handleResize = () => {
            gl.setSize(window.innerWidth, window.innerHeight)
            camera.updateProjectionMatrix()
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }

    return (
        <div className="fixed inset-0">
            <Canvas
                className="h-full w-full"
                camera={{ position: cameraPosition, far: 2000 }}
                onCreated={handleCanvasOnCreate}
            >
                <directionalLight
                    ref={lightRef}
                    castShadow
                    position={cameraPosition}
                    shadow-mapSize={[1024, 1024]}
                />
                <CustomOrbitControl
                    lightRef={lightRef}
                    rotationSpeed={ROTATION_SPEED}
                />
                {starPositions.map((position, index) => (
                    <Star
                        key={index}
                        rotationSpeed={ROTATION_SPEED}
                        meshProps={{
                            position,
                        }}
                    />
                ))}
            </Canvas>
        </div>
    )
}

export default GalaxyThree
