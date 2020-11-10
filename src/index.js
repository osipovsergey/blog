// Import of styles
import './less/styles/main.less';

import Vue from 'vue';
import ListProjects from './components/ListProjects.vue';

new Vue({
    el: '#list_projects',
    render: h => h(ListProjects)
});