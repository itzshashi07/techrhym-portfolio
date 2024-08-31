import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  faqEnter: {
    maxHeight: 0,
    opacity: 0,
    transform: 'translateX(-100%)',
    transition: 'max-height 0.3s ease-out, opacity 0.3s ease-out, transform 0.3s ease-out',
  },
  faqEnterActive: {
    maxHeight: '500px',
    opacity: 1,
    transform: 'translateX(0)',
  },
  faqExit: {
    maxHeight: '500px',
    opacity: 1,
    transform: 'translateX(0)',
    transition: 'max-height 0.3s ease-in, opacity 0.3s ease-in, transform 0.3s ease-in',
  },
  faqExitActive: {
    maxHeight: 0,
    opacity: 0,
    transform: 'translateX(-100%)',
  },
});

const faqs = [
  {
    question: 'What services does TechRhym offer?',
    answer: [
      'We specialize in web and app development using trending technologies, SEO, digital marketing, and virtual tours.',
      'Additionally, we provide content writing, hosting services, software testing, and offer content writers on a daily, weekly, monthly, or per-article basis.',
    ],
  },
  {
    question: 'How does TechRhym support digital growth in rural areas?',
    answer: [
      'We are dedicated to promoting digitalization through education and hands-on workshops, ensuring everyone has access to modern technology.',
      'Our goal is to empower individuals and communities, particularly in rural areas, by making technology accessible and affordable.',
    ],
  },
  {
    question: 'Why should I choose TechRhym for my development needs?',
    answer: [
      'At TechRhym, we deliver top-notch development services and innovative solutions tailored to all budgets.',
      'We focus on making technology inclusive and accessible, fostering curiosity, and keeping our clients informed about the latest trends.',
    ],
  },
  {
    question: 'What makes TechRhym’s Virtual Tour service unique?',
    answer: [
      'Our Virtual Tour service offers an immersive, interactive experience that brings locations to life, helping businesses engage customers and showcase their spaces effectively.',
      'It’s designed to be user-friendly and works seamlessly across all devices.',
    ],
  },
  {
    question: 'Can TechRhym help improve my website’s visibility on search engines?',
    answer: [
      'Absolutely! Our SEO experts use the latest techniques and tools to enhance your website’s search engine ranking, driving more organic traffic to your site.',
      'We offer customized SEO strategies tailored to your business needs.',
    ],
  },
  {
    question: 'How can TechRhym’s digital marketing services benefit my business?',
    answer: [
      'We create targeted digital marketing campaigns to reach your ideal audience, increase brand visibility, and drive conversions.',
      'Our services include social media management, content marketing, email marketing, and more, all aimed at maximizing your online presence.',
    ],
  },
  {
    question: 'What support does TechRhym offer if I have questions or need assistance?',
    answer: [
      'We provide comprehensive support to all our clients. Whether you have questions or need assistance with our services, our team is available to help.',
      'You can reach us through various channels including email, phone, or chat support.',
    ],
  },
];

const Faq = ({ mode }) => {
  const classes = useStyles();
  const [openIndex, setOpenIndex] = useState(null);
  const isNightMode = mode === 'night';

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={`p-6 ${isNightMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <div className="max-w-screen-lg mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4" style={{ color: '#FFAF45' }}>TechRhym FAQs</h1>
          <p className="text-lg" style={{ color: isNightMode ? '#D3D3D3' : '#4A4A4A' }}>
            Find answers to the most frequently asked questions about our services and offerings.
          </p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className={`border rounded-lg p-4 shadow ${isNightMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-700'}`}>
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFaq(index)}
              >
                <h3 className="text-xl font-semibold" style={{ color: isNightMode ? '#D3D3D3' : '#4A4A4A' }}>{faq.question}</h3>
                <div className="text-2xl">
                  {openIndex === index ? <FaMinus className="text-gray-300" /> : <FaPlus className="text-gray-700" />}
                </div>
              </div>
              <TransitionGroup>
                {openIndex === index && (
                  <CSSTransition
                    timeout={300}
                    classNames={{
                      enter: classes.faqEnter,
                      enterActive: classes.faqEnterActive,
                      exit: classes.faqExit,
                      exitActive: classes.faqExitActive,
                    }}
                  >
                    <div className="mt-4">
                      <ul className="list-disc pl-5 space-y-2" style={{ color: isNightMode ? '#B0B0B0' : '#4A4A4A' }}>
                        {faq.answer.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  </CSSTransition>
                )}
              </TransitionGroup>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
