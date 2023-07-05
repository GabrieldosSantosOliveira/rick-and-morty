import { Episodes, Characters } from '@/screens';
import { Theme } from '@/styles';
import { Fontisto, Entypo } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const { Screen, Navigator } = createBottomTabNavigator();
export const AppRoutes = () => {
  const { colors, fonts } = Theme;
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.white,
        tabBarStyle: {
          backgroundColor: colors.background,
          borderTopWidth: 0,
          height: 70,
        },
        tabBarItemStyle: { paddingVertical: 10 },
        tabBarLabelStyle: {
          fontFamily: fonts.Lexend[600],
          fontSize: 12,
        },
      }}
    >
      <Screen
        name="characters"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Fontisto name="persons" size={size} color={color} />
          ),
          tabBarLabel: 'Personagens',
        }}
        component={Characters}
      />
      <Screen
        name="episodes"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="folder" size={size} color={color} />
          ),
          tabBarLabel: 'Episódios',
        }}
        component={Episodes}
      />
    </Navigator>
  );
};
