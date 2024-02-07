import React, { useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";
import { useEffect } from "react";


function App() {
  const [page, setPage] = useState("List");
  
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/questions")			// Fetches data from server
      .then((r) => r.json())
      .then((items) => setItems(items));
  }, []);


  // ADD / POST
  function handleAddItem(newItem) {   		// This is the onAddItem callback prop passed up from ItemForm to update items state
    setItems([...items, newItem]);
    console.log(newItem)
  }


  // DELETE
  function handleDeleteItem(deletedQuestion) {
    const updatedItems = items.filter((item) => item.id !== deletedQuestion.id);   
    setItems(updatedItems);							
  }						


  // UPDATE 
  function handleUpdateQuestion(updatedQuestion) {
    const updatedItems = items.map((item) => {
      if (item.id === updatedQuestion.id) {
        return updatedQuestion;			// This replaces the current item in the items state with the upDated item sent to server
      } else {
        return item;				// Else if there is no update just return the same item
      }
    });
    setItems(updatedItems);
    }


  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? 
      <QuestionForm onAddItem={handleAddItem}/> : 
      <QuestionList items={items} handleDeleteItem={handleDeleteItem} handleUpdateQuestion={handleUpdateQuestion} />}
    </main>
  );
}

export default App;
