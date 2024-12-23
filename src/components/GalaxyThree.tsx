'use client'
import React, { useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import {
    Color,
    DirectionalLight,
    // DirectionalLightHelper,
    Mesh,
    Vector3,
} from 'three'
import { OrbitControls } from 'three/examples/jsm/Addons.js'
import { randWithVariation } from '~/utils/random'
// import { useHelper } from '@react-three/drei'
import { useAppSelector } from '~/redux/hooks'
import { BLACK, BLUE, WHITE } from '~/utils/colors'

const GalaxyThree = ({ children }: { children: React.ReactNode }) => {
    const STAR_QUANTITY = 1000
    const CAMERA_POSITION = new Vector3(1000, 1000, 1000)
    const ROTATION_SPEED = 0.1
    const RANDOM_POSITION = 1500
    const lightRef = useRef<DirectionalLight>(null!)
    const { darkmode } = useAppSelector((state) => state.ui)
    const sceneBackgroundColor = darkmode ? new Color(BLACK) : new Color(WHITE)

    const CustomOrbitControl = () => {
        const { camera, gl } = useThree()
        const controls = new OrbitControls(camera, gl.domElement)
        // useHelper(lightRef, DirectionalLightHelper, 1, 'red')

        camera.position.x = CAMERA_POSITION.x
        camera.position.y = CAMERA_POSITION.y
        camera.position.z = CAMERA_POSITION.z
        camera.far = 20

        controls.enableDamping = true
        controls.enableZoom = false
        controls.enablePan = false
        controls.autoRotate = true
        controls.autoRotateSpeed = ROTATION_SPEED

        useFrame(({ camera, scene }) => {
            controls.update()
            scene.background = sceneBackgroundColor
            lightRef.current.position.set(
                camera.position.x,
                camera.position.y,
                camera.position.z
            )
            // console.log(scene)
        })

        return <></>
    }

    const Star = (props: JSX.IntrinsicElements['mesh']) => {
        const meshRef = useRef<Mesh>(null!)

        useFrame(() => {
            meshRef.current.rotation.x += ROTATION_SPEED * 0.05
            meshRef.current.rotation.y += ROTATION_SPEED * 0.05
        })

        return (
            <mesh {...props} ref={meshRef}>
                <sphereGeometry
                    args={[8.961, 8, 8, 0, 6.283185, 0, 3.141592]}
                />
                <meshStandardMaterial
                    color={darkmode ? new Color(WHITE) : new Color(BLUE)}
                />
            </mesh>
        )
    }

    return (
        <div className="h-screen">
            <Canvas
                scene={{
                    background: sceneBackgroundColor,
                }}
            >
                <directionalLight
                    ref={lightRef}
                    castShadow
                    position={CAMERA_POSITION}
                    shadow-mapSize={[1024, 1024]}
                >
                    <orthographicCamera
                        attach="shadow-camera"
                        position={CAMERA_POSITION}
                        args={[-10, 10, 10, -10]}
                    />
                </directionalLight>
                {/* <axesHelper args={[CAMERA_POSITION.z]} /> */}
                <CustomOrbitControl />
                {new Array<undefined>(STAR_QUANTITY)
                    .fill(undefined)
                    .map((noValue, index) => {
                        return (
                            <Star
                                key={index}
                                position={
                                    new Vector3(
                                        randWithVariation(
                                            RANDOM_POSITION * -1,
                                            RANDOM_POSITION * 2,
                                            RANDOM_POSITION
                                        ),
                                        randWithVariation(
                                            RANDOM_POSITION * -1,
                                            RANDOM_POSITION * 2,
                                            RANDOM_POSITION
                                        ),
                                        randWithVariation(
                                            RANDOM_POSITION * -1,
                                            RANDOM_POSITION * 2,
                                            RANDOM_POSITION
                                        )
                                    )
                                }
                            />
                        )
                    })}
            </Canvas>
            <main className="absolute inset-x-0 top-24">{children}</main>
        </div>
    )
}

export default GalaxyThree
