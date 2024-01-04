import React from 'react';
import UserTable from './components/UserTable';
import getUserData from './api/user';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      numOfUsers: 40,
      page: 1,
      userData: [],
    };
  }

  componentDidMount() {
    // Attach a scroll event listener when the component mounts
    window.addEventListener('scroll', this.handleScroll);
    
    // Load initial data
    this.loadMoreData();
  }

  componentWillUnmount() {
    // Remove the scroll event listener when the component unmounts
    window.removeEventListener('scroll', this.handleScroll);
  }

  loadMoreData = () => {
    const { page, numOfUsers, userData } = this.state;

    // Fetch more data based on current page and number of users
    const newData = getUserData(page, numOfUsers);

    // Update state with the new data
    this.setState({
      userData: [...userData, ...newData],
      page: page + 1,
    });
  };

  handleScroll = () => {
    const { page } = this.state;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;

    // Check if the user has scrolled to the bottom 20 pixels before reaching the end
    if (documentHeight - (scrollTop + windowHeight) < 20) {
      // Load more data when the user reaches the bottom
      this.loadMoreData();
    }
  };

  render() {
    const { userData } = this.state;

    return (
      <div>
        <UserTable userData={userData} />
      </div>
    );
  }
}

export default App;
