<script setup>
import { onMounted } from 'vue';

import MapApi from '../api/MapApi';
import CarApi from '../api/CarApi';
import SceneApi from '../api/SceneApi';

const style_opacity = {
  version: 8,
  sources: {},
  layers: [
    {
      id: 'land',
      type: 'background',
      paint: {
        'background-color': {
          stops: [
            [15, 'rgba(9, 30, 55, 0.6)'],
            [16, 'rgba(9, 30, 55, 0.6)'],
          ],
        },
      },
    },
  ],
};

onMounted(() => {
  // 地图初始化
  let map = new mapmost.Map({
    container: 'map-container',
    style: style_opacity,
    doubleClickZoom: false,
    center: [120.72929672369003, 31.288619767132104],
    zoom: 17.88998700147244,
    sky: 'light',
    pitch: 64.42598133276567,
    bearing: -37.87271910936988,
    userId: '***', // 请输入您获取的授权码
    env3D: {
      defaultLights: false,
      envMap: './assets/hdr/yun(17).hdr',
      exposure: 2.64,
    },
  });

  window.THREE = mapmost.THREE; //Three.js接口
  let modelLayer;
  map.on('load', function () {

    // 园区模型
    let models_obj = [
      {
        type: 'glb',
        url: './assets/models/yq.mm',
        decryptWasm:
          'https://delivery.mapmost.com/cdn/b3dm_codec/0.0.2-alpha/sdk_b3dm_codec_wasm_bg_opt.wasm',
      },
    ];

    // 图层参数
    let options = {
      id: 'model_id1',
      models: models_obj,
      outline: true, // 允许轮廓高亮
      type: 'model',
      funcRender: function (gl, matrix) {
        if (modelLayer) {
          modelLayer.renderMarker(gl, matrix);
        }
      },
      center: [120.73014920373011, 31.287414975761724, 0.1],
      callback: function (group, layer) {
        layer.onAfterRender(group).then(function () {
          document.getElementById('loading').style.display='none'
        })
        modelLayer = layer;
        // 初始化场景
        new SceneApi(map, layer, group);

        // 道路行驶车辆
        let car = new CarApi(map);
        car.initCar();
        let count = 0;
        setInterval(function () {
          //每隔6秒放一次车，放5次
          if (count < 5) {
            car.initCar();
            count++;
          }
        }, 10000);
        // 获取MapApi接口
        window.mapApi = new MapApi(map, layer, group);
      },
    };
    // 添加模型
    map.addLayer(options);
  });
  window.map = map;
});
</script>
<template>
  <div class="map-container" id="map-container"></div>
  <div class="loading" id="loading">Loading…</div>
</template>

<style lang="scss" scoped>
.map-container {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.loading {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 36px;
  color: #fff;
  font-weight: bold;
}
</style>
