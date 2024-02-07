import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({handleDeleteItem, handleUpdateQuestion, items}) {

    
  return (
    <section>
      <h1>Quiz Questions</h1>
      {/* <QuestionForm onAddItem={handleAddItem}/> */}
      <ul>{/* display QuestionItem components here after fetching */}</ul>
      {items.map((item) => (
        <QuestionItem key={item.id} question={item} onDeleteQuestion={handleDeleteItem} onUpdateQuestion={handleUpdateQuestion} />
      ))}
    </section>
  );
}

export default QuestionList;
