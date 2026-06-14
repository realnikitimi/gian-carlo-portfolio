import { useFrame } from '@react-three/fiber'
import { useRef, type JSX } from 'react'
import { Mesh } from 'three'
import { useAppSelector } from '~/redux/hooks'
import { WHITE, BLUE } from '~/utils/colors'

type StarProps = {
    rotationSpeed: number
    meshProps: JSX.IntrinsicElements['mesh']
}

const Star = (props: StarProps) => {
    const meshRef = useRef<Mesh>(null)
    const isDarkMode = useAppSelector((s) => s.ui.darkmode)
    const { rotationSpeed, meshProps } = props

    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.rotation.x += rotationSpeed * 0.05
            meshRef.current.rotation.y += rotationSpeed * 0.05
        }
    })

    return (
        <mesh {...meshProps} ref={meshRef}>
            <sphereGeometry args={[8.961, 8, 8]} />
            <meshStandardMaterial color={isDarkMode ? WHITE : BLUE} />
        </mesh>
    )
}

export default Star
