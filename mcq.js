const quizData = [
    {
           image: 'path/to/image1.jpg',
           question: '1. XYZ Pvt. Ltd., a small software development company, entered into a contract with a local business for developing a customized software solution. The local business paid an advance of 50% of the project cost upfront. However, after receiving the payment, the management at XYZ Pvt. Ltd. deliberately delayed the project, eventually providing a substandard product that did not meet the agreed-upon specifications. When the local business requested a refund or corrections, XYZ Pvt. Ltd. refused to comply and ceased communication. The local business then took legal action against XYZ Pvt. Ltd., accusing them of deceit and breach of trust.\n\nQuestion: Under which section of the Indian Penal Code (IPC) could XYZ Pvt. Ltd. be charged for cheating and dishonestly inducing delivery of property?',
           options: ["a. article 21", "b. article 420", "c. article 330", "d. article 50"],
           correct: 1
       },
     {
           image: 'path/to/image2.jpg',
           question: '2. John, a resident of India, was accused of a crime and arrested by the police. During the investigation, the police pressured him to confess to the crime, threatening him with severe consequences if he didn\’t comply. Despite the pressure, John refused to confess, knowing his rights. The case eventually went to trial, where John\'s lawyer argued that the police had violated his constitutional rights by attempting to force a confession. The court upheld John\'s rights, stating that no person can be compelled to be a witness against themselves, and any confession obtained under duress is inadmissible in court.                                                                                                          \n\n                     Question: Which article of the Indian Constitution protects John from being compelled to testify against himself?',
           options: ["a. article 50", "b. article 14", "c. article 8", "d. article 20"],
           correct: 3
       },
     {
           image: 'path/to/image3.jpg',
           question: '3. Ravi, a teacher in a government school, noticed that many students were not respecting the national symbols during the morning assembly. They would talk during the national anthem and were often careless about the flag hoisting ceremony. Concerned, Ravi decided to conduct special classes to educate the students about the importance of respecting national symbols and their duties as citizens of India. He emphasized that respecting the national flag and anthem is not just about following rules but about fulfilling one\s duties as a responsible citizen. After these sessions, the students began to show more respect during the assembly, understanding the significance of their actions.                                          \n\n             Question: Which article of the Indian Constitution outlines the fundamental duties, including respecting the national flag and anthem?',
           options: ["a. 51A", "b. 51B", "c. 19", "d. 30"],
           correct: 0
       },
      {
           image: 'path/to/image4.jpg',
           question: '4. In 1975, the President of India, on the advice of the Prime Minister, declared a state of National Emergency due to a perceived threat to the country\'s security following widespread internal disturbances. During this period, civil liberties were significantly curtailed, and the central government assumed greater control over the states. The press was heavily censored, political opponents were arrested, and many constitutional rights were suspended. This period of emergency lasted for 21 months, and it had a profound impact on Indian democracy.                                        \n\n  Question: Under which article of the Indian Constitution can the President declare a National Emergency?',
           options: ["a. article 300", "b. article 325", "c. article 352", "d. article 301"],
           correct: 2
       },
     {
           image: 'path/to/image5.jpg',
           question: '5. Anita, a qualified engineer, applied for a job at a government-run company. Despite having better qualifications and experience than other candidates, she was not selected because the company had an unofficial policy of favoring male candidates for technical roles. Feeling that she was discriminated against solely based on her gender, Anita decided to file a lawsuit against the company, arguing that her right to equality had been violated. The court ruled in her favor, stating that every citizen has the right to be treated equally before the law, regardless of gender.                     \n\n       Question: Which article of the Indian Constitution guarantees the right to equality and prohibits discrimination based on gender',
           options: ["a. article 10", "b. article 8", "c. article 14", "d. article 12"],
           correct: 2
       },
     {
           image: 'path/to/image6.jpg',
           question: '6. Mr. Sharma owned a piece of agricultural land that had been in his family for generations. One day, he received a notice from the government stating that his land was being acquired for a new infrastructure project. However, the notice did not provide any compensation or justification for the acquisition. Mr. Sharma felt this was unfair and decided to challenge the government\'s decision in court, arguing that his right to property had been violated. The court agreed with Mr. Sharma, ruling that the government could not take possession of his property without providing adequate compensation as mandated by the Constitution.                                                                                                                    \n\n  Question: Which article of the Indian Constitution protects an individual\'s right to property and ensures that no person shall be deprived of their property except by authority of law?',
           options: ["a. article 300A", "b. article 310", "c. article 318", "d. article 300B"],
           correct: 0
       },
     {
           image: "path/to/image7.jpg",
           question: "7. In a small town in India, two families from different religious communities became embroiled in a legal dispute over inheritance. The laws governing inheritance for each community were different, leading to conflicting claims over the property. The dispute highlighted the challenges posed by having separate personal laws for different religious communities. Some local leaders began advocating for a uniform civil code (UCC) that would apply to all citizens, regardless of religion, to ensure equality and consistency in legal matters like marriage, divorce, and inheritance. They argued that a UCC would promote national integration and protect individual rights.                                                                            \n\n        Question: Which article of the Indian Constitution encourages the state to implement a Uniform Civil Code (UCC) for all citizens",
           options: ["a. article 40", "b. article 44", "c. article 55", "d. article 56"],
           correct: 1
       },
     {
           image: 'path/to/image8.jpg',
           question: '8. Priya, a devout follower of her faith, worked at a private company that suddenly implemented a new dress code prohibiting all employees from wearing any religious symbols or attire. This policy directly conflicted with Priya\'s religious practice of wearing a specific headscarf. She approached the management to explain that the headscarf was an essential part of her religious identity and that the policy violated her freedom to practice her religion. When the company refused to accommodate her request, Priya filed a legal complaint, claiming that her right to freely practice and express her religion was being infringed upon.                                                                                                          \n\n          Question: Which article of the Indian Constitution protects an individual\'s right to freely practice and propagate their religion?',
           options: ['a. article 30', 'b. article 16', 'c. article 25', 'd. article 29'],
           correct: 2
       },
    {
           image: 'path/to/image9.jpg',
           question: '9. Amit, a young boy from a rural village, was denied admission to the local government school because his parents could not afford to pay additional fees that were being unlawfully charged by the school administration. His parents, unaware of their rights, accepted this decision until a local NGO intervened. The NGO informed them that every child in India between the ages of 6 and 14 has the constitutional right to free and compulsory education. With the NGO\'s help, Amit\'s parents filed a complaint against the school, and Amit was eventually admitted without any additional charges.            \n\n      Question: Which article of the Indian Constitution guarantees the right to free and compulsory education for children aged 6 to 14 years?',
           options: ['a. article 20B', 'b. article 21B', 'c. article 33A', 'd. article 21A'],
           correct: 3
       },
     {
           image: 'path/to/image10.jpg',
           question: '10. Rohit, a software engineer, discovered that a mobile app he was using had been collecting and sharing his personal data, including his location and contact details, without his explicit consent. The app had buried the consent for data collection deep within its terms and conditions, making it difficult for users to understand what they were agreeing to. Concerned about the misuse of his personal information, Rohit filed a petition in court, arguing that his right to privacy had been violated. The court ruled in his favor, emphasizing that the right to privacy is a fundamental right protected by the Constitution, and that any data collection must be done transparently and with informed consent.                                    \n\n             Question: Which article of the Indian Constitution has been interpreted to include the right to privacy as a fundamental right?',
           options: ['a. article 21', 'b. article 22', 'c. article 38', 'd. article 33'],
           correct: 0
       },
    {
           image: 'path/to/image11.jpg',
           question: '11. In a local election in India, Suresh, an 18-year-old first-time voter, arrived at the polling station only to be told by the officials that his name was not on the electoral roll. Despite having registered to vote months in advance and receiving confirmation, he was denied the right to vote. Suresh felt that his fundamental right to vote had been unjustly taken away. He decided to take the matter to the district election office, arguing that he met all the legal requirements to vote and that being denied this right was a violation of his constitutional rights.                      \n\n                   Question: Which article of the Indian Constitution grants citizens the right to vote in elections?',
           options: ['a. article 420', 'b. article 330', 'c. article 325', 'd. article 326'],
           correct: 3
       },
     {
           image: 'path/to/image12.jpg',
           question: '12. Meera, an employee at a large corporate firm, was consistently subjected to verbal harassment by her supervisor because of her gender. Despite her qualifications and hard work,she was often belittled, given menial tasks, and denied opportunities for advancement. When Meera reported the harassment to the HR department, her complaints were dismissed without proper investigation. Feeling that she was being treated unfairly and discriminated against because she was a woman, Meera filed a lawsuit against the company. She claimed that her right to equality, which ensures equal protection under the law and prohibits discrimination, had been violated.                                                                                          \n\n        Question: Which article of the Indian Constitution ensures equality before the law and prohibits discrimination based on gender?',
           options: ['a. article 14', 'b. article 21', 'c. article 22', 'd. article 12'],
           correct: 0
       },
    {
           image: 'path/to/image13.jpg',
           question: '13. In a recent incident, a young girl named Aisha was abducted from her home in Delhi by individuals who had no legal right to her custody. The kidnappers took her to a different state, intending to demand ransom from her parents. The authorities were alerted when Aisha’s family reported the abduction, and a nationwide search was initiated. The police eventually located Aisha and arrested the kidnappers. The case highlighted the legal procedures and protections related to kidnapping and abduction, emphasizing the need for swift and effective action to safeguard individuals from unlawful confinement.                                                                                                                                      \n\n            Question: Which section of the Indian Penal Code deals specifically with the kidnapping of individuals from India?',
           options: ['a. article 225', 'b. article 360', 'c. article 220', 'd. article 355'],
           correct: 1
       },
     {
           image: 'path/to/image14.jpg',
           question: '14. Sita, a young woman, was married to Rajesh, and shortly after the marriage, Rajesh and his family began demanding additional dowry from Sita\'s parents. Despite repeated promises to fulfill their demands, Rajesh and his family subjected Sita to constant harassment and cruelty. One day, Sita was found dead under suspicious circumstances, with clear signs of abuse. Her family alleged that the death was a result of the ongoing dowry harassment and filed a complaint with the police. The investigation revealed that Sita\'s death was linked to the dowry demands and harassment she had endured.         \n\n Question: Which section of the Indian Penal Code addresses dowry death and penalizes the husband or his family if a woman is found dead under suspicious circumstances related to dowry harassment?',
           options: ['a. section 300', 'b. section 301A', 'c. section 304A', 'd. section 304B'],
           correct: 3
       },
    {
           image: 'path/to/image15.jpg',
           question: '15. In a busy marketplace, Ravi was approached by a group of individuals who violently threatened him with a weapon and demanded his wallet and phone. Fearing for his life, Ravi handed over his belongings. The perpetrators then fled the scene, leaving Ravi injured and traumatized. The police quickly began an investigation, and with the help of eyewitnesses and surveillance footage, they were able to apprehend the culprits. Ravi later identified them, and they were charged with robbery.                                                                                           \n\n      Question: Which section of the Indian Penal Code defines robbery and addresses crimes involving theft committed with violence or the threat of violence?',
           options: ['a. section 395', 'b. section 390', 'c. section 300', 'd. section 303'],
           correct: 1
       },
     {
           image: 'path/to/image16.jpg',
           question: '16. Ravi and Sunil were involved in a heated argument over a business deal. In a fit of rage, Ravi picked up a sharp knife from the table and stabbed Sunil multiple times. Sunil succumbed to his injuries on the spot. Ravi immediately fled the scene but was later caught by the police based on eyewitness accounts. The court charged Ravi under Section 302.\n\n Question: What is Ravi most likely to be charged with under Section 302 IPC?',
           options: ['A. Theft', 'B. Cheating', 'C. Murder', 'D. Defamation'],
           correct: 2
       },
   {
           image: 'path/to/image17.jpg',
           question: '17. Ravi decided to rob a local grocery store late at night. He entered the store when the owner was alone and threatened him with a gun. Ravi demanded all the cash from the register and took some valuable items from the shop. The police caught Ravi the next day based on the owner\’s description and CCTV footage. Ravi was charged under Sections 390 to 402 of the Indian Penal Code.\n\n Question: Under Sections 390 to 402 IPC, what offense is Ravi most likely to be charged with?',
           options: ['A. Assault', 'B. Robbery', 'C. Extortion', 'D. Trespassing'],
           correct: 1
       },
   
      ];
   
   let currentQuestion = 0;
   let score = 0;
   let selectedOption = null;
   
   document.addEventListener('DOMContentLoaded', loadQuestion);
   
   function loadQuestion() {
       const questionData = quizData[currentQuestion];
       document.getElementById('question-image').src = questionData.image;
       document.getElementById('question').innerText = questionData.question;
   
       const optionsContainer = document.getElementById('options-container');
       optionsContainer.innerHTML = '';
       questionData.options.forEach((option, index) => {
           const optionElement = document.createElement('div');
           optionElement.className = 'option';
           optionElement.innerText = option;
           optionElement.addEventListener('click', () => selectOption(index, optionElement));
           optionsContainer.appendChild(optionElement);
       });
   }
   
   function selectOption(index, element) {
       const options = document.getElementsByClassName('option');
       for (let opt of options) {
           opt.classList.remove('selected');
       }
       element.classList.add('selected');
       selectedOption = index;
   }
   
   function nextQuestion() {
       if (selectedOption === null) {
           alert("Please select an option before proceeding.");
           return;
       }
   
       if (selectedOption === quizData[currentQuestion].correct) {
           score++;
       }
   
       currentQuestion++;
   
       if (currentQuestion < quizData.length) {
           loadQuestion();
           selectedOption = null;
       } else {
           showScore();
       }
   }
   
   function showScore() {
       document.getElementById('quiz-container').style.display = 'none';
       document.getElementById('score-container').style.display = 'block';
       document.getElementById('score').innerText = `Your score is ${score} out of ${quizData.length}`;
   }