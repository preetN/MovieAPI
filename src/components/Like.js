import React, { useEffect, useState } from "react";
import Card from "./Card";
import { Tab, Tabs } from "react-bootstrap";

function Like({ boring, awesome }) {
  const [boringlist, setBoringList] = useState([]);
  const [awesomeList, setAwesomeList] = useState([]);
  useEffect(() => {
    setBoringList(boring);
  }, [boring]);
  useEffect(() => {
    setAwesomeList(awesome);
  }, [awesome]);
  const handleOnRemove = (type) => {
    if (type === "boring") {
      console.log("i will rem boring");
    } else if (type === "awesome") {
      console.log("i will remove awesome");
    }
  };
  return (
    <>
      <div className="container mt-3 p-2 bg-black bg-opacity-25  rounded">
        <Tabs
          id="controlled-tabs"
          selectedTabClassName="bg-danger"
          defaultActiveKey="profile"
          className="mb-3 text-danger"
        >
          <Tab eventKey="all" title="All">
            <div className="d-flex flex-wrap">
              {awesomeList.length > 0 &&
                awesomeList.map((item) => <Card movie={item} />)}
              {boringlist.length > 0 &&
                boringlist.map((item) => <Card movie={item} />)}
            </div>{" "}
          </Tab>
          <Tab eventKey="awesome" title="Awesome">
            <div className="d-flex flex-wrap">
              {awesomeList.length > 0 &&
                awesomeList.map((item) => (
                  <Card
                    movie={item}
                    handleOnRemove={() => handleOnRemove("awesome")}
                  />
                ))}
            </div>
          </Tab>
          <Tab eventKey="boring" title="Boring">
            <div className="d-flex flex-wrap">
              {boringlist.length > 0 &&
                boringlist.map((item) => (
                  <Card
                    movie={item}
                    handleOnRemove={() => handleOnRemove("boring")}
                  />
                ))}
            </div>
          </Tab>
        </Tabs>
      </div>
    </>
  );
}

export default Like;
