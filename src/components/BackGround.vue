<template>
  <div class="stage" ref="stage">
    <div ref="stage"></div>
  </div>
</template>

<script>
import * as THREE from 'three'

export default {

  name: 'backGround',
  data () {
    // === scene ===
    const scene = new THREE.Scene()

    // === renderer ===
    const renderer = new THREE.WebGLRenderer({alpha: true})
    renderer.setSize(window.innerWidth, window.innerHeight - 160)

    // === camera ===
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / (window.innerHeight - 160), 0.1, 1000)
    camera.position.z = 5

    // === light ===
    const light = new THREE.DirectionalLight(0xffffff)
    light.position.set(0, 0, 10)

    // === model ===
    const cubeSize = 2.5
    const geometry = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize)
    const material = new THREE.MeshNormalMaterial({color: 0x00ff00})

    // === cubes ===
    const cube = new THREE.Mesh(geometry, material)
    const cubeVertical = new THREE.Mesh(geometry, material)
    const cubeHorizon = new THREE.Mesh(geometry, material)
    return {
      scene: scene,
      renderer: renderer,
      camera: camera,
      light: light,
      cube: cube,
      cubeVertical: cubeVertical,
      cubeHorizon: cubeHorizon
    }
  },

  created () {
    // === sceneにmodel,light, cameraを追加 ===
    this.scene.add(this.camera)
    this.scene.add(this.light)
    this.scene.add(this.cube)
    this.scene.add(this.cubeVertical)
    this.scene.add(this.cubeHorizon)
    // === 初期位置の設定 ===
    this.cube.position.set(0, 0.5, 0)
    this.cubeVertical.position.set(0, 0.5, 0)
    this.cubeHorizon.position.set(0, 0.5, 0)
    // === 画面全体のクリックイベントを設定 ===
    window.onclick = () => this.zoomCamera()
    window.setTimeout(this.moveCube, 5000)
  },

  mounted () {
    // === DOMを追加, animate ===
    this.$refs.stage.appendChild(this.renderer.domElement)
    this.animate()
  },

  methods: {
    animate () {
      // 再帰により回転動作を繰り返す
      requestAnimationFrame(this.animate)
      this.cube.rotation.z += 0.01
      this.cubeHorizon.rotation.y += 0.01
      this.cubeVertical.rotation.x += 0.01
      /* レンダリングオブジェクトにシーンとカメラを追加してレンダリング開始 */
      this.renderer.render(this.scene, this.camera)
    },
    zoomCamera () {
      // 再帰によりズーム処理を繰り返す
      const requestId = requestAnimationFrame(this.zoomCamera)
      this.camera.position.z -= 0.1

      // カメラの奥行き位置が0になった時点で初期化
      if (this.camera.position.z < 0) {
        this.camera.position.z = 5
        cancelAnimationFrame(requestId)
      }
      this.renderer.render(this.scene, this.camera)
    },
    moveCube () {
      // 再帰により移動処理を繰り返す
      const requestId = requestAnimationFrame(this.moveCube)
      this.cubeHorizon.position.x += 0.01
      this.cubeVertical.position.x -= 0.01

      // キューブ位置が5になった時点処理終了
      if (this.cubeHorizon.position.x > 5 && this.cubeVertical.position.x < -5) {
        cancelAnimationFrame(requestId)
        this.moveMinusCube()
      }
      this.renderer.render(this.scene, this.camera)
    },
    moveMinusCube () {
      // 再帰により移動処理を繰り返す
      const requestId = requestAnimationFrame(this.moveMinusCube)
      this.cubeHorizon.position.x -= 0.01
      this.cubeVertical.position.x += 0.01

      // キューブ位置が-5になった時点処理終了
      if (this.cubeHorizon.position.x < -5 && this.cubeVertical.position.x > 5) {
        cancelAnimationFrame(requestId)
        this.moveCube()
      }
      this.renderer.render(this.scene, this.camera)
    }
  }
}
</script>

<style scoped>
  .stage {
    z-index: -1;
  }
</style>
