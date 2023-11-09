npm install firebase
Usage
Import the useFirestore hook into your React component:

javascript

import { useEffect, useState } from "react";
import { useFirestore } from "./path-to-useFirestore";
Initialize the hook within your component:

javascript

const { data, error, loading, getData, addData, deleteData, updateData, searchData } = useFirestore();
Methods
getData()
Fetches data from the Firestore collection based on the current user's UID.

javascript

useEffect(() => {
  getData();
}, []);
addData(url: string)
Adds new data to the Firestore collection.

javascript

const handleAddData = (url) => {
  addData(url);
};
deleteData(nanoid: string)
Deletes data from the Firestore collection based on the provided nanoid.

javascript

const handleDeleteData = (nanoid) => {
  deleteData(nanoid);
};
updateData(nanoid: string, newOrigin: string)
Updates the origin field of existing data in the Firestore collection based on the provided nanoid.

javascript

const handleUpdateData = (nanoid, newOrigin) => {
  updateData(nanoid, newOrigin);
};
searchData(nanoid: string)
Searches for specific data in the Firestore collection based on the provided nanoid.

javascript

const handleSearchData = (nanoid) => {
  searchData(nanoid);
};
State
The hook provides the following state variables:

data: An array containing the fetched data from the Firestore collection.
error: Any error that occurs during data fetching, adding, deleting, updating, or searching.
loading: Indicates whether data operations are in progress.
Example
javascript

const YourComponent = () => {
  const { data, error, loading, getData, addData, deleteData, updateData, searchData } = useFirestore();

  useEffect(() => {
    getData();
  }, []);

  const handleAddData = (url) => {
    addData(url);
  };

  const handleDeleteData = (nanoid) => {
    deleteData(nanoid);
  };

  const handleUpdateData = (nanoid, newOrigin) => {
    updateData(nanoid, newOrigin);
  };

  const handleSearchData = (nanoid) => {
    searchData(nanoid);
  };

  // Your component JSX here
};
Feel free to adapt this useFirestore hook to fit the specific requirements of your project.

r


Este sería tu archivo `useFirestore.js` en formato Markdown. Puedes copiar y pegar este código en un archivo Markdown para documentar tu código.
