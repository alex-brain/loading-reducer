const initState = {
  loading: []
}

const loadingReducer = (state = initState, action) => {
  const { type } = action;
  const matches = /(.*)_(REQUEST|SUCCESS|FAILURE)/.exec(type);

  if (!matches) return state;

  return {
    ...state,
    loading: [
      ...state.loading,
      'test'
    ]
  };
};

export default loadingReducer;
