export const statusOptions = [
  { value: "Status", label: "Status" },
  { value: "Completed", label: "Completed" },
  { value: "Ongoing", label: "Ongoing" },
  { value: "Paused", label: "Paused" },
];

export const researchTypeOptions = [
  { value: "Research Type", label: "Research Type" },
  { value: "Survey", label: "Survey" },
  { value: "Interview", label: "Interview" },
  { value: "Focus group", label: "Focus group" },
  { value: "Ethnographic observation", label: "Ethnographic observation" },
  { value: "A/B Testing", label: "A/B Testing" },
  { value: "Usability Test", label: "Usability Test" },
  { value: "Voice from the street", label: "Voice from the street" },
  { value: "Tree Testing", label: "Tree Testing" },
];

export const timePeriodOptions = [
  { value: "This Year", label: "This Year" },
  { value: "Last week", label: "Last week" },
  { value: "Last month", label: "Last month" },
  { value: "Last 3 months", label: "Last 3 months" },
  { value: "Last 6 months", label: "Last 6 months" },
  { value: "Last 2 years", label: "Last 2 years" },
  { value: "Last 3 years", label: "Last 3 years" },
];

export const filterOptions = [
  { value: "Filter", label: "Filter" },
  { value: "Status", label: "Status" },
  { value: "This Year", label: "This Year" },
];

export const ResearchPageData = [
  {
    id: 1,
    status: "completed",
    title: "Product validation research",
    researchType: "survey",
    numberReached: "50",
    amountSpent: "₦5000",
    date: "Last week",
  },
  {
    id: 2,
    status: "paused",
    title: "Product marketing research",
    researchType: "interview",
    numberReached: "32",
    amountSpent: "₦2500",
    date: "Last month",
  },
  {
    id: 3,
    status: "ongoing",
    title: "Product validation research",
    researchType: "survey",
    numberReached: "50",
    amountSpent: "₦14000",
    date: "Last 2 years",
  },
];

// Draft table
export const headings = {
  Title: {
    text: "Title",
  },
  Summary: {
    text: "Summary",
  },
  LastEdited: {
    text: "Last Edited",
  },
};

export const draftTableData = {
  body: [
    {
      Title: `The impact of covid-19 on the tourism industry`,
      Summary: `This research paper explores the impact ot COVID-19 on the global tourism industry. including changes in consumer behavior, travel restrictions, and the long-term economic consequences`,
      LastEdited: `March 15, 2022`,
    },
    {
      Title: `A comparative study ot renewable energy policies in Europe`,
      Summary: `This research project examines the effectiveness of renewable energy policies in European countries, with a focus on government subsidies, regulatory frameworks, and public awareness campaigns`,
      LastEdited: `June 4, 2022`,
    },
    {
      Title: `The role of artificial intelligence in healthcare diagnostics`,
      Summary: `This academic article reviews recent advancements in AI technology for medical imaging. patient data analysis, and disease diagnosis accuracy, highlighting potential benefits and ethical considerations for healthcare providers and patients.`,
      LastEdited: `Jan 4, 2022`,
    },
  ],
};

// Tailwind theme switch function
export const switchTheme = (lightColor, darkColor, theme) => {
  return theme === "light" ? lightColor : darkColor;
};
export const darkTheme = "bg-[#201F24]";

export const fieldOptions = [
  { value: "Advertising and Marketing", label: "Advertising and Marketing" },
  { value: "Agriculture", label: "Agriculture" },
  { value: "Automotive", label: "Automotive" },
  { value: "Consumer Packaged Goods", label: "Consumer Packaged Goods" },
  { value: "Educations", label: "Educations" },
  { value: "Energy", label: "Energy" },
  {
    value: "Engineering, Construction, and Real Estate",
    label: "Engineering, Construction, and Real Estate",
  },
  { value: "Financial Services", label: "Financial Services" },
  { value: "Game Tech", label: "Game Tech" },
  { value: "Government", label: "Government" },
  {
    value: "Healthcare and Life Sciences",
    label: "Healthcare and Life Sciences",
  },
  { value: "Manufacturing", label: "Manufacturing" },
  { value: "Media and Entertainment", label: "Media and Entertainment" },
  { value: "Mining", label: "Mining" },
  { value: "Nonprofit", label: "Nonprofit" },
  { value: "Power and Utilities", label: "Power and Utilities" },
  { value: "Retail", label: "Retail" },
  {
    value: "Technology, Software, or Services",
    label: "Technology, Software, or Services",
  },
  { value: "Telecommunications", label: "Telecommunications" },
  { value: "Travel and Hospitality", label: "Travel and Hospitality" },
  { value: "Law", label: "Law" },
  { value: "Other", label: "Other" },
];

