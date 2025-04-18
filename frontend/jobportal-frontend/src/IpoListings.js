import React, { useEffect, useState } from "react";
import "./ipoListings.css";

function IPOListings() {
    const [ipoListings, setIpoListings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        const fetchIPOs = async () => {
            try {
                setLoading(true);
                const response = await fetch(`http://localhost:3000/api/upcoming-ipos?page=${currentPage}`);

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data = await response.json();
                setIpoListings(data.data);
                setTotalPages(data.totalPages);
                setError(null);
            } catch (err) {
                console.error("Error fetching IPO data:", err);
                setError("Failed to load IPO data. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        fetchIPOs();
    }, [currentPage]);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    if (loading) return <div className="text-center p-4">Loading IPO data...</div>;
    if (error) return <div className="text-center p-4 text-red-500">{error}</div>;

    return (
        <>
            <div className="container mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4">IPO Listings</h1>
                {ipoListings.length === 0 ? (
                    <p>No IPO listings available at the moment.</p>
                ) : (
                    <>
                        <table className="w-full border-collapse border border-gray-300">
                            <thead>
                                <tr className="bg-gray-200">
                                    <th className="border border-gray-300 p-2">Name</th>
                                    <th className="border border-gray-300 p-2">Listing Date</th>
                                    <th className="border border-gray-300 p-2">IPO Mcap Rs. Cr</th>
                                    <th className="border border-gray-300 p-2">IPO Price</th>
                                    <th className="border border-gray-300 p-2">Current Price</th>
                                    <th className="border border-gray-300 p-2">% Change</th>
                                </tr>
                            </thead>
                            <tbody>
                                {ipoListings.map((ipo, index) => (
                                    <tr key={index} className="text-center">
                                        <td className="border border-gray-300 p-2">
                                            <a
                                                href={ipo.url}
                                                className="text-blue-500 hover:underline"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                {ipo.name}
                                            </a>
                                        </td>
                                        <td className="border border-gray-300 p-2">{ipo.listingDate}</td>
                                        <td className="border border-gray-300 p-2">₹{ipo.ipoMcap}</td>
                                        <td className="border border-gray-300 p-2">₹{ipo.ipoPrice}</td>
                                        <td className="border border-gray-300 p-2">₹{ipo.currentPrice}</td>
                                        <td
                                            className={`border border-gray-300 p-2 font-bold ${ipo.change.includes("↑")
                                                ? "text-green-500"
                                                : ipo.change.includes("↓")
                                                    ? "text-red-500"
                                                    : ""
                                                }`}
                                        >
                                            {ipo.change}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="pagination">
                            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                <button
                                    key={page}
                                    onClick={() => handlePageChange(page)}
                                    className={`pagination-button ${currentPage === page ? 'active' : ''}`}
                                >
                                    {page}
                                </button>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </>
    );
}

export default IPOListings;
