import axios from "axios"
import { CompanySearch } from "./company"

interface ISearchResponse {
  data : CompanySearch[];
}

export const searchCompaniesApi = async (query : string) => {
  try {
    const data = await axios.get<ISearchResponse>(
      `https://financialmodelingprep.com/api/v3/search-ticker?query=${ query }&limit=10&exchange=NASDAQ&apikey=${ process.env.REACT_APP_API_KEY }`
    );
    
    return data;
  }
  catch (error) {
    if(axios.isAxiosError(error)) {
      console.log("Error Message: ", error.message);
      return error.message;
    }
    else {
      console.log("Unexpected error: ", error);
      return `An unexpected error has ocurred: ${error}`;
    }
  }
}