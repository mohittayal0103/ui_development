import { useState } from "react";

const Email = () => {

  let [emailData, setEmailData] = useState({});

  const pickValue = (obj) => {
    emailData[obj.target.name] = obj.target.value;
    setEmailData(emailData);
  }

  const sendEmail = (obj) => {
    obj.preventDefault();
    let url = "http://localhost:2222/sendmail"
    let postData = {
        headers:{'Content-Type':'application/json'},
        method:"post",
        body:JSON.stringify(emailData)
    }
    fetch(url, postData)
    .then(response=>response.text())
    .then(info=>{
        alert(info);
    })
  }

  return (
    <div className="center">
      <h1> Compose Email </h1>

      <form onSubmit={sendEmail}>
        <table align="center" cellPadding={15}>
          <tbody>
            <tr>
              <td>To Email</td>
              <td>
                <input type="email" name="emailid" size={40} onChange={pickValue} />
              </td>
            </tr>
            <tr>
              <td>Subject</td>
              <td>
                <input type="text" name="subject" size={40} onChange={pickValue}/>
              </td>
            </tr>
            <tr>
              <td>Message</td>
              <td>
                <textarea rows={8} cols={38} name="message"  onChange={pickValue}></textarea>
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <button type="submit"> Send Email </button>
                <button type="reset"> Clear </button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default Email;
