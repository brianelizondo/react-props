const App = () => (
    <div>
      <Person name="person1" age={ 20 } hobbies={ ["play videogames", "drive cars"] } />
      <Person name="person2" age={ 15 } />
      <Person name="longNamePerson" age={ 25 } />
      <Person name="person 4" age={ 17 } hobbies={ ["play soccer", "beach", "watch a movie", "read a book"] } />
    </div> 
);
  
ReactDOM.render(<App/>, document.getElementById("root"));