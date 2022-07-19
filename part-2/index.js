const App = () => (
    <div>
      <Tweet username="user1" name="name 1" date="01/15/2022" message="message by user 1" />
      <Tweet username="user2" name="name 2" date="03/25/2022" message="message by user 2" />
      <Tweet username="user1" name="name 1" date="05/05/2022" message="message by user 1" />
    </div>
);
  
ReactDOM.render(<App/>, document.getElementById("root"));