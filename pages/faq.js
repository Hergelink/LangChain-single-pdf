import styles from '../styles/faq.module.css';
import Link from 'next/link';

export default function Faq() {
  return (
    <main>
      <h1 class={styles.faqTitle}>FAQ</h1>
      <h2 class={styles.faqSubtitle}>
        Huge thanks to
        <Link
          href="https://twitter.com/mayowaoshin"
          class={styles.credit}
          target="_blank"
        >
          Mayo Waoshin
        </Link>
        where I got the code-base from.
      </h2>
      <div class={styles.Card}>
        <h3>What is this?</h3>
        <p>
          This chatbot helps you to chat with the whole user manual of a 2015
          Audi A3. Instead of searching 284 pages you can just ask the chatbot
          about the car.
        </p>
      </div>
      <div class={styles.Card}>
        <h3>What is it powered by?</h3>
        <p>This chatbot is powered by LangChainAI, Pinecone and ChatGpt-3.5</p>
      </div>
      <Link href="/" class={styles.backToChat}>
        Back to Chatbot
      </Link>
    </main>
  );
}
