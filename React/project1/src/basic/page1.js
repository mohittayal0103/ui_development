const Myuser = () => {
  let userlist = ["Alex", "Manoj", "Sekhar", "Sunil", "Ravi", "Anand"];

  return (
    <div className="container">
      <h1> Manage User : {userlist.length}</h1>
      {userlist.map((fullname, index) => {
        return <p className="four" key={index}> {fullname} </p>;
      })}
    </div>
  );
};

export default Myuser;
