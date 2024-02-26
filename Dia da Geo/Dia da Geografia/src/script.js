import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as TWEEN from "@tweenjs/tween.js"
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js'

/**
 * Base
 */

// Canvas
const canvas = document.querySelector('canvas.webgl')

/**
 * Loaders
 */
const gltfLoader = new GLTFLoader()
const rgbeLoader = new RGBELoader()
const fontLoader = new FontLoader()

/**
 * Environment map
 */
// HDR (RGBE) equirectangular
rgbeLoader.load('/environmentMaps/2k/lili.hdr', (environmentMap) =>
{
    environmentMap.mapping = THREE.EquirectangularReflectionMapping

    scene.environment = environmentMap
    scene.background = environmentMap
})

/**
 * Textures
 */
const textureLoader = new THREE.TextureLoader()
const matcapTexture = textureLoader.load('/textures/matcaps/7.png')
matcapTexture.colorSpace = THREE.SRGBColorSpace

/**
 * Font
 */
fontLoader.load(
    '/fonts/helvetiker_regular.typeface.json',
    (font) => {
        const textGeometry = new TextGeometry(
            'Dia da Geografia',
            {
                font: font,
                size: 4,
                height: 1.5,
                curveSegments: 12,
                bevelEnabled: true,
                bevelThickness: 0.03,
                bevelSize: 0.02,
                bevelOffset: 0.01,
                bevelSegments: 5
            }
        )
        textGeometry.computeBoundingBox()
        textGeometry.translate(
            -22,
            3,
            -20,
        )
        textGeometry.rotateY(Math.PI/6)

        const material = new THREE.MeshMatcapMaterial({ matcap: matcapTexture})
        const mainText = new THREE.Mesh(textGeometry, material)
        scene.add(mainText)
})

fontLoader.load(
    '/fonts/helvetiker_regular.typeface.json',
    (font) => {
        const textGeometry = new TextGeometry(
            '25 de fevereiro',
            {
                font: font,
                size: 1,
                height: 1,
                curveSegments: 12,
                bevelEnabled: true,
                bevelThickness: 0.03,
                bevelSize: 0.02,
                bevelOffset: 0.01,
                bevelSegments: 5
            }
        )
        textGeometry.computeBoundingBox()
        textGeometry.translate(
            10,
            1,
            -20,
        )
        textGeometry.rotateY(Math.PI/6)

        const material = new THREE.MeshMatcapMaterial({ matcap: matcapTexture})
        const dateText = new THREE.Mesh(textGeometry, material)
        scene.add(dateText)
})


// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */

// Cubes Bottom

// Center
const cubeBCTexture = [
    '/textures/cubes/6/1.jpg',
    '/textures/cubes/6/2.jpg',
    '/textures/cubes/6/3.jpg',
    '/textures/cubes/6/4.jpg',
    '/textures/cubes/6/5.jpg',
    '/textures/cubes/6/6.jpg',
  ].map(pic => {
    return new THREE.MeshBasicMaterial({map: textureLoader.load(pic)});
  });
const cubeBC = new THREE.Mesh(
    new THREE.BoxGeometry(0.5, 0.5, 0.5),
    cubeBCTexture
)
cubeBC.position.y = -1

// South
const cubeBSTexture = [
    '/textures/cubes/6/1.jpg',
    '/textures/cubes/6/2.jpg',
    '/textures/cubes/6/3.jpg',
    '/textures/cubes/6/4.jpg',
    '/textures/cubes/6/5.jpg',
    '/textures/cubes/6/6.jpg',
  ].map(pic => {
    return new THREE.MeshBasicMaterial({map: textureLoader.load(pic)});
  });
const cubeBS = new THREE.Mesh(
    new THREE.BoxGeometry(0.5, 0.5, 0.5),
    cubeBSTexture
)
cubeBS.position.set(0, -1, -1)

// North
const cubeBNTexture = [
    '/textures/cubes/6/1.jpg',
    '/textures/cubes/6/2.jpg',
    '/textures/cubes/6/3.jpg',
    '/textures/cubes/6/4.jpg',
    '/textures/cubes/6/5.jpg',
    '/textures/cubes/6/6.jpg',
  ].map(pic => {
    return new THREE.MeshBasicMaterial({map: textureLoader.load(pic)});
  });
const cubeBN = new THREE.Mesh(
    new THREE.BoxGeometry(0.5, 0.5, 0.5),
    cubeBNTexture
)
cubeBN.position.set(0, -1, 1)

