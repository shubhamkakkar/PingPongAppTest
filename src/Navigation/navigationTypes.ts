// eslint-disable-next-line no-unused-vars
import { StackNavigationProp } from '@react-navigation/stack';
// eslint-disable-next-line no-unused-vars
import { RouteProp } from '@react-navigation/native';
import { TEndGameProps } from '../Components/PlayersWins/PlayersWins';

export type TypeStackParamList = {
  PlayersInformationScreen: undefined;
  SplashScreen: undefined;
  PlayersWinAddScreen: { playerOneName: string; playerTwoName: string };
  WinnerScreen: TEndGameProps;
};

type SplashScreenNavigationProp = StackNavigationProp<
  TypeStackParamList,
  'SplashScreen'
>;
type SplashScreenRouteProp = RouteProp<TypeStackParamList, 'SplashScreen'>;

export type TSplashScreenNavigation = {
  navigation: SplashScreenNavigationProp;
  route: SplashScreenRouteProp;
};

type PlayersInformationScreenNavigationProp = StackNavigationProp<
  TypeStackParamList,
  'PlayersInformationScreen'
>;
type PlayersInformationScreenRouteProp = RouteProp<
  TypeStackParamList,
  'PlayersInformationScreen'
>;

export type TPlayersInformationScreenNavigation = {
  navigation: PlayersInformationScreenNavigationProp;
  route: PlayersInformationScreenRouteProp;
};
type PlayersWinAddScreenNavigationProp = StackNavigationProp<
  TypeStackParamList,
  'PlayersWinAddScreen'
>;
type PlayersWinAddScreenRouteProp = RouteProp<
  TypeStackParamList,
  'PlayersWinAddScreen'
>;

export type TPlayersWinAddScreenNavigation = {
  navigation: PlayersWinAddScreenNavigationProp;
  route: PlayersWinAddScreenRouteProp;
};

type WinnerScreenNavigationProp = StackNavigationProp<
  TypeStackParamList,
  'WinnerScreen'
>;
type WinnerScreenRouteProp = RouteProp<TypeStackParamList, 'WinnerScreen'>;

export type TWinnerScreenNavigation = {
  navigation: WinnerScreenNavigationProp;
  route: WinnerScreenRouteProp;
};
