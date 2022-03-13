import styles from '../styles/Home.module.css';
import PageLayout from '../components/PageLayout';
// import {useState, useEffect} from 'react';
import Image from 'next/image';

export default function Home({results}) {
  return (
    <PageLayout title="Rick & Morty - Home">
      <div className={styles.container}>
        {results.length === 0 && <p>No hay articulos</p>}
        {results.length > 0 &&
          results.map((result, index) => (
            <div key={index}>
              <Image
                src={result.image}
                alt="imagen"
                width={400}
                height={300}
                layout="responsive"
              ></Image>
              <h2>{result.name}</h2>
              <p>{result.status}</p>
            </div>
          ))}
      </div>
    </PageLayout>
  );
}

export async function getStaticProps() {
  // pots posar context, req, res etc
  const response = await fetch('https://rickandmortyapi.com/api/character');
  const {results} = await response.json();
  return {
    props: {
      results,
    },
  };

  // export async function getServerSideProps() { // pots posar context, req, res etc
  //   const response = await fetch(
  //     'https://newsapi.org/v2/everything?q=tesla&from=2022-02-13&sortBy=publishedAt&apiKey=ec3d25c729dc403ea5d75442a630b9bd'
  //   );
  //   const {articles} = await response.json();
  //   return {
  //     props: {
  //       articles,
  //     },
  //   };
}
