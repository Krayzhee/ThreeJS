import { useGLTF, Float } from "@react-three/drei"

export default function Acoustic(){    
    const acoustic = useGLTF('./acoustic-guitar.gltf')

    return <>
        <Float>
            <primitive object={ acoustic.scene } scale={ 3 } position-x={1}/>
        </Float>
    </>
}