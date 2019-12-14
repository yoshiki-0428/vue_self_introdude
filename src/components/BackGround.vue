<template lang="pug">
  .stage(ref='stage')
    div(ref='stage')
</template>

<script>
import { Group, InterpolateDiscrete, KeyframeTrack, AnimationClip, AnimationMixer, LoopRepeat, Scene, WebGLRenderer, PerspectiveCamera, Vector3, DirectionalLight, BoxGeometry, MeshNormalMaterial, Mesh, CubeGeometry } from 'three'

export default {
  name: 'backGround',
  data () {
    return {
      scene: this.scene,
      renderer: this.renderer,
      camera: this.camera,
      light: this.light,
      mergeMesh: this.mergeMesh,
      group: this.group,
      geometry: this.geometry,
      isCameraMoved: true,
      moveSpeed: 0.001,
      meshs: [],
      mixer: {}
    }
  },

  created () {
    this.initThree()
    this.setThree()
    window.addEventListener('click', this.moveSpeedUp)
    // TODO mousemove イベントの追加
    // === リサイズ対応 ===
    window.addEventListener('resize', this.onResize)

    // create tracks
    const tracks = []
    // this.meshs
    //   .forEach(mesh => {
    //     // 値を正数に変える
    //     const x = Math.round(Math.abs(mesh.position.x * 10) / 10)
    //     const y = Math.round(Math.abs(mesh.position.y * 10) / 10)
    //     const z = Math.round(Math.abs(mesh.position.z * 10) / 10)
    //     const xArray = [...Array(Math.abs(x)).keys()]
    //     const xArrayReverse = [...Array(Math.abs(x)).keys()].reverse()
    //     const yArray = [...Array(Math.abs(y)).keys()]
    //     const yArrayReverse = [...Array(Math.abs(y)).keys()].reverse()
    //     const zArray = [...Array(Math.abs(z)).keys()]
    //     const zArrayReverse = [...Array(Math.abs(z)).keys()].reverse()
    //     if (xArray && xArray.length !== 0) {
    //       tracks.push(new KeyframeTrack(`${mesh.uuid}.position[x]`, xArray, xArrayReverse))
    //     }
    //     if (yArray && yArray.length !== 0) {
    //       tracks.push(new KeyframeTrack(`${mesh.uuid}.position[y]`, yArray, yArrayReverse))
    //     }
    //     if (zArray && zArray.length !== 0) {
    //       tracks.push(new KeyframeTrack(`${mesh.uuid}.position[z]`, zArray, zArrayReverse))
    //     }
    //     // tracks.push({
    //     //   name: `${mesh.uuid}.position[x]`,
    //     //   times: xArray,
    //     //   values: xArray,
    //     //   interpolation: InterpolateDiscrete
    //     // })
    //     // tracks.push({
    //     //   name: `${mesh.uuid}.position[y]`,
    //     //   times: yArray,
    //     //   values: yArray
    //     // })
    //     // tracks.push({
    //     //   name: `${mesh.uuid}.position[z]`,
    //     //   times: zArray,
    //     //   values: zArray
    //     // })
    //   })
    // console.log('tracks', tracks)
    // // animation
    // const clip = new AnimationClip(null, 1000, tracks)
    // console.log('clip', clip)
    // this.mixer = new AnimationMixer(this.group)
    // console.log(this.mixer)
    // const action = this.mixer.clipAction(clip)
    // action.setLoop(LoopRepeat)
    // action.play()
    // console.log(this.group)
    this.moveMesh(this.group)
  },

  mounted () {
    // === DOMを追加, animate ===
    this.$refs.stage.appendChild(this.renderer.domElement)
  },

  methods: {
    initThree () {
      // === scene ===
      this.scene = new Scene()

      // === renderer ===
      this.renderer = new WebGLRenderer({alpha: true})
      this.renderer.setSize(window.innerWidth, window.innerHeight)

      // === camera ===
      this.camera = new PerspectiveCamera(75, window.innerWidth / (window.innerHeight), 1, 1000)
      this.camera.position.set(0, 0, 15)
      this.camera.lookAt(new Vector3(0, 0, 0))

      // === light ===
      this.light = new DirectionalLight(0xffffff)
      this.light.position.set(0, 0, 10)

      // === model ===
      const cubeSize = 2.5
      this.geometry = new BoxGeometry(cubeSize, cubeSize, cubeSize)
      this.material = new MeshNormalMaterial()

      // === mesh ===
      // 200個のMeshをランダム配置し、1つのインスタンスとしてまとめる
      this.group = new Group()
      for (let i = 0; i < 200; i++) {
        const mesh = new Mesh(new CubeGeometry(5, 5, 5), this.material)
        mesh.position.set(this.getPosition(), this.getPosition(), this.getPosition())
        mesh.rotation.set(this.getRotation(), this.getRotation(), this.getRotation())
        this.meshs.push(mesh)
        this.group.add(mesh)
      }
      // this.geometry.mergeMesh(this.group)
      // this.mergeMesh = new Mesh(this.geometry, this.material)
    },
    getPosition () {
      return (Math.random() - 0.5) * 200
    },
    getRotation () {
      return Math.random() * 2 * Math.PI
    },
    moveMesh (mesh) {
      requestAnimationFrame(() => this.moveMesh(mesh))
      mesh.rotation.x += this.moveSpeed
      mesh.rotation.y += this.moveSpeed
      if (this.mixer) {
        // this.mixer.update(0.02)
      }
      this.renderer.render(this.scene, this.camera)
    },
    moveSpeedUp () {
      const timeId = setTimeout(this.moveSpeedUp, 1)
      if (this.moveSpeed >= 1) {
        this.moveSpeed = 0.001
        clearTimeout(timeId)
      }
      this.moveSpeed += 0.01
    },
    setThree () {
      // === sceneにmodel,light, cameraを追加 ===
      this.scene.add(this.camera)
      this.scene.add(this.light)
      // this.meshs.forEach(mesh => this.scene.add(mesh))
      this.scene.add(this.group)
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
