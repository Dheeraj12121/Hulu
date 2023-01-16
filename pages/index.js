import Head from 'next/head'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Results from '../components/Results'

export default function Home({results}) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>

      {/* <Nav/> */}

      {/* <Results results={results}/> */}
    </div>
  );
}

// export async function getServerSideProps(context){
//   const genre = context.query.genre;

//   // const request = await fetch(`http://www.omdbapi.com/?apikey=${requests}&`).then((res) => res.json());

//   return {
//     props:{
//       results:request
//     }
//   }
// }