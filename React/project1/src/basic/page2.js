const MyBook = () => {
  let allBook = [
    //array of object
    { name: "HTML", price: 5000, author: "Ali", publish: true },
    { name: "CSS", price: 3000, author: "Anand", publish: false },
    { name: "Nodejs", price: 4500, author: "Mohit", publish: false },
    { name: "PHP", price: 2500, author: "Mihir", publish: true },
    { name: "Java", price: 3500, author: "Mrinal", publish: false },
    { name: "Informatica", price: 1000, author: "Manan", publish: true },
  ];
  return (
    <div>
      <h1> Manage Book : {allBook.length} </h1>
      <table>
        <thead>
          <tr>
            <th>Serial No</th>
            <th>Book Name</th>
            <th>Price</th>
            <th>Author</th>
            <th>Publish</th>
          </tr>
        </thead>
        <tbody>
          {allBook.map((book, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{book.name}</td>
                <td>{book.price}</td>
                <td>{book.author}</td>
                <td>{book.publish.toString()}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default MyBook;
