import axios from "axios";

const EMPLOYEE_BASE_REST_API_URL= "http://localhost:6003/employees/api/v1/";

class EmployeeService{
    getAllEmployees(){
        return axios.get(EMPLOYEE_BASE_REST_API_URL);
    }
}
export default new EmployeeService();