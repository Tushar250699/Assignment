import React from "react";

const IpoDetailsPage = () => {
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
    },
    logo: {
      display: "flex",
      alignItems: "center",
    },
    logoImg: {
      width: "40px",
      height: "40px",
      objectFit: "cover",
      marginRight: "15px",
    },
    companyDetails: {
      fontSize: "16px",
      color: "#333",
    },
    name: {
      fontWeight: "bold",
    },
    legalName: {
      color: "#888",
    },
    applyButtonBtn: {
      backgroundColor: "#000223",
      color: "white",
      border: "none",
      padding: "10px 20px",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "14px",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
      textAlign: "center",
      marginTop: "20px",
    },
    tableHeader: {
      backgroundColor: "#f2f2f2",
    },
    cell: {
      padding: "9px 13px",
      fontweight: "bold",
    },
  };

  return (
    <div style={styles.ipoDetailsPage}>
      <div style={styles.breadcrumbs}>
        <a href="#" style={styles.breadcrumbsLink}>
          Home
        </a>
        <span> &gt; </span>
        <span>Market watch</span>
      </div>
      <div style={styles.borderedContainer}>
        <div style={styles.headerSection}>
          <div style={styles.logo}>
            <img
              src="data:image/png;base64,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"
              alt="OYO Logo"
              style={styles.logoImg}
            />
            <div style={styles.companyDetails}>
              <div style={styles.name}>OYO</div>
              <div style={styles.legalName}>OYO Private Limited</div>
            </div>
          </div>
          <button style={styles.applyButtonBtn}>Apply now</button>
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
  );
};

export default IpoDetailsPage;