// East
const cubeBETexture = [
    '/textures/cubes/6/1.jpg',
    '/textures/cubes/6/2.jpg',
    '/textures/cubes/6/3.jpg',
    '/textures/cubes/6/4.jpg',
    '/textures/cubes/6/5.jpg',
    '/textures/cubes/6/6.jpg',
  ].map(pic => {
    return new THREE.MeshBasicMaterial({map: textureLoader.load(pic)});
  });
const cubeBE = new THREE.Mesh(
    new THREE.BoxGeometry(0.5, 0.5, 0.5),
    cubeBETexture
)
cubeBE.position.set(1, -1, 0)

// West
const cubeBWTexture = [
    '/textures/cubes/6/1.jpg',
    '/textures/cubes/6/2.jpg',
    '/textures/cubes/6/3.jpg',
    '/textures/cubes/6/4.jpg',
    '/textures/cubes/6/5.jpg',
    '/textures/cubes/6/6.jpg',
  ].map(pic => {
    return new THREE.MeshBasicMaterial({map: textureLoader.load(pic)});
  });
const cubeBW = new THREE.Mesh(
    new THREE.BoxGeometry(0.5, 0.5, 0.5),
    cubeBWTexture
)
cubeBW.position.set(-1, -1, 0)

// Northeast
const cubeBNETexture = [
    '/textures/cubes/6/1.jpg',
    '/textures/cubes/6/2.jpg',
    '/textures/cubes/6/3.jpg',
    '/textures/cubes/6/4.jpg',
    '/textures/cubes/6/5.jpg',
    '/textures/cubes/6/6.jpg',
  ].map(pic => {
    return new THREE.MeshBasicMaterial({map: textureLoader.load(pic)});
  });
const cubeBNE = new THREE.Mesh(
    new THREE.BoxGeometry(0.5, 0.5, 0.5),
    cubeBNETexture
)
cubeBNE.position.set(1, -1, -1)

// Northwest
const cubeBNWTexture = [
    '/textures/cubes/6/1.jpg',
    '/textures/cubes/6/2.jpg',
    '/textures/cubes/6/3.jpg',
    '/textures/cubes/6/4.jpg',
    '/textures/cubes/6/5.jpg',
    '/textures/cubes/6/6.jpg',
  ].map(pic => {
    return new THREE.MeshBasicMaterial({map: textureLoader.load(pic)});
  });
const cubeBNW = new THREE.Mesh(
    new THREE.BoxGeometry(0.5, 0.5, 0.5),
    cubeBNWTexture
)
cubeBNW.position.set(-1, -1, -1)

// Southeast
const cubeBSETexture = [
    '/textures/cubes/6/1.jpg',
    '/textures/cubes/6/2.jpg',
    '/textures/cubes/6/3.jpg',
    '/textures/cubes/6/4.jpg',
    '/textures/cubes/6/5.jpg',
    '/textures/cubes/6/6.jpg',
  ].map(pic => {
    return new THREE.MeshBasicMaterial({map: textureLoader.load(pic)});
  });
const cubeBSE = new THREE.Mesh(
    new THREE.BoxGeometry(0.5, 0.5, 0.5),
    cubeBSETexture
)
cubeBSE.position.set(1, -1, 1)

// Southwest
const cubeBSWTexture = [
    '/textures/cubes/6/1.jpg',
    '/textures/cubes/6/2.jpg',
    '/textures/cubes/6/3.jpg',
    '/textures/cubes/6/4.jpg',
    '/textures/cubes/6/5.jpg',
    '/textures/cubes/6/6.jpg',
  ].map(pic => {
    return new THREE.MeshBasicMaterial({map: textureLoader.load(pic)});
  });
const cubeBSW = new THREE.Mesh(
    new THREE.BoxGeometry(0.5, 0.5, 0.5),
    cubeBSWTexture
)
cubeBSW.position.set(-1, -1, 1)

// Cubes Center

// Center
const cubeCCTexture = [
    '/textures/cubes/6/1.jpg',
    '/textures/cubes/6/2.jpg',
    '/textures/cubes/6/3.jpg',
    '/textures/cubes/6/4.jpg',
    '/textures/cubes/6/5.jpg',
    '/textures/cubes/6/6.jpg',
  ].map(pic => {
    return new THREE.MeshBasicMaterial({map: textureLoader.load(pic)});
  });
const cubeCC = new THREE.Mesh(
    new THREE.BoxGeometry(0.5, 0.5, 0.5),
    cubeCCTexture
)

