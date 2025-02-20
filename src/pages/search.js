import { useRouter } from "next/router";
import SearchForm from "@/components/SearchForm";
import Head from "next/head";

const Search = () => {
  const router = useRouter();
  const { q } = router.query;
  return (
    <>
      <Head>
        <title>{q} 검색 결과 - HAYOON</title>
      </Head>
      <div className="flex flex-col gap-10 justify-center items-center font-bold text-4xl mt-20">
        <h1>Search</h1>
        <SearchForm initialValue={q} />
        <p>검색 페이지 입니당</p>
        <p>검색 결과 : {q}</p>
      </div>
    </>
  );
};

export default Search;
