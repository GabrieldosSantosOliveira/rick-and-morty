import { Episodes } from "@/screens/Episodes"
import { makeHttpClient } from "../infra/MakeHttpClient"
import { GetEpisodesByPageRepositoryImpl } from "@/infra/repositories/GetEpisodesByPageRepositoryImpl"
import { GetEpisodesByPageUseCaseImpl } from "@/data/use-cases/GetEpisodesByPageUseCaseImpl"

export const MakeEpisodes =() =>{
  const {httpClient} = makeHttpClient()
  const getEpisodesByPageRepositoryImpl = new GetEpisodesByPageRepositoryImpl(httpClient)
  const getCharactersByPageUseCaseImpl = new GetEpisodesByPageUseCaseImpl(getEpisodesByPageRepositoryImpl)
  return (
    <Episodes getEpisodesByPageUseCase={getCharactersByPageUseCaseImpl}/>
  )
}
