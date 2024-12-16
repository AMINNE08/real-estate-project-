import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from "react-accessible-accordion";
import "../FAQ/Faq.css";

const Faq = () => {
    const faqData = [
        { question: "When selling my house, where should I begin?", answer: "You should start by evaluating your home's value and preparing it for listing." },
        { question: "How long does it take to sell a house?", answer: "The timeline varies based on market conditions and your location, but it usually takes 30-60 days." },
        { question: "What home seller mistakes should I avoid?", answer: "Avoid overpricing, not staging your home, and neglecting repairs." },
        { question: "Where are personalized selling options available?", answer: "Personalized options are available in select markets. Contact your local agent for details." },
        { question: "How do Zillow partner agents help sell homes faster and for more?", answer: "They use expert marketing strategies and market knowledge to attract the right buyers quickly." },
    ];

    return (
        <div className="faq-container" style={{ margin: "50px auto", maxWidth: "800px" }}>
            <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Frequently Asked Questions</h2>
            <Accordion allowZeroExpanded>
                {faqData.map((item, index) => (
                    <AccordionItem key={index}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                {item.question}
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>{item.answer}</p>
                        </AccordionItemPanel>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
};

export default Faq;