// South
const cubeCSTexture = [
    '/textures/cubes/6/1.jpg',
    '/textures/cubes/6/2.jpg',
    '/textures/cubes/6/3.jpg',
    '/textures/cubes/6/4.jpg',
    '/textures/cubes/6/5.jpg',
    '/textures/cubes/6/6.jpg',
  ].map(pic => {
    return new THREE.MeshBasicMaterial({map: textureLoader.load(pic)});
  });
const cubeCS = new THREE.Mesh(
    new THREE.BoxGeometry(0.5, 0.5, 0.5),
    cubeCSTexture
)
cubeCS.position.set(0, 0, -1)

// North
const cubeCNTexture = [
    '/textures/cubes/6/1.jpg',
    '/textures/cubes/6/2.jpg',
    '/textures/cubes/6/3.jpg',
    '/textures/cubes/6/4.jpg',
    '/textures/cubes/6/5.jpg',
    '/textures/cubes/6/6.jpg',
  ].map(pic => {
    return new THREE.MeshBasicMaterial({map: textureLoader.load(pic)});
  });
const cubeCN = new THREE.Mesh(
    new THREE.BoxGeometry(0.5, 0.5, 0.5),
    cubeCNTexture
)
cubeCN.position.set(0, 0, 1)

// East
const cubeCETexture = [
    '/textures/cubes/6/1.jpg',
    '/textures/cubes/6/2.jpg',
    '/textures/cubes/6/3.jpg',
    '/textures/cubes/6/4.jpg',
    '/textures/cubes/6/5.jpg',
    '/textures/cubes/6/6.jpg',
  ].map(pic => {
    return new THREE.MeshBasicMaterial({map: textureLoader.load(pic)});
  });
const cubeCE = new THREE.Mesh(
    new THREE.BoxGeometry(0.5, 0.5, 0.5),
    cubeCETexture
)
cubeCE.position.set(1, 0, 0)

// West
const cubeCWTexture = [
    '/textures/cubes/6/1.jpg',
    '/textures/cubes/6/2.jpg',
    '/textures/cubes/6/3.jpg',
    '/textures/cubes/6/4.jpg',
    '/textures/cubes/6/5.jpg',
    '/textures/cubes/6/6.jpg',
  ].map(pic => {
    return new THREE.MeshBasicMaterial({map: textureLoader.load(pic)});
  });
const cubeCW = new THREE.Mesh(
    new THREE.BoxGeometry(0.5, 0.5, 0.5),
    cubeCWTexture
)
cubeCW.position.set(-1, 0, 0)

// Northeast
const cubeCNETexture = [
    '/textures/cubes/6/1.jpg',
    '/textures/cubes/6/2.jpg',
    '/textures/cubes/6/3.jpg',
    '/textures/cubes/6/4.jpg',
    '/textures/cubes/6/5.jpg',
    '/textures/cubes/6/6.jpg',
  ].map(pic => {
    return new THREE.MeshBasicMaterial({map: textureLoader.load(pic)});
  });
const cubeCNE = new THREE.Mesh(
    new THREE.BoxGeometry(0.5, 0.5, 0.5),
    cubeCNETexture
)
cubeCNE.position.set(1, 0, -1)

// Northwest
const cubeCNWTexture = [
    '/textures/cubes/6/1.jpg',
    '/textures/cubes/6/2.jpg',
    '/textures/cubes/6/3.jpg',
    '/textures/cubes/6/4.jpg',
    '/textures/cubes/6/5.jpg',
    '/textures/cubes/6/6.jpg',
  ].map(pic => {
    return new THREE.MeshBasicMaterial({map: textureLoader.load(pic)});
  });
const cubeCNW = new THREE.Mesh(
    new THREE.BoxGeometry(0.5, 0.5, 0.5),
    cubeCNWTexture
)
cubeCNW.position.set(-1, 0, -1)
// Southeast
const cubeCSETexture = [
    '/textures/cubes/6/1.jpg',
    '/textures/cubes/6/2.jpg',
    '/textures/cubes/6/3.jpg',
    '/textures/cubes/6/4.jpg',
    '/textures/cubes/6/5.jpg',
    '/textures/cubes/6/6.jpg',
  ].map(pic => {
    return new THREE.MeshBasicMaterial({map: textureLoader.load(pic)});
  });
const cubeCSE = new THREE.Mesh(
    new THREE.BoxGeometry(0.5, 0.5, 0.5),
    cubeCSETexture
)
cubeCSE.position.set(1, 0, 1)

