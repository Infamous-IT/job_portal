import React, {useEffect, useState} from "react";
import Banner from "../../component/Banner/Banner.jsx";
import Card from "../../component/Card/Card.jsx";
import Jobs from "../Jobs/Jobs.jsx";
import Sidebar from "../../component/Sidebar/Sidebar.jsx";
import Newsletter from "../../component/Newsletter/Newsletter.jsx";

const Home = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [jobs, setJobs] = useState([]);
    const [query, setQuery] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    useEffect(() => {
        setIsLoading(true);
        fetch("jobs.json")
            .then(res => res.json())
            .then(data => {
                setJobs(data);
                setIsLoading(false);
            })
    }, []);

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    }

    //filter jobs by title
    const filteredItems = jobs.filter((job) => job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1);

    // Radio filtering button
    const handleChange = (event) => {
        setSelectedCategory(event.target.value);
    }

    // Button based filtering
    const handleClick = (event) => {
        setSelectedCategory(event.target.value);
    }

    // calculate the index range
    const calculatePageRange = () => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const lastIndex = startIndex + itemsPerPage;
        return {startIndex, lastIndex};
    }

    // function for the next page
    const nextPage = () => {
        if (currentPage < Math.ceil(filteredItems.length / itemsPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    }

    // function for previous page
    const previousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    }

    const filteredData = (jobs, selected, query) => {
        let filteredJobs = jobs;

        if (query) {
            filteredJobs = filteredItems;
        }

        if (selected) {
            filteredJobs = filteredJobs.filter(({
                                                    jobLocation,
                                                    maxPrice,
                                                    experienceLevel,
                                                    salaryType,
                                                    employmentType,
                                                    postingDate
                                                }) => (
                jobLocation.toLowerCase() === selected.toLowerCase() ||
                parseInt(maxPrice) <= parseInt(selected) ||
                postingDate >= selected ||
                experienceLevel.toLowerCase() === selected.toLowerCase() ||
                salaryType.toLowerCase() === selected.toLowerCase() ||
                employmentType.toLowerCase() === selected.toLowerCase()
            ));
        }

        const {startIndex, lastIndex} = calculatePageRange();
        filteredJobs = filteredJobs.slice(startIndex, lastIndex);


        return filteredJobs.map((data, i) => <Card key={i} data={data}/>)
    }

    const result = filteredData(jobs, selectedCategory, query);

    return (
        <>
            <Banner query={query} handleInputChange={handleInputChange}/>

            {/* main content */}
            <div className="bg-[#FAFAFA] md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12">

                {/* left sidebar */}
                <div className="bg-white p-4 rounded">
                    <Sidebar handleChange={handleChange} handleClick={handleClick}/>
                </div>

                {/* job cards */}
                <div className="col-span-2 bg-white rounded-sm">
                    {
                        isLoading ?
                            (<p className="font-medium">Loading...</p>) :
                            result.length > 0 ?
                                (<Jobs result={result}/>) :
                                <>
                                    <h3 className="p-margin text-lg font-bold mb-2">{result.length} Jobs</h3>
                                    <p className="p-margin">Data was not found!</p>
                                </>
                    }

                    {/* pagination */}
                    {
                        result.length > 0 ?
                            (
                                <div className="flex justify-center mt-4 space-x-8">
                                    <button
                                        onClick={previousPage}
                                        disabled={currentPage === 1}
                                        className="hover:underline"
                                    >
                                        Previous
                                    </button>
                                    <span className="mx-2">
                                        Page: {currentPage} of {Math.ceil(filteredItems.length / itemsPerPage)}
                                    </span>
                                    <button
                                        onClick={nextPage}
                                        disabled={currentPage === Math.ceil(filteredItems.length / itemsPerPage)}
                                        className="hover:underline"
                                    >
                                        Next
                                    </button>
                                </div>
                            ) :
                            ""
                    }
                </div>

                {/* right side */}
                <div className="bg-white p-4 rounded">
                    <Newsletter/>
                </div>
            </div>
        </>
    )
}

export default Home;