export const insigthGridCard = [
  { label: "Total views", value: "53" },
  { label: "Completed Responses", value: "38" },
  { label: "Partially completed", value: "12" },
  { label: "Average completion time", value: "10mins" },
  { label: "Number of devices", value: "8" },
  { label: "completion rate", value: "88%" },
];

// TotalResponse table head
export const TotalResponseHeading = {
  perDay: {
    text: "Per Day",
  },
  responses: {
    text: "No of Responses",
  },
  perState: {
    text: "Per State",
  },
};

// TotalResponse table body
export const TotalResponseBody = [
  {
    perDay: `1st March 2024`,
    responses: `5`,
    perState: `2`,
  },
  {
    perDay: `2nd March 2024`,
    responses: `8`,
    perState: `3`,
  },
  {
    perDay: `3rd March 2024`,
    responses: `12`,
    perState: `4`,
  },
];

// Insights Response Placeholder Data

export const ResponseByParticipants = [
  {
    avatar: "/actokuyt/sky-avatar.png",
    name: "Skyrose",
    date: "Dec 15, 2023",
    time: "5:31pm",
    duration: "7mins",
    questions: [
      {
        type: "Multiple Choice",
        question:"What's your favourite color?",
        answer: "Yellow Orange and Purple",
      },
      {
        type: "Multiple Choice",
        question:"What's your favourite color?",
        answer: "Yellow Orange and Purple",
      },
      {
        type: "Multiple Choice",
        question:"What's your favourite color?",
        answer: "Yellow Orange and Purple",
      },
    ],
  },
  {
    avatar: "/actokuyt/mul-avatar.png",
    name: "Multilelo",
    date: "Dec 15, 2023",
    time: "5:31pm",
    duration: "7mins",
    questions: [
      {
        type: "Multiple Choice",
        question:"What's your favourite color?",
        answer: "Yellow Orange and Purple",
      },
      {
        type: "Multiple Choice",
        question:"What's your favourite color?",
        answer: "Yellow Orange and Purple",
      },
      {
        type: "Multiple Choice",
        question:"What's your favourite color?",
        answer: "Yellow Orange and Purple",
      },
    ],
  },
  {
    avatar: "/actokuyt/mike-avatar.png",
    name: "Mike",
    date: "Dec 15, 2023",
    time: "5:31pm",
    duration: "7mins",
    questions: [
      {
        type: "Multiple Choice",
        question:"What's your favourite color?",
        answer: "Yellow Orange and Purple",
      },
      {
        type: "Multiple Choice",
        question:"What's your favourite color?",
        answer: "Yellow Orange and Purple",
      },
      {
        type: "Multiple Choice",
        question:"What's your favourite color?",
        answer: "Yellow Orange and Purple",
      },
    ],
  },
];

