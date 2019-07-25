const loadingReducer = (state = {}, action) => {
  const { type } = action;
  const matches = /(.*)_(REQUEST|SUCCESS|FAILURE)/.exec(type);

  if (!matches) return state;

  return {
    ...state,
    loading: [
      ...state.loading,
      action.type
    ]
  };
};

export default loadingReducer;
