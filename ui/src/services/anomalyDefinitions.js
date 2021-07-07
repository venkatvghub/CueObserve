import apiService from "./api";
import { message } from "antd"

class AnomalyDefService {

    async getAnomalyDefs(){
        const response = await apiService.get("anomaly/anomalyDefs")
        return response
    }
    async addAnomalyDef(payload){
        const response = await apiService.post("anomaly/addAnomalyDef" , payload)
        if(response.success == true){
            message.success(response.message)
            return response
        } else {
            message.error(response.message);
            return null
        }
    }
    async editAnomalyDef(payload){
        const response = await apiService.put("anomaly/editAnomalyDef",payload)
        if(response.success == true){
            message.success(response.message)
            return response
        } else {
            message.error(response.message);
            return null
        }
    }
    async deleteAnomalyDef(id){
        const response = await apiService.delete("anomaly/anomalyDef/" + id)
        if(response.success == true){
            message.success(response.message)
            return response
        } else {
            message.error(response.message);
            return null
        }
    }

}
let anomalyDefService = new AnomalyDefService();
export default anomalyDefService;
