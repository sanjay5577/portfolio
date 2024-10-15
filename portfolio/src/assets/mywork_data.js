import project1_img from '../assets/cred_projectimg.PNG'
import project2_img from '../assets/geminichatbot_project.PNG'
import project3_img from '../assets/cryptodesk_projectimg.PNG'
import project4_img from '../assets/botai_projectimg.PNG'
import project5_img from '../assets/Qtify_projectimg.PNG'
import project6_img from '../assets/Qkart_projectimg.PNG'

const mywork_data = [
    {
        w_no:1,
        w_img: project1_img ,
        w_name:"Credit Card Management system",
        w_description : " Built a comprehensive system with a frontend, backend, and database, ensuring seamless user interactions and data management. Developed features for users to add and view credit cards, with validation through the Luhn algorithm on the backend for card verification.",
        w_teckStack : ["Reactjs" , "Intersection Observer API" ,"Nodejs" , "Express" , "SEO"],
        w_demoLink : "https://cred-app-sage.vercel.app",
        w_githubLink: "https://github.com/sanjay5577/cred-app"
    },
    {
        w_no:2,
        w_img:project2_img
        w_name:"Gemini Chatbot",
        w_description : "Seamlessly connected the Gemini API to handle real-time user queries and dynamically fetch responses. Utilized API calls to power the chatbot's data-driven responses, providing users with relevant and contextual information.",
        w_teckStack : ["Reactjs" , "CSS" ,"Vite" , "Gemini API"],
        w_demoLink : "https://gemini-chatbbot.vercel.app",
        w_githubLink: "https://github.com/sanjay5577/gemini-chatbbot"
    },
    {
        w_no:3,
        w_img:project3_img
        w_name:"Cryptodesk",
        w_description : "Integrated CoinGecko API to fetch real-time cryptocurrency data and display dynamic content. Utilized Chart.js to create interactive charts for visualizing cryptocurrency price fluctuations. Enhanced user experience with a responsive design, ensuring seamless use across devices. Optimized search functionality using debouncing to improve performance with minimal API calls.",
        w_teckStack : ["Reactjs" , "CSS" ,"CoinGecko API" , "Chart.js"],
        w_demoLink : "https://x-crypto-desk.vercel.app",
        w_githubLink: "https://github.com/sanjay5577/XCryptoDesk"
        
    },
    {
        w_no:4,
        w_name:"Bot AI",
        w_img:project4_img ,
        w_description : "Developed a scalable chat application enabling multiple simultaneous AI conversations with user feedback.Designed an intuitive interface with floating feedback buttons and a 5-star rating system, leveraging Material UI for a responsive layout. Optimized performance using efficient state management, lazy loading techniques for smooth user experience.",
        w_teckStack : ["Reactjs" , "Material UI" ,"Figma" , "Redux"],
        w_demoLink : "https://x-bot-ai.vercel.app",
        w_githubLink: "https://github.com/sanjay5577/XBotAI"
    },
    {
        w_no:5,
        w_name:"Qtify",
        w_img:project5_img ,
        w_description : "Created modular UI components including Cards, Carousels, and Buttons optimizing for reusability across various sections of the application. Implemented an intuitive genre-based song filtering system using a tab component by modifying the one provided by MaterialUI, allowing users to browse songs by their preferred genre effortlessly.",
        w_teckStack : ["Reactjs" , "Material UI" ,"Figma" , "Swiper Library"],
        w_demoLink : "https://qtify-liart.vercel.app",
        w_githubLink: "https://github.com/sanjay5577/L-square-QTify"
    },
    {
        w_no:6,
        w_name:"Qkart",
        w_img:project6_img ,
        w_description : "Implemented the core logic for authentication, shopping cart and checkout. Improved UI by adding responsive design elements for uniform experience across different devices. Utilized REST APIs to dynamically load and render data served by the backend server.",
        w_teckStack : ["Reactjs" , "CSS" ,"MUI" , "REST APIs" , "Responsive Design"],
        w_demoLink : "https://qkart-frontend-livid.vercel.app/",
        w_githubLink: "https://github.com/sanjay5577/sanjaybms17-ME_QKART_FRONTEND_V2"
    },
]
 
export default mywork_data;