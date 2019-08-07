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
      mergeMesh: this.mergeMesh,
      geometry: this.geometry,
      isCameraMoved: true
    }
  },

  created () {
    this.initThree()
    this.setThree()
    // TODO mousemove イベントの追加
    // === リサイズ対応 ===
    window.addEventListener('resize', this.onResize)
  },

  mounted () {
    // === DOMを追加, animate ===
    this.$refs.stage.appendChild(this.renderer.domElement)
  },

  methods: {
    initThree () {
      // === scene ===
      this.scene = new THREE.Scene()

      // === renderer ===
      this.renderer = new THREE.WebGLRenderer({alpha: true})
      this.renderer.setSize(window.innerWidth, window.innerHeight)

      // === camera ===
      this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / (window.innerHeight), 0.1, 1000)
      this.camera.position.z = 8

      // === light ===
      this.light = new THREE.DirectionalLight(0xffffff)
      this.light.position.set(0, 0, 10)

      // === model ===
      const cubeSize = 2.5
      this.geometry = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize)
      this.material = new THREE.MeshNormalMaterial()

      // === mesh ===
      const material = new THREE.MeshStandardMaterial({ color: 0x282828 })
      // 200個のMeshをランダム配置し、1つのインスタンスとしてまとめる
      for (let i = 0; i < 200; i++) {
        const mesh = new THREE.Mesh(new THREE.CubeGeometry(5, 5, 5), material)
        mesh.position.x = (Math.random() - 0.5) * 200
        mesh.position.y = (Math.random() - 0.5) * 200
        mesh.position.z = (Math.random() - 0.5) * 200
        mesh.rotation.x = Math.random() * 2 * Math.PI
        mesh.rotation.y = Math.random() * 2 * Math.PI
        mesh.rotation.z = Math.random() * 2 * Math.PI
        this.geometry.mergeMesh(mesh)
      }
      this.mergeMesh = new THREE.Mesh(this.geometry, material)
      this.scene.add(this.mergeMesh)
    },
    moveMesh (mesh) {
      requestAnimationFrame(() => this.moveMesh(mesh))
      // TODO 円運動を行う
      mesh.position.x += 0.1
      mesh.position.y += 0.1
      this.renderer.render(this.scene, this.camera)
    },
    setThree () {
      // === sceneにmodel,light, cameraを追加 ===
      this.scene.add(this.camera)
      this.scene.add(this.light)
      this.moveMesh(this.mergeMesh)
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

<style scoped lang="sass">
  .stage
    z-index: -1
    position: fixed
    top: 0
    left: 0

</style>
