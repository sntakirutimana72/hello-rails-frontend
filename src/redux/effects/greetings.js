export const pendingEffect = (state) => ({
  ...state,
  error: null,
  greeting: null,
  isLoading: true,
})

export const fulfilledEffect = (state, { payload }) => ({
  ...state,
  greeting: payload,
  isLoading: false,
})

export const rejectedEffect = (state, { payload }) => ({
  ...state,
  error: payload,
  isLoading: false,
})