import React, { useContext, useState } from "react";
import Heading from "./UI/Heading";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";
import { ScrollContexts } from "../store/ScrollContext";

const Faqs = () => {
    const [selectedQues, setSelectedQues] = useState(null)

  const faqsObject = [
    {
      question: "Is my data safe with the AI assistant?",
      answer:
        "Yes, ensuring the safety and privacy of your data is our top priority. Our AI assistant platform adheres to strict security protocols and industry best practices to safeguard your information.",
      id: 1,
    },
    {
      question: "How does the AI assistant help manage my Twitter DMs?",
      answer:
        "Our AI assistant simplifies the management of your Twitter Direct Messages by offering automated responses to common queries, sorting messages for priority, filtering out spam, personalizing engagements, setting follow-up reminders, and providing valuable analytics insights.",
      id: 2,
    },
    {
      question: "Can the AI assistant personalize my responses?",
      answer:
        "Yes, our AI assistant can personalize responses based on the context of the conversation and the information available. This helps in creating more engaging and relevant interactions with your audience, enhancing the overall user experience.",
      id: 3,
    },
    {
      question:
        "How do I set up and start using the AI assistant for my Twitter DMs?",
      answer:
        "Setting up is easy! Just follow the instructions on our website to connect your Twitter account and configure your preferences. The AI assistant will start working immediately",
      id: 4,
    },
  ];
 
  const handleQuestions =(id)=> {
    if(selectedQues === id){
        setSelectedQues(null)
    }else{
        setSelectedQues(id)
    }
  }

  const {faqsRef } = useContext(ScrollContexts)

  return (
    <div className="container text-text flex flex-col items-center" ref={faqsRef}>
      <Heading text={"FAQs"} headText={"Your Questions Answered"} />
      <div className="w-full p-2 md:p-8">
        {faqsObject.map((faqs) => (
            <div key={faqs.id}>
          <div className=" w-full py-2 px-4 cursor-pointer md:py-7" onClick={()=>handleQuestions(faqs.id)}>
            <div className="flex justify-between items-center">
            <h3 className="font-semibold hover:opacity-75">{faqs.question}</h3>
            {selectedQues && selectedQues === faqs.id ? <FaMinus className="cursor-pointer ml-5"/> : <FaPlus className="cursor-pointer ml-5"/> }
            </div>
            <p className={`text-sm pt-4 ${selectedQues === faqs.id ? "slide-down-faqs" : "slide-up"}`}>{faqs.answer}</p>
          </div>
          <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
