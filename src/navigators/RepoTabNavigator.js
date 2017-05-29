import { TabNavigator } from 'react-navigation'

// Screens
import BranchesScreen from '../screens/BranchesScreen'
import CommitsScreen from '../screens/CommitsScreen'
import IssuesScreen from '../screens/IssuesScreen'
import RepoScreen from '../screens/RepoScreen'

const routes = {
  Repo: { screen: RepoScreen },
  Issues: { screen: IssuesScreen },
  Branches: { screen: BranchesScreen },
  Commits: { screen: CommitsScreen },
}

const config = {
  initialRouteName: 'Repo',
  tabBarOptions: {
    activeTintColor: '#24292E',
    inactiveTintColor: '#24292E',
    indicatorStyle: {
      backgroundColor: '#E36209',
    },
    style: {
      backgroundColor: '#f5f5f5'
    }
  }
}

export default TabNavigator(routes, config)
