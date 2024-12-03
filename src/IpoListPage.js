import React from "react";

const IpoListPage = () => {
  // Sample data
  const ipoData = [
    {
      company: "GO AIR",
      issueDate: "4th - 8th Oct 2022",
      issueSize: "₹3600 Crores",
      priceRange: "₹50-60",
      minInvestment: "100 Shares/Lot",
      logo: "data:image/jpeg;base64,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",
    },
    {
      company: "BAJAJ ENERGY",
      issueDate: "4th - 7th Oct 2022",
      issueSize: "₹3600 Crores",
      priceRange: "₹50-60",
      minInvestment: "100 Shares/Lot",
      logo: "data:image/png;base64,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",
    },
    {
      company: "OYO",
      issueDate: "To be announced",
      issueSize: "₹3600 Crores",
      priceRange: "₹50-60",
      minInvestment: "100 Shares/Lot",
      logo: "data:image/png;base64,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",
    },
  ];

  return (
    <>
      <div
        className="ipo-list-page"
        style={{
          width: "100%",
        }}
      >
        <div
          className="page-title"
          style={{
            marginBottom: "1rem",
          }}
        >
          <h1
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
            }}
          >
            IPO List Page
          </h1>
        </div>
        <table
          className="ipo-table"
          style={{
            width: "100%",
            borderCollapse: "collapse",
          }}
        >
          <thead>
            <tr
              style={{
                backgroundColor: "#f2f2f2",
              }}
            >
              <th
                style={{
                  padding: "0.5rem",
                  textAlign: "left",
                }}
              >
                Company / Issue date
              </th>
              <th
                style={{
                  padding: "0.5rem",
                  textAlign: "left",
                }}
              >
                Issue size
              </th>
              <th
                style={{
                  padding: "0.5rem",
                  textAlign: "left",
                }}
              >
                Price range
              </th>
              <th
                style={{
                  padding: "0.5rem",
                  textAlign: "left",
                }}
              >
                Min invest/Lot
              </th>
            </tr>
          </thead>
          <tbody>
            {ipoData.map((ipo, index) => (
              <tr
                key={index}
                style={{
                  backgroundColor: index % 2 === 0 ? "#f2f2f2" : "transparent",
                }}
              >
                <td
                  style={{
                    padding: "0.5rem",
                  }}
                >
                  <div
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    {ipo.company}
                  </div>
                  <div>{ipo.issueDate}</div>
                </td>
                <td
                  style={{
                    padding: "0.5rem",
                  }}
                >
                  {ipo.issueSize}
                </td>
                <td
                  style={{
                    padding: "0.5rem",
                  }}
                >
                  {ipo.priceRange}
                </td>
                <td
                  style={{
                    padding: "0.5rem",
                  }}
                >
                  {ipo.minInvestment}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default IpoListPage;
