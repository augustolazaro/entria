import { StackNavigator } from 'react-navigation'

// Screens
import HomeScreen from '../screens/HomeScreen'
import ProfileScreen from '../screens/ProfileScreen'
import ReposScreen from '../screens/ReposScreen'
import RepoScreen from '../screens/RepoScreen'
import RepoTabNavigator from './RepoTabNavigator'

const routes = {
  Home: { screen: HomeScreen },
  Profile: { screen: ProfileScreen },
  Repositories: { screen: ReposScreen },
  Repo: { screen: RepoTabNavigator }
}

const config = {
  initialRouteName: 'Repositories',
  cardStyle: { backgroundColor: 'white' }
}

export default StackNavigator(routes, config)