// Southwest
const cubeCSWTexture = [
    '/textures/cubes/6/1.jpg',
    '/textures/cubes/6/2.jpg',
    '/textures/cubes/6/3.jpg',
    '/textures/cubes/6/4.jpg',
    '/textures/cubes/6/5.jpg',
    '/textures/cubes/6/6.jpg',
  ].map(pic => {
    return new THREE.MeshBasicMaterial({map: textureLoader.load(pic)});
  });

const cubeCSW = new THREE.Mesh(
    new THREE.BoxGeometry(0.5, 0.5, 0.5),
    cubeCSWTexture
)
cubeCSW.position.set(-1, 0, 1)

// Cubes Top

// Center
const cubeTCTexture = [
    '/textures/cubes/6/1.jpg',
    '/textures/cubes/6/2.jpg',
    '/textures/cubes/6/3.jpg',
    '/textures/cubes/6/4.jpg',
    '/textures/cubes/6/5.jpg',
    '/textures/cubes/6/6.jpg',
  ].map(pic => {
    return new THREE.MeshBasicMaterial({map: textureLoader.load(pic)});
  });

const cubeTC = new THREE.Mesh(
    new THREE.BoxGeometry(0.5, 0.5, 0.5),
    cubeTCTexture
)
cubeTC.position.y = 1

// South
const cubeTSTexture = [
    '/textures/cubes/6/1.jpg',
    '/textures/cubes/6/2.jpg',
    '/textures/cubes/6/3.jpg',
    '/textures/cubes/6/4.jpg',
    '/textures/cubes/6/5.jpg',
    '/textures/cubes/6/6.jpg',
  ].map(pic => {
    return new THREE.MeshBasicMaterial({map: textureLoader.load(pic)});
  });

const cubeTS = new THREE.Mesh(
    new THREE.BoxGeometry(0.5, 0.5, 0.5),
    cubeTSTexture
)
cubeTS.position.set(0, 1, -1)

// North
const cubeTNTexture = [
    '/textures/cubes/7/1.jpg',
    '/textures/cubes/7/2.jpg',
    '/textures/cubes/7/3.jpg',
    '/textures/cubes/7/4.jpg',
    '/textures/cubes/7/5.jpg',
    '/textures/cubes/7/6.jpg',
  ].map(pic => {
    return new THREE.MeshBasicMaterial({map: textureLoader.load(pic)});
  });

const cubeTN = new THREE.Mesh(
    new THREE.BoxGeometry(0.5, 0.5, 0.5),
    cubeTNTexture
)
cubeTN.position.set(0, 1, 1)

// East
const cubeTETexture = [
    '/textures/cubes/6/1.jpg',
    '/textures/cubes/6/2.jpg',
    '/textures/cubes/6/3.jpg',
    '/textures/cubes/6/4.jpg',
    '/textures/cubes/6/5.jpg',
    '/textures/cubes/6/6.jpg',
  ].map(pic => {
    return new THREE.MeshBasicMaterial({map: textureLoader.load(pic)});
  });

const cubeTE = new THREE.Mesh(
    new THREE.BoxGeometry(0.5, 0.5, 0.5),
    cubeTETexture
)
cubeTE.position.set(1, 1, 0)

// West
const cubeTWTexture = [
    '/textures/cubes/5/1.jpg',
    '/textures/cubes/5/2.jpg',
    '/textures/cubes/5/3.jpg',
    '/textures/cubes/5/4.jpg',
    '/textures/cubes/5/5.jpg',
    '/textures/cubes/5/6.jpg',
  ].map(pic => {
    return new THREE.MeshBasicMaterial({map: textureLoader.load(pic)});
  });

const cubeTW = new THREE.Mesh(
    new THREE.BoxGeometry(0.5, 0.5, 0.5),
    cubeTWTexture
)
cubeTW.position.set(-1, 1, 0)

// Northeast
const cubeTNETexture = [
    '/textures/cubes/4/3.jpg',
    '/textures/cubes/4/2.jpg',
    '/textures/cubes/4/1.jpg',
    '/textures/cubes/4/4.jpg',
    '/textures/cubes/4/7.jpg',
    '/textures/cubes/4/6.jpg',
  ].map(pic => {
    return new THREE.MeshBasicMaterial({map: textureLoader.load(pic)});
  });
const cubeTNE = new THREE.Mesh(
    new THREE.BoxGeometry(0.5, 0.5, 0.5),
    cubeTNETexture
)
cubeTNE.position.set(1, 1, -1)

