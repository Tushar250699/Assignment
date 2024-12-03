import React from "react";

const IpoDetailsRes = () => {
  const styles = {
    ipoDetailsPage: {
      fontFamily: "Arial, sans-serif",
      padding: "20px",
      maxWidth: "800px",
      margin: "auto",
      backgroundColor: "#f9f9f9",
      borderRadius: "10px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    },
    borderedContainer: {
      border: "1px solid #ddd",
      borderRadius: "10px",
      padding: "20px",
    },
    breadcrumbs: {
      marginBottom: "20px",
      fontSize: "15px",
      color: "#666",
    },
    breadcrumbsLink: {
      textDecoration: "none",
      color: "#007bff",
    },
    headerSection: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "20px",
      flexWrap: "wrap", // Allows elements to wrap on smaller screens
    },
    // logo: {
    //   display: "flex",
    //   alignItems: "center",
    //   marginBottom: "10px", // Added spacing for small screens
    // },
    // logoImg: {
    //   width: "80px",
    //   height: "80px",
    //   objectFit: "cover",
    //   marginRight: "15px",
    // },
    // companyDetails: {
    //   fontSize: "16px",
    //   color: "#333",
    // },
    name: {
      fontWeight: "bold",
    },
    legalName: {
      color: "#888",
    },
    // applyButtonBtn: {
    //   backgroundColor: "#000223",
    //   color: "white",
    //   border: "none",
    //   padding: "10px 20px",
    //   borderRadius: "5px",
    //   cursor: "pointer",
    //   fontSize: "14px",
    //   width: "100%", // Make button full width on mobile
    //   maxWidth: "150px", // Limit max width for large screens
    //   marginTop: "10px", // Add some margin for spacing
    // },
    table: {
      width: "100%",
      borderCollapse: "collapse",
      textAlign: "center",
      marginTop: "20px",
    },
    tableHeader: {
      backgroundColor: "#f2f2f2",
      fontWeight: "bold",
    },
    cell: {
      padding: "9px 13px",
      wordWrap: "break-word", // Ensure long text wraps on small screens
    },
    // Media Queries for responsiveness
    "@media (max-width: 768px)": {
      ipoDetailsPage: {
        padding: "10px",
      },
      headerSection: {
        flexDirection: "column", // Stack logo and button vertically on small screens
        alignItems: "flex-start", // Align items to the start
      },
      //   logoImg: {
      //     width: "60px", // Smaller logo on mobile
      //     height: "60px",
      //   },
      //   applyButtonBtn: {
      //     width: "100%", // Full width on mobile
      //   },
      table: {
        fontSize: "12px", // Smaller font size for mobile
      },
    },
    "@media (max-width: 480px)": {
      applyButtonBtn: {
        fontSize: "12px", // Smaller font size for button on small screens
      },
      table: {
        fontSize: "10px", // Further reduce font size for very small screens
      },
    },
  };

  return (
    <>
      <h4>IPO Details</h4>
      <div style={styles.ipoDetailsPage}>
        {/* <div style={styles.breadcrumbs}>
        <a href="#" style={styles.breadcrumbsLink}>
          Home
        </a>
        <span> &gt; </span>
        <span>Market watch</span>
      </div> */}
        <div style={styles.borderedContainer}>
          <div style={styles.headerSection}>
            {/* <div style={styles.logo}> */}
            {/* <img
              src="/api/placeholder/80/80"
              alt="OYO Logo"
              style={styles.logoImg}
            /> */}
            {/* <div style={styles.companyDetails}>
              <div style={styles.name}>OYO</div>
              <div style={styles.legalName}>OYO Private Limited</div>
            </div> */}
            {/* </div> */}
            {/* <button style={styles.applyButtonBtn}>Apply now</button> */}
          </div>
          <table style={styles.table}>
            <thead>
              <tr style={styles.tableHeader}>
                <th style={styles.cell}>Issue Size</th>
                <th style={styles.cell}>Price Range</th>
                <th style={styles.cell}>Minimum Amount</th>
                <th style={styles.cell}>Lot Size</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={styles.cell}>₹3,600 - 3,700 Cr.</td>
                <td style={styles.cell}>₹100 - 200</td>
                <td style={styles.cell}>₹50,000</td>
                <td style={styles.cell}>150 shares/lots</td>
              </tr>
            </tbody>
            <thead>
              <tr style={styles.tableHeader}>
                <th style={styles.cell}>Issue Dates</th>
                <th style={styles.cell}>Listed On</th>
                <th style={styles.cell}>Listed Price</th>
                <th style={styles.cell}>Listing Gains</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={styles.cell}>12 Dec - 15 Dec 22</td>
                <td style={styles.cell}>15 Dec 22</td>
                <td style={styles.cell}>₹150</td>
                <td style={styles.cell}>₹10 (10.0%)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default IpoDetailsRes;
