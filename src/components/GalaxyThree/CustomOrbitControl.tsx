import { Color, DirectionalLight } from 'three'

import { useRef, useEffectEvent, useEffect } from 'react'
import { useThree, useFrame } from '@react-three/fiber'
import { OrbitControls } from 'three/examples/jsm/Addons.js'
import { useAppDispatch, useAppSelector } from '~/redux/hooks'
import { BLACK, WHITE } from '~/utils/colors'
import { updateCameraPositions } from '~/redux/reducers/uiReducer'

type CustomOrbitControlProps = {
    lightRef: React.RefObject<DirectionalLight>
    rotationSpeed: number
}

const CustomOrbitControl = (props: CustomOrbitControlProps) => {
    const { camera, gl, scene } = useThree()
    const { lightRef, rotationSpeed } = props
    const isDarkMode = useAppSelector((s) => s.ui.darkmode)
    const cameraPosition = useAppSelector((s) => s.ui.cameraPosition)
    const controlsRef = useRef<OrbitControls | null>(null)
    const dispatch = useAppDispatch()

    const initializeOrbitControlsEvent = useEffectEvent(() => {
        if (!controlsRef.current) {
            controlsRef.current = new OrbitControls(camera, gl.domElement)
            controlsRef.current.enableDamping = true
            controlsRef.current.enableZoom = false
            controlsRef.current.enablePan = false
            controlsRef.current.autoRotate = true
            controlsRef.current.autoRotateSpeed = rotationSpeed

            camera.position.copy(cameraPosition)
            camera.updateMatrixWorld()
        }

        return () => {
            if (controlsRef.current) {
                controlsRef.current.dispose()
                controlsRef.current = null
            }
        }
    })

    const setSceneBackgroundColorEvent = useEffectEvent(() => {
        scene.background = new Color(isDarkMode ? BLACK : WHITE)
    })

    useEffect(() => {
        initializeOrbitControlsEvent()
        setSceneBackgroundColorEvent()

        return () => {
            dispatch(
                updateCameraPositions({
                    x: camera.position.x,
                    y: camera.position.y,
                    z: camera.position.z,
                })
            )
        }
    }, [camera, gl, isDarkMode])

    useFrame(() => {
        if (controlsRef.current) {
            controlsRef.current.update()
        }

        if (lightRef?.current && camera) {
            lightRef.current.position.copy(camera.position)
        }
    })

    return null
}

export default CustomOrbitControl
