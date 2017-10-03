import axios from 'axios'

export const itemsHasErrored = (bool) => {
  return {
    type: 'ITEMS_HAS_ERRORED',
    hasErrored: bool
  }
}

export const itemsIsLoading = (bool) => {
  return {
    type: 'ITEMS_IS_LOADING',
    isLoading: bool
  }
}

export const itemsFetchDataSuccess = (items) => {
  return {
    type: 'ITEMS_FETCH_DATA_SUCCESS',
    items
  }
}

export const itemsFetchData = (url) => {
  return (dispatch) => {
    dispatch(itemsIsLoading(true))
    axios.get(url)
      .then((response) => {
        dispatch(itemsIsLoading(false))
        dispatch(itemsFetchDataSuccess(response.data.results))
      })
      .catch(() => dispatch(itemsHasErrored(true)));
  }
}
