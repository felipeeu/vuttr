import axios from "axios";
class ConfigService {
  static endPointBaseUrl = `https://localhost:3000/`;

  /**
   * Receives a object and transpile it to a query parameter string
   * @param {obj} props Object with the key & value that will be transpiler to a query parameter string
   * @returns Query parameter string for a GET request
   */

 

  static publicHeaders = () => {
    const params = {
      "Content-Type": "application/json"
    };
    return params;
  };

  /**
   * Create a instance with the api information's
   * @param {string} url URL path
   * @param {obj} data Object containing the key and value that will be passed do the URL query param
   * @returns Get url ready to be requested
   */
 

  static publicApiEndpoint = () => {
    const instance = axios.create({
      baseURL: ConfigService.endPointBaseUrl,
      headers: ConfigService.publicHeaders()
    });

    return instance;
  };
}

export default ConfigService;
