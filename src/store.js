import Vue from 'vue';
import { createNewGrid, getNextGrid } from './logic';

export default {
  state: {
    sizeX: 0,
    sizeY: 0,
    grid: [],
    isPlaying: false,
    intervalId: null
  },

  actions: {
    init({ commit }, { sizeX, sizeY }) {
      commit('setSize', { sizeX, sizeY });
      commit('setGrid', createNewGrid(sizeX, sizeY));
    },

    update({ state, commit }) {
      commit('setGrid', getNextGrid(state.grid, state.sizeX, state.sizeY));
    },

    toggle({ state, commit }, { i, j }) {
      commit('setCell', { i, j, isAlive: !state.grid[i][j] });
    },

    play({ state, commit, dispatch }) {
      if (state.intervalId) return;
      const id = setInterval(() => dispatch('update'), 100);
      commit('setIntervalId', { id });
    },

    pause({ state, commit }) {
      clearInterval(state.intervalId);
      commit('setIntervalId', { id: null });
    }
  },

  mutations: {
    setSize(state, { sizeX, sizeY }) {
      state.sizeX = sizeX;
      state.sizeY = sizeY;
    },

    setGrid(state, grid) {
      state.grid = grid;
    },

    setCell(state, { i, j, isAlive }) {
      Vue.set(state.grid[i], j, isAlive);
    },

    setIntervalId(state, { id }) {
      state.isPlaying = id !== null;
      state.intervalId = id;
    }
  }
};
