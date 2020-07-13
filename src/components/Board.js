import React, { useReducer } from "react";
import reducer from "../reducers/reducer";

export default function Board() {
  const [state, dispatch] = useReducer(reducer, {
    boxes: Array(9).fill(null),
    xIsNext: true,
    winner: null
  });

  const { xIsNext, boxes, winner } = state;

  function clickHandler(index) {
    dispatch({ type: "SELECT_BOX", payload: { idx: index } });
  }

  function renderBox(index) {
    return (
      <div className="box" role="button" onClick={() => clickHandler(index)}>
        {boxes[index]}
      </div>
    );
  }

  function playerInfo() {
    if (winner) {
      return `Player ${winner} has won the game.`;
    } else {
      return `Player ${xIsNext ? "X" : "O"}`;
    }
  }

  return (
    <>
      <div className="player-info">{playerInfo()}</div>
      <div className="board">
        {renderBox(0)}
        {renderBox(1)}
        {renderBox(2)}
        {renderBox(3)}
        {renderBox(4)}
        {renderBox(5)}
        {renderBox(6)}
        {renderBox(7)}
        {renderBox(8)}
      </div>
    </>
  );
}
