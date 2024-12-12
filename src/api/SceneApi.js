// 该类主要用于初始化场景

class SceneApi {
  constructor(map, layer, group) {
    this._map = map;
    this._layer = layer || null;
    this._group = group || null;
    this.initSky();
    this.initLight();
    this.allFlash = [];
  }

  // 初始化灯光
  initLight() {
    // 场景灯光1
    let light1 = new mapmost.DirectionalLight({
      color: '#484b4b',
      intensity: 3.7,
      position: [291218.1880671615, -359034.8940693505, 220067.97081694918],
    });
    // 场景灯光2
    let light2 = new mapmost.DirectionalLight({
      color: '#767676',
      intensity: 0.91,
      position: [-291218.1880671615, 359034.8940693505, 220067.97081694918],
    });
    this._map.addLight(light1);
    this._map.addLight(light2);
  }

  // 初始化天空盒
  initSky() {
    this._map.addLayer({
      id: 'sky',
      type: 'mapmost_sky',
      enableCloud: true,
      paint: {
        'sky-url': './assets/images/CubeRT_Capture_Tex_2048.png',
        'sky-angle': 0,
        'sky-exposure': 1,
        'sky-opacity': [
          'interpolate',
          ['linear'],
          ['zoom'],
          0,
          0,
          5,
          0.3,
          8,
          1,
        ],
        'sky-type': 'atmosphere',
        'sky-atmosphere-sun': [227.02725700614292, 110.95561210040023],
        'sky-atmosphere-sun-intensity': 5,
      },
    });
  }
}

export default SceneApi;
