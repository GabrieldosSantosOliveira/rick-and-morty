import { Loading } from '@/components/index';
import { Routes } from '@/main/routes/index';
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
    <>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      {isFontsLoaded ? <Routes /> : <Loading />}
    </>
  );
}
