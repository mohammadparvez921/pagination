import axios from 'axios';

const fetchData = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/photos');
    //   console.log(response.data);
      return response.data;
    } catch (error) {
        console.log(error);
    } 
    }
  

  const getUserData = async function  (page,numOfUsers) { 
    let data=await fetchData();
     let imgArr=data.slice((page-1)*numOfUsers,page*numOfUsers);
    return imgArr;
  };
  
  export default getUserData;
  