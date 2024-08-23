import { OrbitControls, useGLTF, Float } from '@react-three/drei'
import Lights from './Lights'
import Acoustic from './Instruments/acoustic'
import Electric from './Instruments/electric'

export default function Experience()
{

    return <>

        <OrbitControls makeDefault />

        <Lights />

        <Acoustic />

        <Electric />

    </>
}