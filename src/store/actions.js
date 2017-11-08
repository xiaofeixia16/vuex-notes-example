// 提交一个动作
export const initial = ({ commit }) => {
  commit('setInitialData')
}

export const created = ({commit}) => {
  commit('createEntity')
}

export const update = ({ commit }, entity) => {
  commit('updateEntity', entity)
}

export const destory = ({ commit }, entity, id) => {
  commit('destoryEntity', entity)
}
