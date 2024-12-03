import React from "react";

const IPOTimeline = () => {
  const timelineEvents = [
    { text: "Bidding starts", date: "12 Dec 2023" },
    { text: "Bidding ends", date: "15 Dec 2023" },
    { text: "Allotment finalization", date: "18 Dec 2023" },
    { text: "Refund initiation", date: "18 Dec 2023" },
    { text: "Demat transfer", date: "18 Dec 2023" },
    { text: "Listing date", date: "21 Dec 2023" },
  ];

  return (
    <>
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            position: "relative",
            padding: "20px",
            border: "1px solid #ddd", // Slightly visible border
            borderRadius: "10px", // Rounded corners
            backgroundColor: "#f9f9f9", // Light background for better contrast
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
            margin: "20px auto",
            maxWidth: "90%", // Restrict the timeline width
          }}
        >
          {/* Green line connecting icons */}
          <div
            style={{
              position: "absolute",
              top: "24%",
              left: 0,
              right: 0,
              height: "1px",
              backgroundColor: "#4caf50",
              zIndex: 1,
            }}
          ></div>

          {timelineEvents.map((event, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                position: "relative",
                margin: "0 30px",
                zIndex: 2,
              }}
            >
              {/* Icon */}
              <div
                style={{
                  width: "30px",
                  height: "30px",
                  backgroundColor: "#4caf50",
                  color: "white",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: "10px",
                }}
              >
                ✓
              </div>
              {/* Text */}
              <div
                style={{
                  fontWeight: "bold",
                  marginBottom: "5px",
                  textAlign: "center",
                }}
              >
                {event.text}
              </div>
              {/* Date */}
              <div
                style={{
                  color: "#6c757d",
                  fontSize: "14px",
                  textAlign: "center",
                }}
              >
                {event.date}
              </div>
            </div>
          ))}
        </div>
        <div
          style={{
            border: "1px solid #ddd",
            borderRadius: "10px",
          }}
        >
          {" "}
          <h4>About the company</h4>
          <div>
            Lorem ipsum dolor sit amet excepturi unde inventore ullam aspernatur
            vitae placeat illo nam dolorum? Reprehenderit blanditiis voluptatem
            excepturi corrupti voluptates provident! Quam repellendus laborum
            provident aspernatur expedita, ea illo reiciendis. consectetur
            adipisicing elit. Iusto ipsam tempora rem optio eaque ipsum
            voluptatum placeat voluptas autem similique.
          </div>
          <br />
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor velit
          delectus voluptatum officiis nisi, optio dolores hic praesentium
          veritatis fuga quas, et incidunt vel quibusdam eos eveniet? Hic
          reprehenderit tempora dolor natus cum eos voluptatum ex labore
          praesentium, molestias officia! Quasi amet iusto doloribus vitae magni
          facilis iste aliquam vero voluptates, aspernatur quas aut neque
          ratione placeat excepturi ut dolorum, expedita minus fugiat ex itaque?
          Cumque beatae molestias voluptate esse reiciendis consequatur, quod
          aliquid excepturi unde inventore ullam aspernatur vitae placeat illo
          nam dolorum? Reprehenderit blanditiis voluptatem excepturi corrupti
          voluptates provident! Quam repellendus laborum provident aspernatur
          expedita, ea illo reiciendis.placeat excepturi ut dolorum, expedita
          minus fugiat ex itaque? Cumque beatae molestias voluptate esse
          reiciendis consequatur, quod aliquid excepturi unde inventore ullam
          aspernatur vitae placeat illo nam dolorum? Reprehenderit blanditiis
          voluptatem excepturi corrupti voluptates provident! Quam repellendus
          laborum provident aspernatur expedita, ea illo reiciendis.
        </div>
      </div>
    </>
  );
};

export default IPOTimeline;
