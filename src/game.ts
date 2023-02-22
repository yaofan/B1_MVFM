import { bootStrapFestivalDropins } from './festival-mgmt-dropin/bootstrapFestival'
import { initPlanes } from './modules/screens/planeImporter'
import { planeTransforms } from './modules/screens/planes'
import { registerShowEntities } from './modules/showMgmt/showEntities'
import { loadSceneShowSetup } from './modules/showMgmt/showSetup'

export const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: Quaternion.Euler(0, 0, 0),
  scale: new Vector3(1, 1, 1),
})
_scene.addComponentOrReplace(transform)

export let parent = new Entity()
parent.addComponent(
  new Transform({
    position: new Vector3(0, 0, 0),
    rotation: Quaternion.Euler(0, 0, 0),
  })
)
engine.addEntity(parent)
  
// Rocks & Base Ground
const entity = new Entity('entity')
engine.addEntity(entity)
entity.setParent(_scene)
const gltfShape = new GLTFShape('models/main_stage_base.glb')
gltfShape.withCollisions = false
gltfShape.isPointerBlocker = true
gltfShape.visible = true
entity.addComponentOrReplace(gltfShape)
const transform2 = new Transform({   
  position: new Vector3(192/2, 0, 128/2), 
  rotation: new Quaternion(0, 0, 0, 1), 
  scale: new Vector3(1, 1, 1),
})
entity.addComponentOrReplace(transform2)

// Screens

export let main_stage_screen = new Entity()
main_stage_screen.addComponent(new GLTFShape('models/main_stage_screen.glb'))
main_stage_screen.addComponent(
  new Transform({
    position: new Vector3(192/2, 0, 128/2),
    rotation: Quaternion.Euler(0, 0, 0),
  })
)
engine.addEntity(main_stage_screen)
main_stage_screen.setParent(parent)

async function init(){ 
  bootStrapFestivalDropins()
  loadSceneShowSetup()
  registerShowEntities()
  initPlanes(planeTransforms)
}

init()