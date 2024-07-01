import React, { useState, useEffect } from "react";
import plus from '../assets/images/plus-solid.svg';
import minus from '../assets/images/minus.svg';

function Faq() {
  const [isClicked, setIsClicked] = useState([false, false, false, false, false, false, false, false]);
  const faqs = [
    {
      question: 'What does Solvety offer?',
      answer:  (
        <div dangerouslySetInnerHTML={{ __html: `You want to understand your audience in order to draft compelling and relatable copies?
        Or you desire to dominate and lead in your industry with your user-friendly designs.<br>
        What if you wish to launch outstanding products to increase your confidence level in your game.
        <br><br>
        Solvety is offering solutions designed for businesses and individuals with those needs that 
        are building specifically for Nigerian audience through the use of our advanced User Research.
      <br><br>
      `}}/>
    ) },
    {
      question: 'What do I stand to gain from joining Solvety? ',
      answer: 
      (
        <div dangerouslySetInnerHTML={{ __html: ` Are you a tech person that likes testing out new products?
      Or you're someone that desires sharing your opinion and thoughts in a meaningful way.
      Are you also someone that loves having fun while doing all these?
      <br><br>
      Now that's what Solvety gives you on a platter of gold.
      The best part of the process is that you get rewards for doing something you enjoy.`}}/>
    )},
    
    {  question: `How does Solvety differ from other data collection platforms?
    `,
    answer:  (
      <div dangerouslySetInnerHTML={{ __html: `Unlike other Platforms, Our Product is unique because 
      <br><br>
      
      First, we use gamification to make data collection more engaging and fun for users, and to ensure that you obtain accurate, complete and reliable data. This makes our approach unique and effective.
      <br><br>
      
      Second, We provide a range of research methods, including Surveys, Interviews, Card Sorting, Focus group, Product testing and more to meet your specific needs and give you flexibility.
      <br><br>
      
      Third, We've developed a robust platform for finding and engaging with your target audience.
      This allows you to create highly targeted research and distribute them to your ideal audience, ensuring that your user research is as useful and impactful as possible.
      <br><br>
      
      Fourth, Our platform is designed with newbies in mind, with a simple and intuitive interface, anyone can create and launch research, even if they have no prior experience.
      This makes it easy for anyone to get started with user research.
      <br><br>
      Fifth, We have powerful data analysis and visualization tools to help you track key metrics, compare results, and to get the most out of your collected data. 
      <br><br>
      Sixth, Our fast research model allows you to get the insights you need in a fraction of the time it would take with traditional methods.
      <br><br>
      Seventh, We focus specifically on Nigerian users at the moment, tailoring a high-quality and localized experience that is truly unique.
      And more....
      <br><br>
      
      Our goal is to help you make better decisions and improve your product' ideas, designs or copies, so you can achieve success in your industry, through high-quality data collection and analysis.`}}/>
  ) },
    {
      question: 'How is Solvety different from Survey Platforms?',
      answer: (
        <div dangerouslySetInnerHTML={{ __html: `
          Well, first of all Solvety isn't just a survey tool but a research platform.<br><br>
          Usually, you login to survey websites hoping to help Projects by sharing needed information but You're then given a long form of questions to answer.<br><br>
          Gulp<br><br>
          You're stressed, bored with what you're seeing and your time ticks away in frustration but no one cares.<br><br>
          Therefore, Solvety is creating a new process<br><br>
          1. where you give your opinions in a fun way through gamification.<br><br>
          2. Where you get rewarded for the data you're sharing.<br><br>
        ` }} />
      ),
    }
    ,
    {
      question: 'How do you ensure compliance with data protection regulations?',
      answer: 'We are committed to strict compliance with data protection regulations such as GDPR and others. Our policies and practices align with the legal requirements, and we continuously update our processes to stay in line with any changes in the regulatory landscape.',
    },
    {
      question: 'Is my data safe and can I control what data is collected about me?',
      answer: ( <div dangerouslySetInnerHTML={{ __html: 
        `There are three things we prioritize; your anonymity, your data security and your ability to control what is collected about you.
      <br><br>
      1. Your personal identifiable information that can be traced to your real-world identity is carefully anonymized, ensuring that you cannot be identified from the collected data.
      <br><br>
      2. We employ updated security measures, robust encryption, regular audits, and strict access controls to minimize the risk of data breaches and unauthorized access.
      Ensuring the integrity and confidentiality of your information is our day to day fight.
      <br><br>
      3. We do not share your data with third parties without your explicit consent.
      
      We do all these while implementing a friendly interface where you can review and control the data associated with your account.` }} />
    ),},
    {
      question: 'Can I control what data is collected about me?',
      answer: 'Absolutely. Our product is designed with user control in mind. You have the ability to manage and customize your data preferences. We provide clear options for opting in or out of specific data collection, ensuring you have control over your personal information.',
    },
    
   
    
    {
      question: 'How does the reward works and can I withdraw?',
      answer: `This will be effected on your profile and fully when we launch our Mainnet version but at the moment, you can keep on accumulating "Qwes" rewards via "frens invite" and external "quests taking".`,
  }];

  const toggleClick = (index) => {
    setIsClicked((prev) => {
      const newIsClicked = [...prev];
      newIsClicked[index] = !newIsClicked[index];

      // Disable other elements if the current one is open
      if (newIsClicked[index]) {
        for (let i = 0; i < newIsClicked.length; i++) {
          if (i !== index) {
            newIsClicked[i] = false;
          }
        }
      }

      return newIsClicked;
    });
  };

  const closeAnswers = () => {
    // Close all answers
    setIsClicked(Array(faqs.length).fill(false));
  };

  useEffect(() => {
    document.addEventListener("click", closeAnswers);

    return () => {
      document.removeEventListener("click", closeAnswers);
    };
  }, []);

  return (<div className="faq-container">
  <h2>FAQ</h2>
  <h3>Participant's </h3> <h3>Researcher's</h3>
  {faqs.map((faq, index) => (
    <div
      key={index}
      id={`faq-item-${index}`}
      className={`faq-items ${isClicked[index] ? 'open' : ''}`}
    >
      <p>
        {faq.question}
        <img
          src={isClicked[index] ? minus : plus}
          alt={isClicked[index] ? 'minus' : 'plus'}
          onClick={(e) => {
            e.stopPropagation(); // Prevent the click from propagating to the document
            toggleClick(index);
          }}
        />
      </p>
      {isClicked[index] && (
        <div className="answer">
          {faq.answer}
        </div>
      )}
    </div>
  ))}
</div>

  );
}

export default Faq;
