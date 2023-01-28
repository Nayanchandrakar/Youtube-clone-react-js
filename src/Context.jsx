import React, { createContext, useContext, useEffect, useState } from "react";
import { Fetchdata } from "./Api";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [nav, setnav] = useState(true);
  const [Equery, setquery] = useState("New");
  const [progress, setProgress] = useState(0);
  const [apidata, setapidata] = useState([{}]);
  const [searchtext, setsearchtext] = useState("");

  let navigation = () => {
    nav == false ? setnav(true) : setnav(false);
  };

  let arr = [];

  let timefunction = (time) => {
    let result = new Date(time * 1000)?.toISOString().slice(11, 19);
    let timelogic =
      result?.split(":")[0] == "00"
        ? `${result.split(":")[1]} : ${result.split(":")[2]}`
        : result;
    return result;
  };

  function abbreviateNumber(value) {
    var newValue = value;
    if (value >= 1000) {
      var suffixes = ["", "K", "M", "B", "T"];
      var suffixNum = Math.floor(("" + value).length / 3);
      var shortValue = "";
      for (var precision = 2; precision >= 1; precision--) {
        shortValue = parseFloat(
          (suffixNum != 0
            ? value / Math.pow(1000, suffixNum)
            : value
          ).toPrecision(precision)
        );
        var dotLessShortValue = (shortValue + "").replace(
          /[^a-zA-Z 0-9]+/g,
          ""
        );
        if (dotLessShortValue.length <= 2) {
          break;
        }
      }
      if (shortValue % 1 != 0) shortValue = shortValue.toFixed(1);
      newValue = shortValue + suffixes[suffixNum];
    }
    return newValue;
  }

  let LocalHistory = (
    thumbnail,
    Views,
    avtarimage,
    time,
    title,
    authorTitle,
    publish
  ) => {
    arr.push({
      thumbnail,
      Views,
      avtarimage,
      time,
      title,
      authorTitle,
      publish,
    });
    let str = JSON.stringify(arr.reverse());
    return localStorage.setItem("history", str);
  };

  let historydata = () => {
    return JSON.parse(localStorage.getItem("history"));
  };

  const ClearHistory = (navigation) => {
    return (
      localStorage.clear(), historydata(), (arr = []), navigation("/history")
    );
  };

  let FETCHAPI = (query) => {
    Fetchdata("search/", `${query}`).then((res) => {
      setapidata(res);
      setProgress(100);
    });
  };

  useEffect(() => {
    FETCHAPI(Equery), historydata();
  }, [Equery]);

  return (
    <AppContext.Provider
      value={{
        navigation,
        ClearHistory,
        searchtext,
        historydata,
        setquery,
        LocalHistory,
        setsearchtext,
        nav,
        abbreviateNumber,
        timefunction,
        progress,
        setnav,
        setProgress,
        apidata,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
