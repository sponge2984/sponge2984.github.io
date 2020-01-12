let renderer, scene, camera
let cameraControl, stats

// �W�O�Ȫ���
class Creeper {
  constructor() {
    // �ŧi�Y�B����B�}�X����j�p
    const headGeo = new THREE.BoxGeometry(4, 4, 4)
    const bodyGeo = new THREE.BoxGeometry(4, 8, 2)
    const footGeo = new THREE.BoxGeometry(2, 3, 2)

    // �������]�����
    const creeperMat = new THREE.MeshPhongMaterial({ color: 0x00ff00 })

    // �Y
    this.head = new THREE.Mesh(headGeo, creeperMat)
    this.head.position.set(0, 6, 0)

    // ����
    this.body = new THREE.Mesh(bodyGeo, creeperMat)
    this.body.position.set(0, 0, 0)

    // �|���}
    this.foot1 = new THREE.Mesh(footGeo, creeperMat)
    this.foot1.position.set(-1, -5.5, 2)
    this.foot2 = this.foot1.clone() // �ѤU�T���}���ƻs�Ĥ@���� Mesh
    this.foot2.position.set(-1, -5.5, -2)
    this.foot3 = this.foot1.clone()
    this.foot3.position.set(1, -5.5, 2)
    this.foot4 = this.foot1.clone()
    this.foot4.position.set(1, -5.5, -2)

    // �N�|���}�զX���@�� group
    this.feet = new THREE.Group()
    this.feet.add(this.foot1)
    this.feet.add(this.foot2)
    this.feet.add(this.foot3)
    this.feet.add(this.foot4)

    // �N�Y�B����B�}�զX���@�� group
    this.creeper = new THREE.Group()
    this.creeper.add(this.head)
    this.creeper.add(this.body)
    this.creeper.add(this.feet)
  }
}

// �ͦ��W�O�Ȩå[�����
function createCreeper() {
  const creeperObj = new Creeper()
  scene.add(creeperObj.creeper)
}

function initStats() {
  const stats = new Stats()
  stats.setMode(0)
  document.getElementById('stats').appendChild(stats.domElement)
  return stats
}

// �e����l��
function init() {
  scene = new THREE.Scene()

  // �۾��]�w
  camera = new THREE.PerspectiveCamera(
    60,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  )
  camera.position.set(30, 30, 30)
  camera.lookAt(scene.position)

  // �T�b�y�л��U
  let axes = new THREE.AxesHelper(20)
  scene.add(axes)

  stats = initStats()

  // ��V���]�w
  renderer = new THREE.WebGLRenderer()
  renderer.setSize(window.innerWidth, window.innerHeight)

  // �إ� OrbitControls
  cameraControl = new THREE.OrbitControls(camera, renderer.domElement)
  cameraControl.enableDamping = true // �ҥΪ����ĪG
  cameraControl.dampingFactor = 0.25 // �����t��
  // cameraControl.autoRotate = true // �ҥΦ۰ʱ���
	
  // ²�檺�a�O
  const planeGeometry = new THREE.PlaneGeometry(60, 60)
  const planeMaterial = new THREE.MeshLambertMaterial({ color: 0xffffff })
  let plane = new THREE.Mesh(planeGeometry, planeMaterial)
  plane.rotation.x = -0.5 * Math.PI
  plane.position.set(0, -7, 0)
  scene.add(plane)

  // ���ͭW�O�Ȫ���å[�����
  createCreeper()
	
  // ²�檺 spotlight �ӫG����
  let spotLight = new THREE.SpotLight(0xffffff)
  spotLight.position.set(-10, 40, 30)
  scene.add(spotLight)
  // let spotHelper = new THREE.SpotLightHelper(spotLight)
  // scene.add(spotHelper)

  // �N��V�X�Ӫ��e���������W�� DOM
  document.body.appendChild(renderer.domElement)
}

function render() {
  stats.update()
  cameraControl.update()
  requestAnimationFrame(render)
  renderer.render(scene, camera)
}

window.addEventListener('resize', function() {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
})

init()
render()