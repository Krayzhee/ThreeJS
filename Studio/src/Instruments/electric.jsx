import { useGLTF, Float } from "@react-three/drei"

export default function Electric(){    
    const electric = useGLTF('./electric-guitar.gltf')

    return <>
        <Float>
            <primitive object={ electric.scene } scale={ 3 }/>
        </Float>
    </>
}