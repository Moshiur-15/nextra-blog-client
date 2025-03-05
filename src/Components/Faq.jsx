import React from "react";
import Title from "./sherd/Title";

const Faq = () => {
  const faqs = [
    {
      question: "What is Nexetra Blog?",
      answer:
        "Nexetra Blog is a platform for sharing insights and tips on various topics.",
    },
    {
      question: "How can I contribute?",
      answer:
        "You can contribute by submitting articles or joining discussions in our community.",
    },
    {
      question: "Is it free to use?",
      answer: "Yes, Nexetra Blog is completely free for all users.",
    },
    {
      question: "How can I contact support?",
      answer:
        "You can contact support by emailing us at support@nexetra.com or using the contact form on our website.",
    },
    {
      question: "What topics are covered in Nexetra Blog?",
      answer:
        "Nexetra Blog covers a wide range of topics, including technology, lifestyle, business, and more.",
    }
  ];

  return (
    <div className="flex flex-col items-center justify-center py-14 lg:py-20" style={{
        backgroundImage:
          "url('https://i.ibb.co.com/yFGM65Ww/pa.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}>
      <Title fast_text="Frequently Asked" italic="Questions" />
      <section className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* FAQ List */}
        <div className="w-full md:w-[50%]">
          {faqs.map((faq, index) => (
            <details key={index} className="mb-4 p-4 bg-[#FAF5E5]">
              <summary
                className="font-semibold cursor-pointer text-lg "
              >
                {faq.question}
              </summary>
              <p className="mt-2 text-black">{faq.answer}</p>
            </details>
          ))}
        </div>
        {/* Image Section */}
        <div className="mt-6 md:mt-0 h-[450px] md:w-[40%]">
          <img
            src="https://i.ibb.co.com/mV8gPd0q/questions-and-answers-free-png.webp"
            alt="FAQ Image"
            className="rounded-lg w-full h-full object-cover relative md:left-14"
          />
        </div>
      </section>
    </div>
  );
};

export default Faq;
