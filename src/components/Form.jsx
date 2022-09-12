import Button from "./Button";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Alert from "./Alert";
import Button2 from "./Button2";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  const [alert, setAlert] = useState(false);

  const form = useRef();
  const validateInputs = () => {
    return;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (email && name && subject && message) {
      emailjs
        .sendForm(
          "service_lv76ojp",
          "template_ab3qt0d",
          form.current,
          "On3V2f812lPc4HpFL"
        )
        .then(
          (result) => {
            setName("");
            setEmail("");
            setMessage("");
            setSubject("");
            setResponse("We recieved your Message 😀");
            setAlert(true);
          },
          (error) => {
            setResponse("Sorry, Something Broke 😶");
            setAlert(true);
          }
        );
    } else {
      console.log("Please fill all the input fields");
    }
  };

  const handleAlert = () => {
    setAlert(false);
  };

  return (
    <div className='relative'>
      {alert && <Alert handleAlert={handleAlert} msg={response} />}

      <form
        className='mt-10 block m-auto w-full md:w-2/3 bg-blue2 p-8 pb-12 md:px-14'
        ref={form}
        onSubmit={sendEmail}
      >
        <div>
          <input
            name='user_name'
            className='border-b-2 border-orange-500  bg-transparent outline-none w-full mb-6 text-sm'
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='Name'
          />
        </div>
        <div>
          <input
            name='user_email'
            className='border-b-2 border-orange-500 bg-transparent outline-none w-full mb-6 text-sm'
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Email'
          />
        </div>
        <div>
          <input
            name='user_subject'
            className='border-b-2 border-orange-500 bg-transparent outline-none w-full mb-6 text-sm'
            type='text'
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder='Subject'
          />
        </div>
        <div>
          <textarea
            name='message'
            className='border-b-2 border-orange-500 bg-transparent outline-none w-full mb-6 text-sm'
            cols='30'
            rows='10'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder='Message'
          ></textarea>
        </div>
        <div className='text-center' onClick={validateInputs}>
          <Button2 title={"Send Message"} />
        </div>
      </form>
    </div>
  );
};

export default Form;
