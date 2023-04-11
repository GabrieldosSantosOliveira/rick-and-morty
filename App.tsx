import { Loading } from '@/components';
import { ServiceProvider } from '@/contexts/ServiceContext';
import { Routes } from '@/routes';
import {
  Lexend_600SemiBold,
  Lexend_700Bold,
  useFonts,
} from '@expo-google-fonts/lexend';
import { StatusBar } from 'react-native';
export default function App() {
  const [isFontsLoaded] = useFonts({
    Lexend_600SemiBold,
    Lexend_700Bold,
  });
  return (
    <ServiceProvider>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      {isFontsLoaded ? <Routes /> : <Loading />}
    </ServiceProvider>
  );
}
