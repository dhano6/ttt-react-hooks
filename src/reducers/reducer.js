import calcWinner from "../util/calcWinner";

export default function reducer(state, action) {
  let { boxes, xIsNext, winner } = state;
  const { idx } = action.payload;
  switch (action.type) {
    case "SELECT_BOX": {
      const boxesCopy = [...boxes];
      if (boxesCopy[idx] !== null || winner !== null) return state;
      boxesCopy[idx] = xIsNext ? "X" : "O";
      winner = calcWinner(boxesCopy);
      return {
        xIsNext: !xIsNext,
        boxes: boxesCopy,
        winner
      };
    }

    default:
      throw new Error(`Unhandled action type: ${action.type}. Please fix it.`);
  }
}