export const ResponseByQuestions = [
  {
    title: "Question 1",
    averageTime: "32secs",
    question: "What do you think about the homepage?",
    participants: [
      {
        participant: "Skyrose",
        avatar: "/actokuyt/sky-avatar.png",
        answer: "I like the the layout of the homepage, it's simple and easy to navigate",
        date: "dec 15, 2023",
        time: "5:31pm"
      },
      {
        participant: "Multilelo",
        avatar: "/actokuyt/mul-avatar.png",
        answer: "I like the the layout of the homepage, it's simple and easy to navigate",
        date: "dec 15, 2023",
        time: "5:31pm"
      },
      {
        participant: "Mike",
        avatar: "/actokuyt/mike-avatar.png",
        answer: "I like the the layout of the homepage, it's simple and easy to navigate",
        date: "dec 15, 2023",
        time: "5:31pm"
      },
    ]
  },
  {
    title: "Question 2",
    averageTime: "32secs",
    question: "What do you think about the homepage?",
    participants: [
      {
        participant: "Skyrose",
        avatar: "/actokuyt/sky-avatar.png",
        answer: "I like the the layout of the homepage, it's simple and easy to navigate",
        date: "dec 15, 2023",
        time: "5:31pm"
      },
      {
        participant: "Multilelo",
        avatar: "/actokuyt/mul-avatar.png",
        answer: "I like the the layout of the homepage, it's simple and easy to navigate",
        date: "dec 15, 2023",
        time: "5:31pm"
      },
      {
        participant: "Mike",
        avatar: "/actokuyt/mike-avatar.png",
        answer: "I like the the layout of the homepage, it's simple and easy to navigate",
        date: "dec 15, 2023",
        time: "5:31pm"
      },
    ]
  },
  {
    title: "Question 3",
    averageTime: "32secs",
    question: "What do you think about the homepage?",
    participants: [
      {
        participant: "Skyrose",
        avatar: "/actokuyt/sky-avatar.png",
        answer: "I like the the layout of the homepage, it's simple and easy to navigate",
        date: "dec 15, 2023",
        time: "5:31pm"
      },
      {
        participant: "Multilelo",
        avatar: "/actokuyt/mul-avatar.png",
        answer: "I like the the layout of the homepage, it's simple and easy to navigate",
        date: "dec 15, 2023",
        time: "5:31pm"
      },
      {
        participant: "Mike",
        avatar: "/actokuyt/mike-avatar.png",
        answer: "I like the the layout of the homepage, it's simple and easy to navigate",
        date: "dec 15, 2023",
        time: "5:31pm"
      },
    ]
  },
  {
    title: "Question 4",
    averageTime: "32secs",
    question: "What do you think about the homepage?",
    participants: [
      {
        participant: "Skyrose",
        avatar: "/actokuyt/sky-avatar.png",
        answer: "I like the the layout of the homepage, it's simple and easy to navigate",
        date: "dec 15, 2023",
        time: "5:31pm"
      },
      {
        participant: "Multilelo",
        avatar: "/actokuyt/mul-avatar.png",
        answer: "I like the the layout of the homepage, it's simple and easy to navigate",
        date: "dec 15, 2023",
        time: "5:31pm"
      },
      {
        participant: "Mike",
        avatar: "/actokuyt/mike-avatar.png",
        answer: "I like the the layout of the homepage, it's simple and easy to navigate",
        date: "dec 15, 2023",
        time: "5:31pm"
      },
    ]
  },
  {
    title: "Question 5",
    averageTime: "32secs",
    question: "What do you think about the homepage?",
    participants: [
      {
        participant: "Skyrose",
        avatar: "/actokuyt/sky-avatar.png",
        answer: "I like the the layout of the homepage, it's simple and easy to navigate",
        date: "dec 15, 2023",
        time: "5:31pm"
      },
      {
        participant: "Multilelo",
        avatar: "/actokuyt/mul-avatar.png",
        answer: "I like the the layout of the homepage, it's simple and easy to navigate",
        date: "dec 15, 2023",
        time: "5:31pm"
      },
      {
        participant: "Mike",
        avatar: "/actokuyt/mike-avatar.png",
        answer: "I like the the layout of the homepage, it's simple and easy to navigate",
        date: "dec 15, 2023",
        time: "5:31pm"
      },
    ]
  },
]



export const surveyQuestions = [
  {
    id: 1,
    question: "What is your favorite color?",
    options: ["Red", "Blue", "Green", "Yellow","Orange"],
    type: "multiple-choice",
  },
  {
    id: 2,
    question: "How often do you exercise?",
    options: ["Daily", "Weekly", "Monthly", "Rarely","Daily", "Weekly", "Monthly", "Rarely"],
    type: "multiple-choice",
  },
  {
    id: 3,
    question: "What is your preferred mode of communication?",
    options: ["Email", "Phone", "Text Message", "In-person"],
    type: "multiple-choice",
  },
  {
    id: 4,
    question: "Which type of cuisine do you prefer?",
    options: ["Italian", "Chinese", "Mexican", "Indian"],
    type: "multiple-choice",
  },
  {
    id: 5,
    question: "What is your favorite season?",
    options: ["Spring", "Summer", "Autumn", "Winter"],
    type: "multiple-choice",
  },
];