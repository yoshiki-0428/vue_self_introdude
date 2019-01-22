<template lang="pug">
  .stage(ref='stage')
    div(ref='stage')
</template>

<script>
import * as THREE from 'three'

export default {
  name: 'backGround',
  data () {
    return {
      scene: this.scene,
      renderer: this.renderer,
      camera: this.camera,
      light: this.light,
      cube: this.cube,
      cubeVertical: this.cubeVertical,
      cubeHorizon: this.cubeHorizon
    }
  },

  created () {
    this.initThree()
    this.setThree()
    // === 画面全体のクリックイベントを設定 ===
    window.onclick = () => this.zoomCamera()
    window.setTimeout(this.moveCube, 5000)
    // === リサイズ対応 ===
    window.addEventListener('resize', this.onResize)
  },

  mounted () {
    // === DOMを追加, animate ===
    this.$refs.stage.appendChild(this.renderer.domElement)
    this.animate()
  },

  methods: {
    initThree () {
      // === scene ===
      this.scene = new THREE.Scene()

      // === renderer ===
      this.renderer = new THREE.WebGLRenderer({alpha: true})
      this.renderer.setSize(window.innerWidth, window.innerHeight - 160)

      // === camera ===
      this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / (window.innerHeight - 160), 0.1, 1000)
      this.camera.position.z = 5

      // === light ===
      this.light = new THREE.DirectionalLight(0xffffff)
      this.light.position.set(0, 0, 10)

      // === model ===
      const cubeSize = 2.5
      const geometry = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize)
      this.material = new THREE.MeshNormalMaterial({color: 0x00ff00})

      // === cubes ===
      this.cube = new THREE.Mesh(geometry, this.material)
      this.cubeVertical = new THREE.Mesh(geometry, this.material)
      this.cubeHorizon = new THREE.Mesh(geometry, this.material)
    },
    setThree () {
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
    },
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

      // それぞれのキューブ位置が端に行った時点で処理終了
      if (this.cubeHorizon.position.x > 5 && this.cubeVertical.position.x < -5) {
        cancelAnimationFrame(requestId)
        this.moveCube2()
      }
      this.renderer.render(this.scene, this.camera)
    },
    moveCube2 () {
      // 再帰により移動処理を繰り返す
      const requestId = requestAnimationFrame(this.moveCube2)
      this.cubeHorizon.position.x -= 0.01
      this.cubeVertical.position.x += 0.01

      // それぞれのキューブ位置が端に行った時点で処理終了
      if (this.cubeHorizon.position.x < -5 && this.cubeVertical.position.x > 5) {
        cancelAnimationFrame(requestId)
        this.moveCube()
      }
      this.renderer.render(this.scene, this.camera)
    },
    onResize () {
      // サイズを取得
      const width = window.innerWidth
      const height = window.innerHeight
      // レンダラーのサイズを調整する
      this.renderer.setPixelRatio(window.devicePixelRatio)
      this.renderer.setSize(width, height)
      // カメラのアスペクト比を正す
      this.camera.aspect = width / height
      this.camera.updateProjectionMatrix()
      console.log('resize!!')
    }
  }
}
</script>

<style scoped>
  .stage {
    z-index: -1;
  }
</style>
