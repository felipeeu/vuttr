import axios from "axios";

class ConfigService {
  static endPointBaseUrl = `https://localhost:3000/`;


  static publicHeaders = () => {
    const params = {
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
