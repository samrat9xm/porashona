// creating an array and passing the number, questions, options, and answers
let questions = [{
    numb: 1,
    question: "অ্যারিস্টোটল কোন দেশের অধিবাসী ছিলেন?",
    answer: "গ্রীস",
    options: [
        "জার্মানি",
        "গ্রীস",
        "আমেরিকা",
        "ফ্রান্স"
    ]
}, {
    numb: 2,
    question: "জীববিজ্ঞানের জনক কে?",
    answer: "অ্যারিস্টোটল",
    options: [
        "পিথাগোরাস",
        "ডেমোক্রিটাস",
        "অ্যারিস্টোটল",
        "নিউটন"
    ]
}, {
    numb: 3,
    question: "জীববিজ্ঞানের প্রধান দুটি শাখা কি কি?",
    answer: "উদ্ভিদ ও প্রাণী",
    options: [
        "জড় ও জীব",
        "কৃষি ও বল",
        "উদ্ভিদ ও প্রাণী",
        "পদার্থ ও রসায়ন"
    ]
}, {
    numb: 4,
    question: "নিচের কোনটি ভৌত জীববিজ্ঞান এর অন্তর্ভুক্ত বিষয়?",
    answer: "ট্যাক্সোনমি",
    options: [
        "জিন প্রযুক্তি",
        "প্রাণরসায়ন",
        "পরজীবী বিদ্যা",
        "ট্যাক্সোনমি"
    ]
}, {
    numb: 5,
    question: "জীব দেহের বিভিন্ন অঙ্গ প্রত্যঙ্গের জৈব-রাসায়নিক কার্যাদি আলোচিত হয় কোন শাখায়?",
    answer: "শারীর বিদ্যা",
    options: [
        "শারীর বিদ্যা",
        "জীব ভূগোল",
        "বিবর্তনবিদ্যা",
        "ভ্রূণবিদ্যা"
    ]
}, {
    numb: 6,
    question: "কোন শাখায় টিস্যুর গঠন বিন্যাস ও কার্যাবলী আলোচনা হয়?",
    answer: "হিস্টলজি",
    options: [
        "এমব্রায়োলজি",
        "হিস্টলজি",
        "সাইটোলজি",
        "ইকোলজি"
    ]
}, {
    numb: 7,
    question: "এন্ডোক্রাইনোলজি তে কি নিয়ে আলোচনা করা হয়?",
    answer: "হরমোন",
    options: [
        "এনজাইম",
        "হরমোন",
        "যকৃত",
        "কোষ"
    ]
}, {
    numb: 8,
    question: "জীববিজ্ঞানের কোন শাখায় কীটপতঙ্গ নিয়ে আলোচনা করা হয়?",
    answer: "এন্টোমলজি",
    options: [
        "এন্টোমলজি",
        "ইকোলজি",
        "এন্ডোক্রাইনোলজি",
        "মাইক্রোবায়োলজি"
    ]
}, {
    numb: 9,
    question: "ভাইরাস ব্যাকটেরিয়া ছত্রাক সম্পর্কে জানা যায় কোন বিজ্ঞানে?",
    answer: "অনুজীববিজ্ঞান",
    options: [
        "পরজীবী বিদ্যা",
        "কোষ বিদ্যা",
        "কীটতত্ত্ব",
        "অনুজীববিজ্ঞান"
    ]
}, {
    numb: 10,
    question: "জীব জগতকে পাইপ কিংডমে ভাগ করার প্রস্তাব করেন কে?",
    answer: "আর এইচ হুইটটেকার",
    options: [
        "ক্যারোলাস লিনিয়াস",
        "বেনথাম ও হুকার",
        "আর এইচ হুইটটেকার",
        "মারগুলিস"
    ]
}, {
    numb: 11,
    question: "কোন রাজ্যের জীব কোষে নিউক্লিওলাস ও নিউক্লিয়ার পর্দা অনুপস্থিত?",
    answer: "মনেরা",
    options: [
        "মনেরা",
        "প্রোটিস্টা",
        "ফানজাই",
        "প্লান্টি"
    ]
}, {
    numb: 12,
    question: "নীলাভ সবুজ শৈবাল কোন রাজ্যের জীব?",
    answer: "মনেরা",
    options: [
        "মনেরা",
        "প্রোটিস্টা",
        "ফানজাই",
        "প্লান্টি"
    ]
}, {
    numb: 13,
    question: "কোনটি প্রোটিস্টা রাজ্যের অন্তর্ভুক্ত?",
    answer: "ডায়াটম",
    options: [
        "ব্যাকটেরিয়া",
        "ডায়াটম",
        "ঈস্ট",
        "মাশরুম"
    ]
},
    /* {
         numb: 14 ,
            question:
               answer:
                  options: [
   ]
      },{
         numb: 15 ,
            question:
               answer:
                  options: [
   ]
      },{
         numb: 16 ,
            question:
               answer:
                  options: [
   ]
      },{
         numb: 17 ,
            question:
               answer:
                  options: [
   ]
      },{
         numb: 18 ,
            question:
               answer:
                  options: [
   ]
      },{
         numb: 19 ,
            question:
               answer:
                  options: [
   ]
      },{
         numb: 20 ,
            question:
               answer:
                  options: [
   ]
      },{
         numb: 21 ,
            question:
               answer:
                  options: [
   ]
      },{
         numb: 22 ,
            question:
               answer:
                  options: [
   ]
      },{
         numb: 23 ,
            question:
               answer:
                  options: [
   ]
      },{
         numb: 24  ,
            question:
               answer:
                  options: [
   ]
      },{
         numb: 25 ,
            question:
               answer:
                  options: [
   ]
      }, */
    // you can uncomment the below codes and make duplicate as more as you want to add question
    // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....

    //   {
    //   numb: 6,
    //   question: "Your Question is Here",
    //   answer: "Correct answer of the question is here",
    //   options: [
    //     "Option 1",
    //     "option 2",
    //     "option 3",
    //     "option 4"
    //   ]
    // },
];