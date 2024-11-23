class TechComponent extends HTMLElement {
    constructor() {
        super();
        this.newsIndex = 0;  // Default news index is set to 0
    }

    // Lifecycle method that runs when the component is added to the DOM
    connectedCallback() {
        // Retrieve the news index from the 'news-index' attribute
        this.newsIndex = parseInt(this.getAttribute('news-index')) || 0;
        
        // Generate HTML content based on the specific news article data
        this.innerHTML = `
        <main style="margin-top: 5%">
            <h1 class="title-news" style="font-size: 50px;">${techNews[this.newsIndex].headline}</h1> <!-- Main title -->
            <figure class="image-div">
                <img src="${techNews[this.newsIndex].picture}" alt="${techNews[this.newsIndex].epigraph}"> <!-- Image -->
            </figure>
            <figcaption class="img-caption">${techNews[this.newsIndex].epigraph}</figcaption> <!-- Image caption -->
            <section class="news-body">
                <p>${techNews[this.newsIndex].lead}</p> <!-- Introduction paragraph -->
                <p>${techNews[this.newsIndex].body}</p> <!-- Main body of the article -->
            </section>
            <section class="about-writer">
                <h2>About the Writer</h2>
                <p>${techNews[this.newsIndex].writer}</p> <!-- Writer's name -->
                <p>${techNews[this.newsIndex].aboutWriter}</p> <!-- Information about the writer -->
            </section>
            <section class="source-info">
                <h2>Source</h2>
                <p>${techNews[this.newsIndex].source}</p> <!-- Source information -->
            </section>
        </main>
        `;
    }
}
// Data for the news article
const techNews = [
    {
        "epigraph": "AI reshapes industries",
        "headline": "The Future of Artificial Intelligence: Transforming Global Economies",
        "subtitle": "AI innovations are changing the way businesses operate, but are we ready for the societal shifts ahead?",
        "lead": "As artificial intelligence continues to evolve, industries worldwide are experiencing unprecedented transformation. From healthcare to finance, AI is becoming a driving force in the global economy.",
         "body": "Artificial intelligence (AI) is no longer just a futuristic concept. It’s here, and it's reshaping industries across the globe. In healthcare, AI-driven diagnostic tools are helping doctors identify diseases more accurately and earlier than ever before. In finance, algorithms are revolutionizing how we trade, invest, and even how banks assess loan applications. In manufacturing, AI is streamlining production processes, leading to greater efficiency and reduced waste. However, these advancements are also raising important ethical questions. As AI takes on more roles traditionally held by humans, concerns about job displacement and economic inequality are growing. Experts warn that without proper regulation and education systems to retrain displaced workers, AI could exacerbate social divides.<br><hr> The rise of AI has sparked debates on its role in various sectors of society. Many believe that while AI offers incredible potential for economic growth and efficiency, it also poses significant challenges. Governments, businesses, and educational institutions are now grappling with how to address these challenges and ensure that AI benefits everyone, rather than leaving certain groups behind. The potential of AI is vast, but its impact on society will depend heavily on how it is integrated into our systems.<br><hr> One of the most significant areas where AI is making an impact is in healthcare. AI-powered tools are transforming the way doctors diagnose and treat patients. For instance, AI algorithms can analyze medical images, such as X-rays and MRIs, and detect early signs of diseases like cancer that might be missed by human doctors. These tools are not meant to replace doctors, but to assist them, making their work more efficient and improving outcomes for patients. Furthermore, AI is enabling personalized medicine, where treatments are tailored to an individual's genetic makeup, improving the chances of success and minimizing side effects.<br><hr> In addition to diagnostics, AI is also being used to streamline administrative tasks in healthcare. For example, AI can automate the process of scheduling appointments, managing patient records, and even processing insurance claims. This frees up time for healthcare professionals to focus on patient care, improving the overall efficiency of the healthcare system. As the demand for healthcare continues to rise, AI could play a pivotal role in ensuring that resources are used more effectively, improving access to care for underserved populations.<br><hr> In finance, AI is revolutionizing the way financial institutions operate. Algorithms are used to analyze vast amounts of financial data, providing insights that help investors make more informed decisions. AI is also being used in trading, where it can execute trades at speeds and volumes that would be impossible for humans. High-frequency trading, powered by AI, has become a major part of the global financial system, with algorithms executing thousands of trades per second.<br><hr> AI is also reshaping the way banks assess loan applications. Traditionally, banks have relied on credit scores and other traditional metrics to determine the risk of lending money to individuals and businesses. However, AI allows banks to analyze a wider range of data, including spending habits and social behavior, to make more accurate predictions about a borrower’s ability to repay a loan. This could lead to more inclusive lending practices, particularly for individuals who may not have access to traditional credit scores, such as young people or those with limited credit history.<br><hr> The use of AI in manufacturing is another area where the technology is having a profound impact. Smart factories, powered by AI, are making production lines more efficient and cost-effective. AI systems can monitor machines in real time, predicting when maintenance is needed and preventing costly breakdowns. Additionally, AI can optimize supply chains, ensuring that materials are delivered just in time for production, reducing waste and improving profitability. These advancements are leading to a more sustainable manufacturing process, as AI helps companies minimize their environmental footprint while maximizing productivity.<br><hr> However, the rapid advancement of AI is not without its challenges. As AI takes on more roles traditionally performed by humans, there is growing concern about job displacement. While AI has the potential to create new jobs in fields such as data science and robotics, many workers in industries like manufacturing, retail, and transportation are at risk of losing their jobs to automation. In fact, studies have shown that AI and automation could lead to the displacement of millions of jobs worldwide. The World Economic Forum estimates that by 2025, AI could displace around 85 million jobs, while also creating 97 million new ones. The key question, however, is whether displaced workers will have the skills to transition into these new roles.<br><hr> To address this issue, experts emphasize the importance of reskilling and upskilling the workforce. Governments and businesses must work together to provide education and training programs that equip workers with the skills needed for the jobs of the future. This includes not only technical skills but also soft skills, such as creativity, critical thinking, and emotional intelligence, which are less likely to be automated by AI. Additionally, it is crucial to ensure that these training programs are accessible to all workers, regardless of their socioeconomic background.<br><hr> Another major concern surrounding AI is its potential to exacerbate economic inequality. As AI becomes more integrated into industries, companies that are able to harness its power will gain a competitive advantage, leading to greater wealth concentration in the hands of a few. Those who are able to invest in AI technologies, such as large corporations and wealthy individuals, will benefit the most, while small businesses and workers without access to the necessary skills may be left behind. This could lead to a widening gap between the wealthy and the poor, both within and between countries.<br><hr> To prevent this, experts argue that governments must play a role in regulating the development and deployment of AI technologies. This includes setting standards for transparency and fairness in AI algorithms, ensuring that they are not biased against certain groups or individuals. There is also a need for policies that address the redistribution of wealth created by AI, such as through taxation or universal basic income programs. Without these measures, AI could deepen existing social divides, rather than bridging them.<br><hr> Ethical considerations are also at the forefront of the AI debate. As AI becomes more advanced, questions arise about its ability to make decisions that are morally sound. For example, autonomous vehicles powered by AI must be programmed to make life-or-death decisions in emergency situations. How should an autonomous car decide whom to harm in an unavoidable accident? Should it prioritize the safety of its passengers, or should it try to minimize harm to all parties involved? These types of ethical dilemmas are becoming more common as AI systems take on more complex tasks, and they raise questions about who is responsible for the actions of AI systems.<br><hr> The challenge of ensuring that AI systems are aligned with human values is one of the most pressing issues in the field of AI ethics. Researchers and policymakers are working to develop guidelines and frameworks for the responsible use of AI, but there is still much work to be done. As AI continues to evolve, it will be essential to ensure that it is developed in a way that benefits all of humanity, rather than just a select few.<br><hr> As we look to the future, AI holds enormous potential to transform industries, improve lives, and solve some of the world's most pressing challenges. However, this potential can only be realized if we approach AI development with caution and foresight. By addressing the ethical, economic, and social implications of AI, we can ensure that its benefits are shared widely and that its risks are minimized. As with any transformative technology, the key to success will be finding the right balance between innovation and responsibility, and ensuring that AI is used to create a better world for everyone.",
        "writer": "Jane Harrison",
        "aboutWriter": "Jane Harrison is a technology correspondent with over 15 years of experience covering the latest trends in AI and its impact on global industries.",
        "source": "Tech Innovators Daily <date-component></date-component>",
        "picture": "../../assets/images/tech1.jpg"
      },
      {
        "epigraph": "5G revolution begins",
        "headline": "How 5G Networks Are Changing the Digital Landscape",
        "subtitle": "The rollout of 5G technology is set to revolutionize internet connectivity and drive innovation in multiple sectors.",
        "lead": "The global deployment of 5G technology promises to deliver faster internet speeds, lower latency, and greater connectivity. But the road to widespread 5G adoption is fraught with challenges.",
         "body": "5G networks are being hailed as the next big thing in telecommunications, offering faster data speeds, improved network reliability, and the potential to support a vast number of connected devices. From autonomous vehicles to smart cities, 5G is expected to be the backbone of the future digital economy. However, the deployment of 5G infrastructure has been slower than expected in many regions due to regulatory hurdles, high costs, and public concerns about health risks. Moreover, geopolitical tensions have complicated the global rollout, with countries like the United States and China competing for dominance in the 5G space. Despite these challenges, experts agree that 5G will revolutionize how we live, work, and interact with technology.<br><hr> The potential benefits of 5G are immense. One of the most exciting aspects of 5G is its ability to support a massive number of connected devices. As the Internet of Things (IoT) continues to grow, the demand for network infrastructure that can handle billions of devices will only increase. 5G is designed to accommodate this demand, offering a more stable and faster network connection for everything from smart home devices to industrial machines. This could lead to the creation of entirely new industries, such as smart cities, where everything from traffic lights to waste management systems is connected and optimized using data from 5G networks.<br><hr> Another area where 5G is expected to have a significant impact is in autonomous vehicles. Self-driving cars rely on fast, reliable communication networks to operate safely and efficiently. 5G’s low latency and high bandwidth make it ideal for supporting these vehicles, which need to communicate with each other and with infrastructure in real time. This could help reduce traffic accidents, improve traffic flow, and enable the widespread adoption of autonomous vehicles. In addition, 5G could help enable the development of new transportation technologies, such as drone delivery systems, which could revolutionize logistics and supply chain management.<br><hr> However, the rollout of 5G has not been without its challenges. One of the biggest obstacles to widespread 5G adoption is the cost of building the necessary infrastructure. Deploying 5G requires the installation of a dense network of small cell towers, which are necessary to ensure that the network can handle the high data speeds and low latency that 5G promises. These towers need to be installed in urban areas, which can be expensive and logistically challenging. In addition, many countries face regulatory hurdles, as local governments must approve the construction of these towers and address concerns about potential health risks.<br><hr> Public concerns about the health risks associated with 5G technology have been another major obstacle to its rollout. Some studies have suggested that the electromagnetic radiation emitted by 5G towers could have negative effects on human health, including an increased risk of cancer. Although there is currently no conclusive evidence to support these claims, the fear of potential health risks has led to protests in some regions, delaying the deployment of 5G infrastructure. Governments and telecom companies are working to address these concerns by conducting studies and providing more information to the public about the safety of 5G technology. However, it may take time to reassure the public and overcome these fears.<br><hr> Another challenge to the global rollout of 5G is the geopolitical tension between major world powers, particularly the United States and China. Both countries are vying for dominance in the 5G space, as the ability to control the infrastructure and technology behind 5G networks could provide a significant economic and strategic advantage. The United States has taken steps to restrict Chinese companies, such as Huawei, from participating in the construction of 5G networks in Western countries, citing national security concerns. In contrast, China has made significant investments in 5G technology and infrastructure, positioning itself as a leader in the global 5G race.<br><hr> This geopolitical rivalry has complicated the rollout of 5G, as countries must navigate not only technical and regulatory challenges but also political tensions. The 5G race has become a key element of the broader competition between the United States and China, with both nations seeking to assert their dominance in the global digital economy. As a result, the deployment of 5G has become not only a technological and economic issue but also a matter of national security and global power dynamics.<br><hr> Despite these challenges, the potential of 5G remains enormous. In addition to its impact on industries like healthcare, transportation, and manufacturing, 5G is expected to have a transformative effect on the way we live and work. With its faster speeds, lower latency, and ability to connect millions of devices, 5G will enable new applications and services that were previously unimaginable. For example, 5G could pave the way for advanced augmented reality (AR) and virtual reality (VR) experiences, allowing users to immerse themselves in digital worlds in ways that are not possible with current networks.<br><hr> Furthermore, 5G could help bridge the digital divide by providing faster and more reliable internet access to rural and underserved areas. Many parts of the world still lack access to high-speed internet, which limits economic opportunities and access to essential services like healthcare and education. 5G’s ability to deliver fast, reliable internet connections to remote areas could help address this issue and promote greater global connectivity. This could be particularly important as the world continues to rely more heavily on digital technologies for work, education, and social interaction.<br><hr> The rollout of 5G will also drive innovation in a wide range of industries. For example, in the healthcare sector, 5G could enable remote surgeries, where doctors can operate on patients from anywhere in the world using robotic surgical systems. In the manufacturing sector, 5G could enable the widespread use of robots and automation, allowing for greater precision and efficiency in production lines. Additionally, the entertainment industry could see the rise of new, immersive experiences enabled by 5G, such as live-streaming concerts in virtual reality or hosting global events that are accessible to anyone with a VR headset.<br><hr> Despite the promising potential of 5G, it is clear that the road to widespread adoption will not be easy. Governments, telecom companies, and industry stakeholders must work together to address the challenges that stand in the way of 5G deployment, including the high costs of infrastructure, regulatory hurdles, public concerns about health risks, and geopolitical tensions. However, if these challenges can be overcome, 5G could be the catalyst for a new era of technological innovation, transforming industries, improving quality of life, and driving economic growth.<br><hr> Looking ahead, the success of 5G will depend on the ability of governments, businesses, and consumers to collaborate and navigate the complex challenges involved. If these stakeholders can work together to address concerns and accelerate the rollout of 5G networks, the potential benefits of 5G will be realized, ushering in a new era of connectivity and technological advancement. As 5G continues to evolve, it will undoubtedly shape the future of the digital economy and transform the way we interact with technology and the world around us.",
        "writer": "Robert Lang",
        "aboutWriter": "Robert Lang is an expert in telecommunications and digital infrastructure, reporting on technological advancements for over a decade.",
        "source": "Gadget World <date-component></date-component>",
        "picture": "../../assets/images/tech2.jpg"
      },
      {
        "epigraph": "Tech giants face scrutiny",
        "headline": "Big Tech Under Fire: Antitrust Laws and the Future of Innovation",
        "subtitle": "Governments worldwide are cracking down on tech monopolies, but will these moves stifle innovation or foster competition?",
        "lead": "As tech giants like Google, Amazon, and Facebook grow ever more powerful, regulators are stepping in to curb their influence. But will antitrust laws be enough to level the playing field?",
         "body": "In recent years, Big Tech companies have come under increasing scrutiny from governments around the world. Allegations of monopolistic practices, data privacy violations, and political interference have prompted lawmakers to call for stricter regulations and antitrust actions. The European Union has led the charge with hefty fines and new regulations aimed at curbing the power of these tech giants. Meanwhile, in the United States, both Democrats and Republicans have expressed concerns about the outsized influence of companies like Amazon, Google, and Facebook. However, there is growing debate about whether these measures could inadvertently stifle innovation by punishing successful companies. Proponents argue that breaking up Big Tech could foster competition and lead to more diverse, consumer-friendly innovations.<br><hr> Critics of Big Tech argue that the power wielded by these companies has grown too concentrated, threatening democracy and individual freedoms. They point to the way tech giants use vast amounts of personal data to shape consumer behavior and influence political outcomes. The ability of platforms like Facebook to manipulate news feeds and promote specific viewpoints has sparked concerns about their role in spreading misinformation and undermining trust in democratic institutions. In particular, the 2016 U.S. presidential election brought attention to the ways social media platforms can be exploited for political purposes, fueling the call for greater oversight of Big Tech.<br><hr> Another major concern surrounding Big Tech is the issue of data privacy. Tech companies collect vast amounts of data on their users, from browsing habits to location tracking, and often use this information to target ads and generate profits. While many users consent to having their data collected, privacy advocates argue that consumers are not fully aware of the extent to which their personal information is being used. Moreover, data breaches at companies like Facebook and Equifax have raised alarms about the security of personal data stored online, further fueling calls for stronger data protection laws.<br><hr> The European Union has been at the forefront of regulating Big Tech, with the implementation of the General Data Protection Regulation (GDPR) in 2018. The GDPR sets strict guidelines for how companies can collect and use personal data, giving consumers more control over their information and requiring companies to be more transparent about their data practices. The EU has also levied significant fines against companies like Google and Apple for antitrust violations and unfair business practices. These actions have made the EU a leader in global efforts to hold Big Tech accountable for its actions.<br><hr> In the United States, regulatory action has been slower. Although there have been several high-profile hearings and investigations into the practices of companies like Amazon, Facebook, and Google, there has been no comprehensive national approach to regulating Big Tech. The U.S. Congress has struggled to pass meaningful antitrust legislation, with some lawmakers arguing that regulation could stifle innovation and harm consumers. Others, however, believe that the concentration of power in the hands of a few companies is detrimental to competition and the economy. The debate has become a major political issue, with both parties seeking to align themselves with voters who are concerned about Big Tech’s influence.<br><hr> One of the key arguments in favor of breaking up Big Tech is that doing so could encourage greater competition in the tech industry. Critics argue that companies like Google and Facebook have become too dominant, stifling smaller competitors and limiting innovation. By breaking up these companies into smaller, more focused entities, proponents believe that new players would have a better chance of entering the market and competing on a more level playing field. This, they argue, would lead to more diverse and consumer-friendly products and services.<br><hr> However, opponents of breaking up Big Tech argue that doing so could have unintended consequences. Many of these companies are incredibly successful because they have created products and services that consumers find useful and valuable. Breaking them up could lead to inefficiencies and disrupt the seamless experiences that consumers have come to expect. For example, Google’s search engine, YouTube, and Android operating system are deeply interconnected, and separating them could reduce the overall quality of these services. Similarly, Facebook’s dominance in the social media space is partly due to its ability to integrate services like Instagram and WhatsApp into a single platform. Dividing these companies could undermine the ecosystem that has made them successful.<br><hr> In addition, there are concerns that breaking up Big Tech could lead to the creation of smaller, less effective companies that lack the resources to compete with foreign rivals. For example, Chinese tech giants like Alibaba and Tencent have become major players in the global tech industry, and there is concern that breaking up U.S. companies like Amazon and Google could leave them vulnerable to competition from these foreign giants. In this view, regulation of Big Tech should focus on ensuring that these companies operate fairly and transparently, rather than breaking them up altogether.<br><hr> Another important consideration is the impact that regulation and antitrust actions could have on innovation. Many of the most successful tech companies have been able to innovate because they have the financial resources and market power to invest in research and development. Breaking up these companies or imposing overly strict regulations could reduce their ability to innovate and bring new technologies to market. In this sense, some argue that regulation should focus on encouraging innovation, rather than punishing success.<br><hr> The debate over how to regulate Big Tech is complex and multifaceted. On one hand, there are valid concerns about the concentration of power in the hands of a few companies and the potential harm this can cause to consumers and democracy. On the other hand, there are legitimate concerns that regulation and antitrust actions could stifle innovation and harm the global competitiveness of U.S. tech companies. Ultimately, the challenge will be finding a balance between these competing interests, ensuring that Big Tech companies are held accountable for their actions while also fostering an environment where innovation can thrive.<br><hr> Moving forward, there are several key areas where regulation could play a significant role in shaping the future of Big Tech. First, lawmakers will need to address the issue of data privacy, ensuring that consumers have greater control over their personal information and that companies are held accountable for data breaches. Second, antitrust laws will need to be updated to reflect the unique challenges posed by the digital economy, including the role of platforms like Facebook, Google, and Amazon in shaping markets and influencing consumer behavior. Finally, lawmakers will need to consider the potential impact of regulations on innovation, ensuring that any new rules do not stifle the very innovation that has made Big Tech successful in the first place.<br><hr> In conclusion, the debate over Big Tech is far from over, and the future of these companies will depend on how regulators, lawmakers, and industry leaders address the complex issues surrounding their power and influence. While there are valid concerns about monopolistic practices and data privacy violations, there is also a recognition that Big Tech has played a major role in driving innovation and economic growth. As the digital economy continues to evolve, it will be crucial to strike the right balance between regulation and innovation, ensuring that Big Tech companies are held accountable while also encouraging the continued development of new technologies that benefit consumers and society as a whole.",
        "writer": "Sophia Turner",
        "aboutWriter": "Sophia Turner is a tech policy analyst, specializing in the intersection of technology and regulation, with a focus on antitrust issues.",
        "source": "Digital Trends <date-component></date-component>",
        "picture": "../../assets/images/tech3.jpg"
      }
];

// Define the custom HTML element
customElements.define('tech-component', TechComponent);