// Northwest
const cubeTNWTexture = [
    '/textures/cubes/3/1.jpg',
    '/textures/cubes/3/2.jpg',
    '/textures/cubes/3/3.jpg',
    '/textures/cubes/3/4.jpg',
    '/textures/cubes/3/5.jpg',
    '/textures/cubes/1/7.jpg',
  ].map(pic => {
    return new THREE.MeshBasicMaterial({map: textureLoader.load(pic)});
  });

const cubeTNW = new THREE.Mesh(
    new THREE.BoxGeometry(0.5, 0.5, 0.5),
    cubeTNWTexture
)
cubeTNW.position.set(-1, 1, -1)

// Southeast
const cubeTSETexture = [
    '/textures/cubes/1/1.jpg',
    '/textures/cubes/1/2.jpg',
    '/textures/cubes/1/3.jpg',
    '/textures/cubes/1/4.jpg',
    '/textures/cubes/1/5.jpg',
    '/textures/cubes/1/6.jpg',
  ].map(pic => {
    return new THREE.MeshBasicMaterial({map: textureLoader.load(pic)});
  });

const cubeTSE = new THREE.Mesh(
    new THREE.BoxGeometry(0.5, 0.5, 0.5),
    cubeTSETexture
)
cubeTSE.position.set(1, 1, 1)

// Southwest
const cubeTSWTexture = [
    '/textures/cubes/2/1.jpg',
    '/textures/cubes/2/2.jpg',
    '/textures/cubes/2/3.jpg',
    '/textures/cubes/2/4.jpg',
    '/textures/cubes/1/5.jpg',
    '/textures/cubes/1/6.jpg',
  ].map(pic => {
    return new THREE.MeshBasicMaterial({map: textureLoader.load(pic)});
  });

// gltfLoader.load('/textures/cubes/1/cubebin.glb', (gltf) =>
// {
//   scene.add(gltf.scene.children[0])
// })

const cubeTSW = new THREE.Mesh(
    new THREE.BoxGeometry(0.5, 0.5, 0.5),
    cubeTSWTexture
)
cubeTSW.position.set(-1, 1, 1)

const cubeGroup = new THREE.Group()

cubeGroup.add(
    cubeBC, cubeBS, cubeBN, cubeBE, cubeBW, cubeBNE, cubeBNW, cubeBSE, cubeBSW,
    cubeCC, cubeCS, cubeCN, cubeCE, cubeCW, cubeCNE, cubeCNW, cubeCSE, cubeCSW,
    cubeTC, cubeTS, cubeTN, cubeTE, cubeTW, cubeTNE, cubeTNW, cubeTSE, cubeTSW)

scene.add(cubeGroup)

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

/**
 * Raycaster
 */
const raycaster = new THREE.Raycaster()

/**
 * Event Listeners
 */

// Cursor
const mouse = new THREE.Vector2()

window.addEventListener('mousemove', (_event) => {
    mouse.x = _event.clientX / sizes.width * 2 - 1
    mouse.y = - (_event.clientY / sizes.height * 2 - 1)
})

window.addEventListener('click', () => {
    if (currentIntersect && !focusCube) {
        scatter(currentIntersect.object)
    }
});


// Keyboard

// When pressing ESC (27) the event is triggered
window.addEventListener('keydown', (event) => {
    if (event.keyCode === 27 && focusCube) {
        deselect()
        trigger = 0
    }
})


