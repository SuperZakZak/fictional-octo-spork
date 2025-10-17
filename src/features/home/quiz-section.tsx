"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { HelpCircle, CheckCircle, ArrowRight, ArrowLeft } from "lucide-react";

interface Question {
  id: number;
  question: string;
  options: Array<{
    text: string;
    value: "vinyl" | "dtf" | "both";
  }>;
}

const questions: Question[] = [
  {
    id: 1,
    question: "How many colors does your design have?",
    options: [
      { text: "1-3 solid colors", value: "vinyl" },
      { text: "4+ colors or gradients", value: "dtf" },
      { text: "Not sure yet", value: "both" },
    ],
  },
  {
    id: 2,
    question: "What type of design are you printing?",
    options: [
      { text: "Logo or text only", value: "vinyl" },
      { text: "Photo or complex artwork", value: "dtf" },
      { text: "Mix of both", value: "both" },
    ],
  },
  {
    id: 3,
    question: "What's your order quantity?",
    options: [
      { text: "1-20 pieces", value: "dtf" },
      { text: "20-100 pieces", value: "both" },
      { text: "100+ pieces", value: "both" },
    ],
  },
  {
    id: 4,
    question: "What finish do you prefer?",
    options: [
      { text: "Matte and durable", value: "vinyl" },
      { text: "Soft and flexible", value: "dtf" },
      { text: "No preference", value: "both" },
    ],
  },
];

export function QuizSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Array<"vinyl" | "dtf" | "both">>([]);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (value: "vinyl" | "dtf" | "both") => {
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
      }, 300);
    } else {
      setTimeout(() => {
        setShowResult(true);
      }, 300);
    }
  };

  const calculateResult = () => {
    const vinylCount = answers.filter((a) => a === "vinyl").length;
    const dtfCount = answers.filter((a) => a === "dtf").length;

    if (vinylCount > dtfCount) {
      return {
        method: "Vinyl Printing",
        color: "from-gray-700 to-gray-900",
        icon: "✂️",
        description: "Perfect for your needs! Vinyl printing is ideal for simple, bold designs with solid colors.",
        benefits: [
          "Cost-effective for your design type",
          "Durable matte finish",
          "Great for text and logos",
          "Fast production time",
        ],
      };
    } else if (dtfCount > vinylCount) {
      return {
        method: "DTF Printing",
        color: "from-primary-500 to-accent-500",
        icon: "🔥",
        description: "DTF is your best choice! Perfect for complex, colorful designs with photo-realistic quality.",
        benefits: [
          "Unlimited colors and gradients",
          "Soft, comfortable feel",
          "Photo-realistic quality",
          "Great for detailed artwork",
        ],
      };
    } else {
      return {
        method: "Both Methods Work!",
        color: "from-purple-500 to-pink-500",
        icon: "✨",
        description: "You have flexibility! Both methods can work well for your project. Let's discuss which fits your budget and timeline better.",
        benefits: [
          "Multiple options available",
          "We can recommend the best fit",
          "Flexible pricing options",
          "Contact us for personalized advice",
        ],
      };
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
  };

  const goBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setAnswers(answers.slice(0, -1));
    }
  };

  const result = showResult ? calculateResult() : null;

  return (
    <section
      id="quiz"
      ref={sectionRef}
      className="section-padding bg-white"
    >
      <div className="container-custom">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Not Sure Which <span className="gradient-text">Method to Choose?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Take our quick quiz and we&apos;ll recommend the perfect printing method for&nbsp;your&nbsp;project.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            {!showResult ? (
              <motion.div
                key={currentQuestion}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-2xl p-8 md:p-12"
              >
                {/* Progress Bar */}
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-600">
                      Question {currentQuestion + 1} of {questions.length}
                    </span>
                    <span className="text-sm font-medium text-primary-500">
                      {Math.round(((currentQuestion + 1) / questions.length) * 100)}%
                    </span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                      transition={{ duration: 0.5 }}
                      className="h-full bg-gradient-to-r from-primary-500 to-accent-500"
                    />
                  </div>
                </div>

                {/* Question */}
                <div className="mb-8">
                  <div className="flex items-start space-x-3 mb-6">
                    <HelpCircle className="text-primary-500 flex-shrink-0 mt-1" size={28} />
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                      {questions[currentQuestion].question}
                    </h3>
                  </div>
                </div>

                {/* Options */}
                <div className="space-y-4 mb-8">
                  {questions[currentQuestion].options.map((option, index) => (
                    <motion.button
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => handleAnswer(option.value)}
                      className="w-full p-6 bg-white border-2 border-gray-200 rounded-2xl hover:border-primary-500 hover:bg-primary-50 transition-all text-left group"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-medium text-gray-900 group-hover:text-primary-600">
                          {option.text}
                        </span>
                        <ArrowRight className="text-gray-400 group-hover:text-primary-500 group-hover:translate-x-1 transition-all" size={20} />
                      </div>
                    </motion.button>
                  ))}
                </div>

                {/* Back Button */}
                {currentQuestion > 0 && (
                  <button
                    onClick={goBack}
                    className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <ArrowLeft size={20} />
                    <span>Previous Question</span>
                  </button>
                )}
              </motion.div>
            ) : (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className={`bg-gradient-to-br ${result?.color} rounded-3xl shadow-2xl p-8 md:p-12 text-white`}
              >
                {/* Result Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="text-center mb-8"
                >
                  <div className="text-8xl mb-4">{result?.icon}</div>
                  <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
                    <CheckCircle size={20} />
                    <span className="font-medium">Quiz Complete!</span>
                  </div>
                </motion.div>

                {/* Result Title */}
                <h3 className="text-3xl md:text-4xl font-bold text-center mb-4">
                  We Recommend: {result?.method}
                </h3>

                {/* Description */}
                <p className="text-xl text-white/90 text-center mb-8 max-w-2xl mx-auto">
                  {result?.description}
                </p>

                {/* Benefits */}
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8">
                  <h4 className="font-bold text-lg mb-4">Why this works for you:</h4>
                  <ul className="space-y-3">
                    {result?.benefits.map((benefit, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        className="flex items-start space-x-3"
                      >
                        <CheckCircle className="flex-shrink-0 mt-0.5" size={20} />
                        <span>{benefit}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="#configurator"
                    className="flex-1 text-center px-8 py-4 bg-white text-gray-900 rounded-full hover:bg-gray-100 transition-all font-medium shadow-lg hover:shadow-xl"
                  >
                    Start Your Design
                  </a>
                  <a
                    href="#contact"
                    className="flex-1 text-center px-8 py-4 bg-transparent border-2 border-white text-white rounded-full hover:bg-white/10 transition-all font-medium"
                  >
                    Contact Us
                  </a>
                </div>

                {/* Retake Quiz */}
                <button
                  onClick={resetQuiz}
                  className="w-full mt-6 text-center text-white/80 hover:text-white transition-colors underline"
                >
                  Retake Quiz
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
