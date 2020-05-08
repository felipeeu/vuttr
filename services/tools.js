import ConfigService from "./config";

class ToolsService {

  static getTools = async (queryParam) => {
    const axiosInstance = ConfigService.apiEndpoint();

    try {
      const response = await axiosInstance.get(`/tools/?q=${queryParam}`);
      if (response) return response;
    } catch (exception) {
      throw `Failed to get tools. ${exception.toString()}`;
    }
  };

  static getToolsByTag = async (tag) =>{
    const axiosInstance = ConfigService.apiEndpoint();

    try {
      const response = await axiosInstance.get(`/tools/tags_like=${tag}`);
      if (response) return response;
    } catch (exception) {
      throw `Failed to get tools by tag. ${exception.toString()}`;
    }
  }
  
  static registerTool = async params => {
    const axiosInstance = ConfigService.apiEndpoint();

    try {
      const response = await axiosInstance.post("/tools/", {
        ...params
      });
      if (response) return response;
    } catch (exception) {
      throw `Failed to register tool. ${exception.toString()}`;
    }
  };

  static deleteTool = async params => {
    const axiosInstance = ConfigService.apiEndpoint();

    try {
      const response = await axiosInstance.delete(`/tools/${params}`);
      if (response) return response;
    } catch (exception) {
      throw `Failed to delete tool. ${exception.toString()}`;
    }
  };
}

export default ToolsService;