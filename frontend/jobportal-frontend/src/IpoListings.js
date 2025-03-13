import React from "react";
import "./ipoListings.css";




const ipoListings = [
  { name: "NAPS Global", listingDate: "11 Mar 2025", ipoPrice: "-", currentPrice: "-", change: "-", url: "https://www.screener.in/company/id/1285342/" },
  { name: "Balaji Phos.", listingDate: "Yesterday", ipoPrice: 70, currentPrice: 74.35, change: "↑6%", url: "https://www.screener.in/company/BALAJIPHOS/consolidated/" },
  { name: "Shreenath", listingDate: "05 Mar 2025", ipoPrice: 44, currentPrice: 30.19, change: "↓31%", url: "https://www.screener.in/company/544372/" },
  { name: "Nukleus Office", listingDate: "04 Mar 2025", ipoPrice: 234, currentPrice: 191.50, change: "↓18%", url: "https://www.screener.in/company/544370/" },
  { name: "Beezaasan Exp.", listingDate: "03 Mar 2025", ipoPrice: 175, currentPrice: 170.20, change: "↓3%", url: "https://www.screener.in/company/544369/consolidated/" },
  { name: "HP Telecom", listingDate: "28 Feb 2025", ipoPrice: 108, currentPrice: 114.35, change: "↑6%", url: "https://www.screener.in/company/HPTL/" },
  { name: "Swasth Foodtech", listingDate: "28 Feb 2025", ipoPrice: 94, currentPrice: 80.60, change: "↓14%", url: "https://www.screener.in/company/544368/" },
  { name: "Quality Power El", listingDate: "24 Feb 2025", ipoPrice: 425, currentPrice: 361.10, change: "↓15%", url: "https://www.screener.in/company/QPOWER/consolidated/" },
  { name: "Tejas Cargo", listingDate: "24 Feb 2025", ipoPrice: 168, currentPrice: 168.05, change: "0%", url: "https://www.screener.in/company/TEJASCARGO/consolidated/" },
  { name: "Royal Arc", listingDate: "24 Feb 2025", ipoPrice: 120, currentPrice: 120.80, change: "↑1%", url: "https://www.screener.in/company/ROYALARC/" },
  { name: "Shanmuga Hos.", listingDate: "21 Feb 2025", ipoPrice: 74, currentPrice: 54, change: "↓33%", url: "https://www.screener.in/company/544365/" },
  { name: "L.K.Mehta Poly.", listingDate: "21 Feb 2025", ipoPrice: 27, currentPrice: 71, change: "↓24%", url: "https://www.screener.in/company/544366/" },
  { name: "P S Raj", listingDate: "19 Feb 2025", ipoPrice: 106, currentPrice: 140, change: "↑3%", url: "https://www.screener.in/company/PSRAJ/" },
  { name: "Hexaware Tech.", listingDate: "19 Feb 2025", ipoPrice: 43025, currentPrice: 708, change: "↑10%", url: "https://www.screener.in/company/HEXT/consolidated/" },
  { name: "Voler Car", listingDate: "19 Feb 2025", ipoPrice: 100, currentPrice: 90, change: "↓1%", url: "https://www.screener.in/company/VOLERCAR/" },
  { name: "Maxvolt Ene.", listingDate: "19 Feb 2025", ipoPrice: 196, currentPrice: 180, change: "↓3%", url: "https://www.screener.in/company/MAXVOLT/" },
  { name: "Ajax Engineering", listingDate: "17 Feb 2025", ipoPrice: 7196, currentPrice: 629, change: "↓4%", url: "https://www.screener.in/company/AJAXENGG/" },
  { name: "Chandan Healthca", listingDate: "17 Feb 2025", ipoPrice: 389, currentPrice: 159, change: "↑9%", url: "https://www.screener.in/company/CHANDAN/consolidated/" },
  { name: "Eleganz Interior", listingDate: "14 Feb 2025", ipoPrice: 294, currentPrice: 130, change: "↓12%", url: "https://www.screener.in/company/ELGNZ/consolidated/" },
  { name: "Readymix Cons.", listingDate: "13 Feb 2025", ipoPrice: 135, currentPrice: 123, change: "↓29%", url: "https://www.screener.in/company/READYMIX/" },
  { name: "Solarium Green", listingDate: "13 Feb 2025", ipoPrice: 398, currentPrice: 191, change: "↑35%", url: "https://www.screener.in/company/544354/" },
  { name: "Ken Enter.", listingDate: "12 Feb 2025", ipoPrice: 231, currentPrice: 94, change: "↓51%", url: "https://www.screener.in/company/KEN/consolidated/" },
 
];

function IPOListings() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">IPO Listings</h1>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 p-2">Name</th>
            <th className="border border-gray-300 p-2">Listing Date</th>
            <th className="border border-gray-300 p-2">IPO Price</th>
            <th className="border border-gray-300 p-2">Current Price</th>
            <th className="border border-gray-300 p-2">% Change</th>
          </tr>
        </thead>
        <tbody>
          {ipoListings.map((ipo, index) => (
            <tr key={index} className="text-center">
              <td className="border border-gray-300 p-2">
                <a href={ipo.url} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">{ipo.name}</a>
              </td>
              <td className="border border-gray-300 p-2">{ipo.listingDate}</td>
              <td className="border border-gray-300 p-2">₹{ipo.ipoPrice}</td>
              <td className="border border-gray-300 p-2">₹{ipo.currentPrice}</td>
              <td
                className={`border border-gray-300 p-2 font-bold ${
                  ipo.change.includes("↑") ? "text-green-500" : ipo.change.includes("↓") ? "text-red-500" : ""
                }`}
              >
                {ipo.change}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default IPOListings;


