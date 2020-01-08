const initialState = [
  {
    title: 'Done',
    id: 0,
    cards: [
      {
        id: 0,
        info: 'Go to the gym',
      }, 
      {
        id: 1,
        info: 'Find tickets',
      }
    ],
  }
];

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
}

export default listReducer;