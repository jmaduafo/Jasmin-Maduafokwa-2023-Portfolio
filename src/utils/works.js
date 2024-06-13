const selectedWorks = [
    // {
    //   "id": 1,
    //   "title": "Zaza",
    //   "description": "pretty woman posing",
    //   "year": "2023",
    //   "roles": ["frontend", "creative direction", "web design", "backend"],
    //   "technologies": ["HTML", 'CSS', "React", "Node.js", "Express.js", "MongoDB", "Mongoose", "GraphQL", "Apollo Server", "Cloudinary", "Figma"],
    //   "github": 'jmaduafo/Zaza-Ecommerce-Website',
    //   "link": 'https://quiet-caverns-99335-f8f9f8c7d100.herokuapp.com',
    //   "images": ['https://res.cloudinary.com/dyxxn831a/image/upload/v1691871199/zaza-portfolio_kblowd.png', 'https://res.cloudinary.com/dyxxn831a/image/upload/v1691764188/portfolio%20images/pixie18_11_w6h2vw.jpg'],
    //   "landscapeImage": "https://res.cloudinary.com/dyxxn831a/image/upload/v1697207343/portfolio%20images/fashion-photo-seductive-model-with-perfect-body-posing-tropical-beach-sunset-colots_1_anjx7o.jpg",
    //   "opening": 'The ultimate destination for exquisite lingerie and fragrances that celebrate the essence of femininity.',
    //   "projectDescription": "Our handpicked collection of lingerie, pajamas, bras & panties are thoughtfully designed and selected to complement the customer’s personality and preferences perfectly with a wide array of sizes, styles, and colors.",
    //   "backgroundDescription": "As a group project, I collaborated with two other women in my bootcamp to make Zaza come to life, a full-stack lingerie and fragrance store. Our intention was to create a site geared towards primarily women and female sensuality. The goal was to make the site look real, professional, and authentic and to include stripe for card payments. We each had our own responsibilities in the project, and it was through good communication, frequent updates and meetings, and togetherness that we were able to complete the project by the deadline. In the future, we seek to include men's wear for more inclusivity as well as customer review sections per product displayed."
    // },
    {
      "id": 1,
      "title": "Elysian",
      "description": "a couple laughing and enjoying each other's company",
      "year": "2024",
      "roles": ["frontend", "backend", "creative direction", "web design"],
      "technologies": [ 'Next.js', 'Typescript', 'Supabase', 'Tailwind', 'Shadcn UI', 'Framer Motion', 'GSAP', 'Figma'],
      "github": 'jmaduafo/Rate-Date',
      "link": 'https://rate-date-one.vercel.app/',
      "images": ['https://res.cloudinary.com/dyxxn831a/image/upload/v1718228240/ef4e6c3290e_1_iefhbf.png'],
      "landscapeImage": "https://res.cloudinary.com/dyxxn831a/image/upload/v1718230174/portrait-couple-love-showing-affection_1_rqutsj.jpg",
      "opening": "Whether it's a romantic evening or a casual meetup, keep track of your experiences and make every date count!",
      "projectDescription": "Elysian is a comprehensive web application designed for users to record their romantic and non-romantic dates, schedule future meetups, and plan dates effortlessly. Featuring interactive visual charts to showcase dating activity, Elysians helps users track their social life and stay organized. Additionally, users can share date ideas and post their success or horror dating stories, fostering a community of shared experiences and creativity.",
      "backgroundDescription": "I spearheaded the design, front-end, and back-end development of Elysian, tackling each problem systematically and breaking tasks into manageable pieces. This methodical approach ensured that each feature was developed efficiently and effectively, from creating a seamless user interface with engaging design elements to implementing robust backend functionalities for data management. Throughout the project, I relished the challenges and enjoyed the creative process, ultimately delivering a dynamic and user-friendly web application."
    },
    {
      "id": 2,
      "title": "Sylvan Home",
      "description": "a boho bedroom by the sunlight",
      "year": "2023",
      "roles": ["frontend", "backend", "creative direction", "web design"],
      "technologies": ["React", "Tailwind", "CSS", "Firebase", "Redux", "Node.js", "Express.js", "Stripe", "Heroku", "Framer Motion", "Locomotive Scroll", "GSAP", "Cloudinary", "Figma"],
      "github": 'jmaduafo/Sylvan',
      "link": 'https://sylvan-127ad.web.app/',
      "images": ['https://res.cloudinary.com/dyxxn831a/image/upload/v1702327798/Sylvan/78e4aec7150_bftsqe.png', 'https://res.cloudinary.com/dyxxn831a/image/upload/v1691764188/portfolio%20images/pixie18_11_w6h2vw.jpg'],
      "landscapeImage": "https://res.cloudinary.com/dyxxn831a/image/upload/v1700326898/Sylvan/2150794095_ttypcx.jpg",
      "opening": 'The ultimate destination for exquisite luxury furniture to make your home shine.',
      "projectDescription": "Our curated collections are meticulously designed to transform living spaces into havens of sophistication. At Sylvan, we hold a steadfast commitment to customer satisfaction, understanding that every home is unique.",
      "backgroundDescription": "Taking on the challenge of crafting Sylvan Home Furniture, I assumed both the design and development roles for this full-stack ecommerce site that centered around luxury furniture. Utilizing an array of coding languages, I ensured a robust technical foundation. Opting for a subtle 2D animation approach, the user experience was dynamically enriched without overwhelming simplicity. Prior to the development phase, Figma served as my design blueprint, ensuring that aesthetics seamlessly merged with functionality. The project, from conceptualization to execution, wrapped up within 2.5 weeks. Collaborating closely with Firebase, data integrity and user authentication were meticulously handled, contributing to the seamless functioning of Sylvan Home Furniture."
    },
    {
      "id": 3,
      "title": "Oracle",
      "description": "three men having fun at a party",
      "year": "2024",
      "roles": ["frontend", "creative direction", "web design"],
      "technologies": ["Next.js", "TypeScript", "Tailwind", "GSAP", "Framer Motion", "Figma"],
      "github": 'jmaduafo/Oracle',
      "link": 'https://oracle-beryl.vercel.app/',
      "images": ['https://res.cloudinary.com/dyxxn831a/image/upload/v1715719975/oracle%20music/4a52b8b515d_1_pcnxvu.png'],
      "landscapeImage": "https://res.cloudinary.com/dyxxn831a/image/upload/v1709831073/oracle%20music/mula1_sd8rt5.jpg",
      "opening": "Where we amplify the voices of the marginalized and the overlooked through the power of music.",
      "projectDescription": "This website is a platform dedicated to representing those who are often silenced or dismissed, offering a space where their stories, struggles, and triumphs are celebrated through compelling melodies and lyrics, representing genres in Afro beats, hip hop, and more.",
      "backgroundDescription": "As part of a freelance project for a new music company dedicated to representing marginalized voices, I took on the challenge of developing and designing their website from start to finish. Drawing upon my expertise in web development and design, I crafted a platform that not only showcased the company's mission and values but also provided a seamless user experience for visitors. From conceptualization to implementation, I worked diligently to ensure that every aspect of the website reflected the company's commitment to amplifying the voices of the overlooked and marginalized. Through thoughtful design choices, intuitive navigation, and engaging multimedia content, I created a digital space where their music could shine and their message could resonate with audiences worldwide."
    },
    {
      "id": 4,
      "title": "Lofi Train",
      "description": "lofi calm cozy wallpaper",
      "year": "2023",
      "roles": ["frontend", "creative direction", "web design"],
      "technologies": ['React', 'SASS', 'Javascript', 'Figma'],
      "github": 'jmaduafo/Lofi-Train',
      "link": 'https://jmaduafo.github.io/Lofi-Train/',
      "images": ["https://res.cloudinary.com/dyxxn831a/image/upload/v1691879530/lofi-train-portfolio_grnclr.png", "https://res.cloudinary.com/dyxxn831a/image/upload/v1691879975/anime-lo-fi-wallpapers-61349-2121027-9311619_qpd2ke.jpg"],
      "landscapeImage": "https://res.cloudinary.com/dyxxn831a/image/upload/v1691764928/portfolio%20images/lofi-art-style-8k-image-landscape-generative-ai-free-photo_mrdkvk.jpg",
      "opening": 'Peace and serenity is the key to mental stability and brighter skin.',
      "projectDescription": "Ever wish that you could go to a place to destress from a long day of work, school, or life? This application is a great place to not only listen to cozy, lofi music but also gives you the opportunity to customize the site to fit your vibe, making it your own personal safe space.",
      "backgroundDescription": "Lofi Train is a personal side project that's surrounded by one of my favorite hobbies: music, specifically lofi music. Lofi brings a calm, serene energy that helps to balance out mental strain, especially when going through a stressful time or being absorbed in work. I wanted there to be a place for users to be absorbed in that feeling of inner peace that can mediate their feelings of stress. I was inspired by Rainmeter and wanted to create a similar aesthetic, thus Lofi Train was born."
    }
  ]

  module.exports = selectedWorks;