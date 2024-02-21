const Myuser = () => {
  let userlist = ["Alex", "Manoj", "Sekhar", "Sunil", "Ravi", "Anand"];

  return (
    <div>
      <h1> Manage User : {userlist.length}</h1>
      {userlist.map((fullname, index) => {
        return <p key={index}> {fullname} </p>;
      })}
    </div>
  );
};

export default Myuser;
