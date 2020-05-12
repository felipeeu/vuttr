import axios from "axios";

class ConfigService {
  static endPointBaseUrl = `https://my-db-challenge.herokuapp.com/`;


  static publicHeaders = () => {
    const params = {
      'Accept': 'application/json',
      "Content-Type": "application/json"
    };
    return params;
  };

  
  static publicApiEndpoint = () => {
    const instance = axios.create({
      baseURL: ConfigService.endPointBaseUrl,
      headers: ConfigService.publicHeaders()
    });

    return instance;
  };
}

export default ConfigService;