// Resize
window.addEventListener('resize', () => {
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 2.25
camera.position.y = 1.5
camera.position.z = 3.5
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true
controls.maxDistance = 20

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

// Shadows
renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFSoftShadowMap

/**
 * Animate
 */
const clock = new THREE.Clock()

let currentIntersect = null

let focusCube = null

let pushOut = false

let cubeReturn = false

let cameraFocus = false

let axis = new THREE.Vector3()

const objectsToTest =
    [
        cubeBC, cubeBS, cubeBN, cubeBE, cubeBW, cubeBNE, cubeBNW, cubeBSE, cubeBSW,
        cubeCC, cubeCS, cubeCN, cubeCE, cubeCW, cubeCNE, cubeCNW, cubeCSE, cubeCSW,
        cubeTC, cubeTS, cubeTN, cubeTE, cubeTW, cubeTNE, cubeTNW, cubeTSE, cubeTSW
    ]

// variable to count the ticks to stop the cube spreading
let trigger = 0

let count = 0

let cubeReturnPosition = new Array(26).fill(false)

// Tweens


let tweenPan = () => {
    new TWEEN.Tween(controls.target).to(
        {
            x: focusCube.position.x,
            y: focusCube.position.y,
            z: focusCube.position.z
        },
        1000
    ).easing(TWEEN.Easing.Exponential.In).start()
}

let tweenDepan = () => {
    new TWEEN.Tween(controls.target).to(
        {
            x: cubeGroup.position.x,
            y: cubeGroup.position.y,
            z: cubeGroup.position.z
        },
        1000
    ).easing(TWEEN.Easing.Exponential.In).start()
}

let tweenZoom = () => {
    new TWEEN.Tween(camera.position).to(
        {
            x: focusCube.position.x,
            y: focusCube.position.y,
            z: focusCube.position.z - 0.75,
        },
        1000
    ).easing(TWEEN.Easing.Linear.None).start()
}

let tweenDezoom = () => {
    new TWEEN.Tween(camera.position).to(
        {
            x: controls.position0.x,
            y: controls.position0.y,
            z: controls.position0.z,
        },
        1000
    ).easing(TWEEN.Easing.Linear.None).start()
}



// Cube selection

let scatter = (cube) => {
    pushOut = true
    focusCube = cube
    cameraFocus = true
    selectCube(focusCube)
    tweenPan()
}

let selectCube = (cube) => {
    // Remove selected cube from group
    cubeGroup.remove(cube)

    // Backup of all cubes excepted the selected one
    cubeBackup()

    // Add the selected cube to the scene
    scene.add(cube)

    // Save camera current settings before zooming in on selected cube
    controls.saveState()

    // Zoom in on cube
    tweenZoom()

    // Turn non-selected cubes invisible after delay
    setTimeout(() => {
        cubeGroup.visible = false
    }, 1000)
}

let cubeBackup = () => {
    for (const each of cubeGroup.children) {
        each.userData['backup'] = each.clone()
    }
}

let compare = (v1, v2) => {
    return (Math.abs(v1.x - v2.x) <= 0.1) && (Math.abs(v1.y - v2.y) <= 0.1) && (Math.abs(v1.z - v2.z) <= 0.1)
}

// Back to main scene

let deselect = () => {
    pushOut = false
    cubeReturn = true

    tweenDezoom()

    tweenDepan()

    // Turn non-selected cubes visible after delay
    setTimeout(() => {
        cubeGroup.visible = true
    }, 500)
}

const tick = () => {
    const elapsedTime = clock.getElapsedTime()

    // Update objects

    if (pushOut) {
        trigger += 1

        for (const each of cubeGroup.children) {
            axis = axis.subVectors(each.position, focusCube.position).normalize()
            each.translateOnAxis(axis, 0.1)
        }

        if (trigger > 360) {
            pushOut = false
            trigger = 0
        }

    } else if (cubeReturn) {
        let i = 0
        for (const each of cubeGroup.children) {
            if (each !== focusCube) {
                const vectorToTravel = axis.subVectors(each.userData['backup'].position, each.position)
                axis = vectorToTravel.normalize()
                each.translateOnAxis(axis, 0.2)

                if (compare(each.position, each.userData['backup'].position) && !cubeReturnPosition[i]) {
                    cubeReturnPosition[i] = true
                    each.position.set(each.userData['backup'].position.x, each.userData['backup'].position.y, each.userData['backup'].position.z)
                    count += 1
                }

                if (count === 26) {
                    count = 0
                    cubeReturnPosition.fill(false)
                    cubeReturn = false
                    scene.remove(focusCube)
                    cubeGroup.add(focusCube)
                    focusCube = null
                    break
                }
            }
            i++
        }
    }

    // Cast a ray
    raycaster.setFromCamera(mouse, camera)

    const intersects = raycaster.intersectObjects(objectsToTest)

    for (const object of objectsToTest) {
        //object.material.color.set('#ffffff')
        object.scale.set(1, 1, 1)
    }

    if (intersects.length && !focusCube) {
        // intersects[0].object.material.color.set('#00ff00')
        intersects[0].object.scale.set(1.25, 1.25, 1.25)
    }

    if (intersects.length) {
        if (currentIntersect == null) {
            console.log('mouse enter')
        }
        currentIntersect = intersects[0]
    } else {
        if (currentIntersect) {
            console.log('mouse leave')
        }
        currentIntersect = null
    }

    // Update controls
    controls.update()

    TWEEN.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()