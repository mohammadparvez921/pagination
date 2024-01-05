import React from 'react';
import UserTable from './components/UserTable';
import getUserData from './api/user';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      numOfUsers: 5,
      page: 1,
      userData: [],
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.loadMoreData();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  loadMoreData = async () => {
    const { page, numOfUsers, userData } = this.state
    const newData = await getUserData(page, numOfUsers);                                                 
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
    if (documentHeight - (scrollTop + windowHeight) < 20) {
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
