"use client";
import styles from "../paginator.module.css";

import { useState, FormEvent, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { ScaleLoader } from "react-spinners";
import { SearchResponse } from "../model/SearchResponse";
import { Gallery } from "../components/Gallery";

export default function Home() {
  let [color] = useState("rgba(37, 99, 235, 1)");

  const [searchWord, setSearchWord] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize] = useState(10);
  const [loading, setLoading] = useState(false);
  const [searchResponse, setSearchResponse] = useState({
    total: 0,
    total_pages: 0,
    results: [],
  });

  const handleSubmit = (ev: FormEvent) => {
    setLoading(true);
    setCurrentPage(0);
    ev.preventDefault();
    fetchPictures();
  };

  const handlePageChange = (e: any) => {
    console.log(`[Home] Selected page: ${e.selected}`);
    setCurrentPage(e.selected + 1);
  };

  const fetchPictures = async () => {
    let keyWord = !searchWord ? getRandomSearchWord() : searchWord;

    setSearchWord(keyWord);

    console.log(`[Home] Word to search for: ${keyWord}`);

    const response = await fetch(
      `https://api.unsplash.com/search/photos/?query=${keyWord}&page=${currentPage}&client_id=KYj4qqwnERHg-kkOos3OkcnX9Q_Mz6jBI6JQJuSTXL0`
    );
    const searchResponse: any = (await response.json()) as SearchResponse;
    setSearchResponse(searchResponse);
    setLoading(false);
  };

  useEffect(() => {
    if(currentPage != 0) {
      fetchPictures();
    }
}, [currentPage]);

  const getRandomSearchWord = () => {
    var words = ["Horse", "Pig", "Dog", "Cat", "Parrot", "Iguana"];
    return words[Math.floor(Math.random() * words.length)];
  };

  return (
    <>
      <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            value={searchWord}
            onChange={(e) => setSearchWord(e.target.value)}
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search photos.."
          />
          <button
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </form>
      <br />
      <br />
      <>
        {loading ? (
          <div className='flex justify-center items-center'>
            <ScaleLoader
              color={color}
              loading={loading}
              aria-label="Loader"
              data-testid="loader"
            />
          </div>
        ) : (
          <>
            <Gallery pictures={searchResponse.results} />
            <br />
            <ReactPaginate
              activeClassName={styles.pageItemActive}
              breakClassName={"pageItem break-me"}
              breakLabel={"..."}
              containerClassName={styles.pagination}
              disabledClassName={"disabled-page"}
              marginPagesDisplayed={2}
              nextLabel=">"
              onPageChange={handlePageChange}
              pageRangeDisplayed={pageSize}
              pageCount={searchResponse.total_pages}
              previousLabel="<"
              renderOnZeroPageCount={null}
            />
          </>
        )}
      </>
    </>
  );
}
