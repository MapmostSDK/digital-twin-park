import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import mapmost from '@mapmost/mapmost-webgl';

window.mapmost = mapmost;
createApp(App).mount('#app');
