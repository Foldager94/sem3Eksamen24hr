import React, { useEffect, useState } from "react";
import facade from "./apiFacade";
import { UserUrlUserCount } from "./../sites";
import UserDogInput from "./UserDogInput";
import UsersDogs from "./UsersDogs";

const url = "http://localhost:8080/jpareststarter/api/dog/myDogs/";

const UserSite = () => {
  const [userDogs, setUserDogs] = useState([]);
  const [editDog, setEditDog] = useState({});
  const [isEdit, setIsEdit] = useState(false);
  useEffect(() => {
    let options = facade.makeOptions("GET", true);
    fetch(url, options)
      .then((res) => res.json())
      .then((data) => {
        setUserDogs(data);
      });
  }, [isEdit]);
  return (
    <>
      <UserDogInput
        array={userDogs}
        setArray={setUserDogs}
        editDog={editDog}
        setEditDog={setEditDog}
        isEdit={isEdit}
        setIsEdit={setIsEdit}
      />
      <UsersDogs
        array={userDogs}
        setEditDog={setEditDog}
        setIsEdit={setIsEdit}
      />
    </>
  );
};

export default UserSite;
